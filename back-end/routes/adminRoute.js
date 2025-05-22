const express = require('express');
const { authenticate, authorize } = require('../middleware/authMiddleware');
const { getAdminReport } = require('../controllers/adminController');

const router = express.Router();

router.get('/relatorio', authenticate, authorize(['admin']), getAdminReport);

module.exports = router;
