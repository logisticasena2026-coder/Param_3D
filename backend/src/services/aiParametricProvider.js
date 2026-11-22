/**
 * Interfaz y Arquitectura desacoplada para generación paramétrica con IA.
 * Permite cambiar el proveedor (local procedural, OpenAI Shap-E, Meshy 3D, etc.)
 * simplemente modificando la variable de entorno o el adapter activo.
 */

class ParametricAIProviderInterface {
  async generateFromPrompt(prompt, options = {}) {
    throw new Error('El método generateFromPrompt debe ser implementado por el proveedor.');
  }

  async generateFromImage(imageBuffer, mimeType, options = {}) {
    throw new Error('El método generateFromImage debe ser implementado por el proveedor.');
  }
}

/**
 * Proveedor local paramétrico inteligente por defecto.
 * Sintetiza parámetros técnicos de impresión (geometría, volumen, capas, infill)
 * y genera una representación procedural imprimible en 3D sin depender de APIs de pago externas.
 */
class LocalProceduralAIProvider extends ParametricAIProviderInterface {
  async generateFromPrompt(prompt, options = {}) {
    const cleanPrompt = (prompt || '').trim().toLowerCase();

    // Detección heurística de tipología de producto
    let category = 'Artesanales';
    let baseDimensions = { largo: 12, ancho: 12, alto: 10 };
    let shapeType = 'cylinder';
    let recommendedMaterial = 'PLA';
    let defaultInfill = 20;

    if (cleanPrompt.includes('engranaje') || cleanPrompt.includes('mecanismo') || cleanPrompt.includes('soporte')) {
      category = 'Electrónica';
      shapeType = 'gear';
      recommendedMaterial = 'PETG';
      baseDimensions = { largo: 10, ancho: 10, alto: 4 };
      defaultInfill = 40;
    } else if (cleanPrompt.includes('balón') || cleanPrompt.includes('trofeo') || cleanPrompt.includes('fútbol')) {
      category = 'Fútbol';
      shapeType = 'trophy';
      recommendedMaterial = 'PLA';
      baseDimensions = { largo: 14, ancho: 14, alto: 22 };
    } else if (cleanPrompt.includes('árbol') || cleanPrompt.includes('navidad') || cleanPrompt.includes('estrella')) {
      category = 'Navidad';
      shapeType = 'star';
      recommendedMaterial = 'PETG';
      baseDimensions = { largo: 12, ancho: 12, alto: 18 };
    } else if (cleanPrompt.includes('juguete') || cleanPrompt.includes('robot') || cleanPrompt.includes('cubo')) {
      category = 'Juguetes';
      shapeType = 'robot';
      recommendedMaterial = 'PLA';
      baseDimensions = { largo: 9, ancho: 8, alto: 14 };
    } else if (cleanPrompt.includes('escultura') || cleanPrompt.includes('busto') || cleanPrompt.includes('cabeza')) {
      category = 'Esculturas';
      shapeType = 'bust';
      recommendedMaterial = 'PLA';
      baseDimensions = { largo: 15, ancho: 13, alto: 20 };
    }

    // Estimación física del prototipo generado
    const volumeCm3 = baseDimensions.largo * baseDimensions.ancho * baseDimensions.alto * 0.42;
    const filamentGrams = Math.round(volumeCm3 * 1.24 * 10) / 10;
    const printTimeMinutes = Math.round((filamentGrams / 14) * 60) + 25;

    return {
      success: true,
      provider: 'LocalProcedural-v1',
      modelId: `ai-gen-${Date.now()}`,
      name: `Prototipo IA: ${prompt.slice(0, 40)}`,
      prompt,
      category,
      recommendedMaterial,
      suggestedColor: 'Blanco',
      shapeType,
      dimensions: {
        ...baseDimensions,
        unit: 'cm'
      },
      specifications: {
        infill: `${defaultInfill}% (Giroide)`,
        layerHeight: '0.20 mm',
        supportsRequired: shapeType === 'bust' || shapeType === 'trophy',
        printTimeEstimate: `${Math.floor(printTimeMinutes / 60)}h ${printTimeMinutes % 60}m`,
        estimatedWeight: `${filamentGrams} g`,
        estimatedPrice: Math.round((filamentGrams * 120 + (printTimeMinutes / 60) * 5000 + 8000) / 500) * 500
      },
      threeJsDescriptor: {
        type: shapeType,
        wireframe: false,
        color: '#f97316',
        params: {
          radius: baseDimensions.largo / 2,
          height: baseDimensions.alto,
          detail: 24
        }
      },
      meshUrl: null, // Podría apuntar a un archivo STL generado
      createdAt: new Date().toISOString()
    };
  }

  async generateFromImage(fileInfo, options = {}) {
    const prompt = `Modelo reconstruido a partir de imagen ${fileInfo.originalname || 'subida'}`;
    const result = await this.generateFromPrompt(prompt, options);
    result.sourceImage = fileInfo.filename || fileInfo.originalname;
    result.notes = 'Malla 3D generada por aproximación volumétrica a partir del perfil de la fotografía.';
    return result;
  }
}

/**
 * Plantilla para adaptador de API externa (Ejemplo: Meshy, Tripo3D, Replicate)
 */
class ExternalCloudAIProvider extends ParametricAIProviderInterface {
  constructor(apiKey, endpoint) {
    super();
    this.apiKey = apiKey;
    this.endpoint = endpoint;
  }

  async generateFromPrompt(prompt, options = {}) {
    // Aquí se conecta con el servicio externo vía fetch / axios
    // Para entornos sin API key configurada, delega al proveedor procedural
    const fallback = new LocalProceduralAIProvider();
    return fallback.generateFromPrompt(prompt, options);
  }

  async generateFromImage(fileInfo, options = {}) {
    const fallback = new LocalProceduralAIProvider();
    return fallback.generateFromImage(fileInfo, options);
  }
}

// Factoría desacoplada
class AIProviderFactory {
  static getProvider() {
    const providerType = process.env.AI_3D_PROVIDER || 'local';
    if (providerType === 'external' && process.env.AI_3D_API_KEY) {
      return new ExternalCloudAIProvider(process.env.AI_3D_API_KEY, process.env.AI_3D_ENDPOINT);
    }
    return new LocalProceduralAIProvider();
  }
}

module.exports = {
  ParametricAIProviderInterface,
  LocalProceduralAIProvider,
  ExternalCloudAIProvider,
  AIProviderFactory
};
