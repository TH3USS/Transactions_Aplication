const express = require('express');
const sequelize = require('./config/db');
const uploadRoutes = require('./routes/upload');
const Transacao = require('./models/transaction');
const db = require('./models/index');
const app = express();

app.use(express.json());
app.use('/admin', uploadRoutes);

sequelize.sync().then(() => {
  console.log('DB sincronizado');
  app.listen(3000, () => console.log('Server running on port 3000'));
});
