const express = require('express');
const { authenticate, authorize } = require('../middleware/authMiddleware');
const { getAdminReport } = require('../controllers/reportController');

const router = express.Router();

router.get('/report', authenticate, authorize(['admin']), getAdminReport);

module.exports = router;
