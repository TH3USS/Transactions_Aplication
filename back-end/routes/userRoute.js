const express = require('express');
const { authenticate, authorize } = require('../middleware/authMiddleware');
const { getUserExtract, getUserWallet } = require('../controllers/userController');

const router = express.Router();

router.get('/extrato', authenticate, authorize(['comum']), getUserExtract);
router.get('/carteira', authenticate, authorize(['comum']), getUserWallet);

module.exports = router;
