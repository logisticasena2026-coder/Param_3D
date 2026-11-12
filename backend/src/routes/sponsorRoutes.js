const express = require('express');
const router = express.Router();
const sponsorController = require('../controllers/sponsorController');
const { verifyToken, requireAdmin } = require('../middleware/authMiddleware');

router.get('/', sponsorController.getSponsors);
router.post('/', verifyToken, requireAdmin, sponsorController.createSponsor);
router.put('/:id', verifyToken, requireAdmin, sponsorController.updateSponsor);
router.delete('/:id', verifyToken, requireAdmin, sponsorController.deleteSponsor);

module.exports = router;
