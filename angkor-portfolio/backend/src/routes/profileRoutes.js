const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const upload = require('../middleware/upload');
const profileController = require('../controllers/profileController');

router.get('/public/profile', profileController.getPublicProfile);
router.get('/profile', auth, profileController.getPublicProfile);
router.post('/profile/update', auth, upload.single('avatar'), profileController.updateProfile);
router.post('/profile/upload-cv', auth, upload.single('cv'), profileController.uploadCV);

module.exports = router;
