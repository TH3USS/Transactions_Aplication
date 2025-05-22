const express = require('express');
const { register, login } = require('../controllers/authController');
const { authenticate, authorize } = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/register', register);
router.post('/login', login);

// Exemplo de rota protegida
router.get('/admin-only', authenticate, authorize(['admin']), (req, res) => {
  res.json({ message: 'Bem-vindo, admin!' });
});

router.get('/user-only', authenticate, authorize(['user']), (req, res) => {
  res.json({ message: 'Bem-vindo, usuário comum!' });
});

module.exports = router;
