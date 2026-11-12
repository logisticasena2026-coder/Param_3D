const express = require('express');
const router = express.Router();
const preferencesController = require('../controllers/userPreferencesController');
const { verifyToken } = require('../middleware/authMiddleware');

router.get('/', verifyToken, preferencesController.getPreferences);
router.put('/', verifyToken, preferencesController.updatePreferences);

module.exports = router;
