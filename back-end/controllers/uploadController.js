const XLSX = require('xlsx');
const db = require('../models');
const User = db.user;
const Transaction = db.Transaction;


const uploadPlanilha = async (req, res) => {
  try {
    if (!req.file) return res.status(400).json({ error: 'File not sent' });

    const workbook = XLSX.readFile(req.file.path);
    const sheetName = workbook.SheetNames[0];
    const rows = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName]);

    for (const row of rows) {
      const user = await User.findOne({ where: { cpf: String(row['cpf']) } });
      
    const transactions = rows.map(row => ({
      cpf: String(row['cpf']),
      description: row['description'],
      date: new Date(row['date']),
      points: parseFloat(String(row['points']).replace(/[.,]/g, '')),
      value: parseFloat(String(row['value']).replace('.', '').replace(',', '.')),
      status: row['status'],
      userId: user ? user.id : null
    }));

    if (!rows.length) {
      return res.status(400).json({ error: 'The spreadsheet is empty or poorly formatted' });
    }

    await Transaction.bulkCreate(transactions);
    res.status(201).json({ message: 'Transactions saved successfully' });
  }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error processing spreadsheet' });
  }
  
};


module.exports = { uploadPlanilha };
