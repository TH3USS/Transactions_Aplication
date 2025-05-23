const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const db = require('../models');
const User = db.user;
const Transaction = db.Transaction;
require('dotenv').config();

const register = async (req, res) => {
  const { name, cpf, email, password, role } = req.body;

  const userExists = await User.findOne({ where: { cpf } });
  if (userExists) return res.status(400).json({ error: 'User already exists' });

  const hashedPassword = await bcrypt.hash(password, 10);
  const user = await User.create({ name, cpf, email, password: hashedPassword, role });

  await Transaction.update(
  { userId: user.id },
  {
    where: {
      cpf,
      userId: null
    }
  }
);


  res.status(201).json({ message: 'User registered successfully' });
};

const login = async (req, res) => {
  const { cpf, password } = req.body;
  const user = await User.findOne({ where: { cpf } });

  if (!user) return res.status(400).json({ error: 'Invalid credentials' });

  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid) return res.status(400).json({ error: 'Invalid credentials' });

  const token = jwt.sign({ id: user.id, role: user.role }, process.env.JWT_SECRET, {
    expiresIn: '1d',
  });

  res.json({ 
    token,
  user: {
    cpf: user.cpf,
    role: user.role
  } });
};

module.exports = { register, login };
