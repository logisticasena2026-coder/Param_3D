const express = require('express');
const router = express.Router();
const clientController = require('../controllers/clientController');
const { verifyToken, requireAdmin } = require('../middleware/authMiddleware');

router.use(verifyToken, requireAdmin);

router.get('/', clientController.getAllClients);
router.get('/:id', clientController.getClientById);
router.get('/:id/stats', clientController.getClientStats);
router.post('/', clientController.createClient);
router.put('/:id', clientController.updateClient);
router.delete('/:id', clientController.deleteClient);

module.exports = router;
