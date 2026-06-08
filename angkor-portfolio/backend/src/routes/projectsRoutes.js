const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const upload = require('../middleware/upload');
const projectsController = require('../controllers/projectsController');

router.get('/public/projects', projectsController.getProjects);
router.get('/projects', auth, projectsController.getProjects);
router.post('/projects', auth, upload.single('image'), projectsController.addProject);
router.delete('/projects/:id', auth, projectsController.deleteProject);

module.exports = router;
