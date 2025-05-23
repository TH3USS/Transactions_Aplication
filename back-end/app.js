
const express = require('express');
const sequelize = require('./config/db');
const uploadRoutes = require('./routes/uploadRoutes');
const authRoutes = require('./routes/authRoutes');
const Transacao = require('./models/transaction');
const adminRoutes = require('./routes/adminRoute');
const userRoutes = require('./routes/userRoute');
const db = require('./models/index');
const app = express();

app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});
app.use(express.json());
app.use('/api/auth', authRoutes);
app.use('/api/upload', uploadRoutes);
app.use('/api/admin', adminRoutes);
app.use('/api/user', userRoutes);


sequelize.sync().then(() => {
  console.log('DB sincronized');
  app.listen(3000, () => console.log('Server running on port 3000'));
});
