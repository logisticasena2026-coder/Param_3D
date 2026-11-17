const express = require('express');
const router = express.Router();
const projectController = require('../controllers/projectController');
const clientController = require('../controllers/clientController');
const { verifyToken, requireAdmin } = require('../middleware/authMiddleware');
const upload = require('../middleware/uploadMiddleware');

// Todas las rutas del módulo de proyectos son de administración del taller
router.use(verifyToken, requireAdmin);

// Metadatos y resumen para dashboard
router.get('/meta', projectController.getProjectsMeta);
router.get('/summary', projectController.getProjectsSummary);

// Clientes
router.get('/clients', clientController.getAllClients);
router.get('/clients/:id', clientController.getClientById);
router.post('/clients', clientController.createClient);
router.put('/clients/:id', clientController.updateClient);
router.delete('/clients/:id', clientController.deleteClient);

// Proyectos
router.get('/', projectController.getAllProjects);
router.get('/:id', projectController.getProjectById);
router.post('/', projectController.createProject);
router.put('/:id', projectController.updateProject);
router.delete('/:id', projectController.deleteProject);

// Piezas del proyecto
router.post('/:projectId/pieces', projectController.addPiece);
router.put('/pieces/:pieceId', projectController.updatePiece);
router.delete('/pieces/:pieceId', projectController.deletePiece);

// Costos de la pieza (upsert 1:1)
router.put('/pieces/:pieceId/cost', projectController.upsertCost);

// Archivos multimedia de la pieza (subida con multer o ruta manual)
router.post('/pieces/:pieceId/files', upload.single('file'), projectController.addProjectFile);
router.delete('/files/:fileId', projectController.deleteProjectFile);

// Pagos del proyecto
router.post('/:projectId/payments', projectController.addPayment);
router.put('/payments/:paymentId', projectController.updatePayment);
router.delete('/payments/:paymentId', projectController.deletePayment);

module.exports = router;
