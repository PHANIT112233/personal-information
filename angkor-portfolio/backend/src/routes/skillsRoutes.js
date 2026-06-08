const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const skillsController = require('../controllers/skillsController');

router.get('/public/skills', skillsController.getSkills);
router.get('/skills', auth, skillsController.getSkills);
router.post('/skills', auth, skillsController.addSkill);
router.delete('/skills/:id', auth, skillsController.deleteSkill);

module.exports = router;
