const express = require('express');
const sequelize = require('./config/db');
const uploadRoutes = require('./routes/uploadRoutes');
const authRoutes = require('./routes/authRoutes');
const Transacao = require('./models/transaction');
const db = require('./models/index');
const app = express();

app.use(express.json());
app.use('/admin', uploadRoutes);
app.use('/auth', authRoutes);

sequelize.sync().then(() => {
  console.log('DB sincronizado');
  app.listen(3000, () => console.log('Server running on port 3000'));
});
