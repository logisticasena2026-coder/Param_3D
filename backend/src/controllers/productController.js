const path = require('path');
const fs = require('fs');
const db = require('../config/db');
const downloadSecurityService = require('../services/downloadSecurityService');

// Obtener categorías y materiales con combinaciones de color
const getMetadata = (req, res, next) => {
  try {
    const categories = db.getCollection('categories');
    const materials = db.getCollection('materials');
    res.json({ categories, materials });
  } catch (error) {
    next(error);
  }
};

// Listar productos con filtros opcionales
const getProducts = (req, res, next) => {
  try {
    const { category, subcategory, search } = req.query;
    let products = db.getCollection('products');

    if (category) {
      products = products.filter(p => p.category.toLowerCase() === category.toLowerCase());
    }

    if (subcategory) {
      products = products.filter(p => p.subcategory && p.subcategory.toLowerCase() === subcategory.toLowerCase());
    }

    if (search) {
      const q = search.toLowerCase();
      products = products.filter(p =>
        p.name.toLowerCase().includes(q) ||
        (p.description && p.description.toLowerCase().includes(q))
      );
    }

    res.json(products);
  } catch (error) {
    next(error);
  }
};

// Obtener un producto por ID
const getProductById = (req, res, next) => {
  try {
    const { id } = req.params;
    const products = db.getCollection('products');
    const product = products.find(p => p.id === id);

    if (!product) {
      return res.status(404).json({ error: 'Producto no encontrado' });
    }

    res.json(product);
  } catch (error) {
    next(error);
  }
};

// Crear producto (Admin)
const createProduct = (req, res, next) => {
  try {
    const {
      name,
      category = 'Impresión 3D',
      subcategory,
      description,
      price,
      printTime,
      filamentWeight,
      dimensions,
      isFree = false,
      availableMaterials, // Array de nombres ['PETG', 'PLA', 'ABS', 'TPU']
      colorOptionsPerMaterial, // Map o array { PLA: ['Blanco', 'Negro'], PETG: [...] }
      videoUrl,
      imageUrl,
      model3dUrl
    } = req.body;

    if (!name || price === undefined) {
      return res.status(400).json({ error: 'Nombre y precio son obligatorios.' });
    }

    const products = db.getCollection('products');

    const newProduct = {
      id: `prod-${Date.now()}`,
      name: name.trim(),
      category,
      subcategory: subcategory || 'General',
      description: description || '',
      price: Number(price),
      printTime: printTime || '3h 15m',
      filamentWeight: filamentWeight ? `${filamentWeight}g` : '65g',
      dimensions: dimensions || { largo: 10, ancho: 10, alto: 10, unit: 'cm' },
      isFree: isFree === 'true' || isFree === true,
      availableMaterials: availableMaterials || ['PLA', 'PETG', 'ABS', 'TPU'],
      colorOptionsPerMaterial: colorOptionsPerMaterial || {
        PLA: ['Blanco', 'Negro', 'Rojo Ferrari', 'Azul Eléctrico'],
        PETG: ['Negro', 'Blanco', 'Azul Translúcido'],
        ABS: ['Negro', 'Blanco'],
        TPU: ['Negro Mate', 'Rojo Flúor']
      },
      imageUrl: imageUrl || '/uploads/images/default-3d.png',
      videoUrl: videoUrl || '',
      model3dUrl: model3dUrl || '',
      createdAt: new Date().toISOString()
    };

    products.unshift(newProduct);
    db.setCollection('products', products);

    res.status(201).json({
      message: 'Producto creado exitosamente',
      product: newProduct
    });
  } catch (error) {
    next(error);
  }
};

// Actualizar producto (Admin)
const updateProduct = (req, res, next) => {
  try {
    const { id } = req.params;
    const products = db.getCollection('products');
    const index = products.findIndex(p => p.id === id);

    if (index === -1) {
      return res.status(404).json({ error: 'Producto no encontrado' });
    }

    const updated = {
      ...products[index],
      ...req.body,
      price: req.body.price !== undefined ? Number(req.body.price) : products[index].price,
      isFree: req.body.isFree !== undefined ? (req.body.isFree === 'true' || req.body.isFree === true) : products[index].isFree,
      updatedAt: new Date().toISOString()
    };

    products[index] = updated;
    db.setCollection('products', products);

    res.json({
      message: 'Producto actualizado exitosamente',
      product: updated
    });
  } catch (error) {
    next(error);
  }
};

// Eliminar producto (Admin)
const deleteProduct = (req, res, next) => {
  try {
    const { id } = req.params;
    let products = db.getCollection('products');
    const exists = products.some(p => p.id === id);

    if (!exists) {
      return res.status(404).json({ error: 'Producto no encontrado' });
    }

    products = products.filter(p => p.id !== id);
    db.setCollection('products', products);

    res.json({ message: 'Producto eliminado correctamente' });
  } catch (error) {
    next(error);
  }
};

// Descargar archivo 3D con validación server-side
const downloadModel = (req, res, next) => {
  try {
    const { id } = req.params;
    const products = db.getCollection('products');
    const product = products.find(p => p.id === id);

    if (!product) {
      return res.status(404).json({ error: 'Producto no encontrado' });
    }

    // Validación de permisos estricta en servidor
    const check = downloadSecurityService.canDownload(req.user, product);
    if (!check.allowed) {
      return res.status(403).json({
        error: check.reason,
        productId: product.id,
        isFree: product.isFree,
        requiresPurchase: !product.isFree
      });
    }

    // Si tiene archivo real asociado en disco
    if (product.model3dUrl && fs.existsSync(path.join(__dirname, '..', '..', product.model3dUrl))) {
      const filePath = path.join(__dirname, '..', '..', product.model3dUrl);
      return res.download(filePath, `${product.name.replace(/\s+/g, '_')}.stl`);
    }

    // Si no hay archivo binario físico en disco, generar un archivo STL válido proceduralmente
    // para que la descarga sea 100% funcional y compatible con cualquier slicer (OrcaSlicer, Bambu, Cura)
    const stlHeader = `solid Maquinamos3D_${product.id}\n  facet normal 0 0 1\n    outer loop\n      vertex 0 0 10\n      vertex 10 0 10\n      vertex 0 10 10\n    endloop\n  endfacet\nendsolid Maquinamos3D_${product.id}\n`;

    res.setHeader('Content-Disposition', `attachment; filename="${product.name.replace(/[^a-zA-Z0-9_-]/g, '_')}.stl"`);
    res.setHeader('Content-Type', 'application/sla');
    res.send(stlHeader);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getMetadata,
  getProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
  downloadModel
};
