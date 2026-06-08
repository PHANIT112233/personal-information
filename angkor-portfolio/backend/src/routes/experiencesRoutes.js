const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const experiencesController = require('../controllers/experiencesController');

router.get('/public/experiences', experiencesController.getExperiences);
router.get('/experiences', auth, experiencesController.getExperiences);
router.post('/experiences', auth, experiencesController.addExperience);
router.delete('/experiences/:id', auth, experiencesController.deleteExperience);

module.exports = router;
