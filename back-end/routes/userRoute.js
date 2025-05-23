const express = require('express');
const { authenticate, authorize } = require('../middleware/authMiddleware');
const { getUserExtract, getUserWallet } = require('../controllers/reportController');

const router = express.Router();

router.get('/extract', authenticate, authorize(['user']), getUserExtract);
router.get('/wallet', authenticate, authorize(['user']), getUserWallet);

module.exports = router;
