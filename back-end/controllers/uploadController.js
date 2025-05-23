const XLSX = require('xlsx');
const db = require('../models');
const User = db.user;
const Transaction = db.Transaction;

const parseBRDate = (value) => {
  if (!value) return null;

  if (typeof value === 'number') {
    const excelEpoch = new Date(Date.UTC(1899, 11, 30)); 
    const parsedDate = new Date(excelEpoch.getTime() + value * 86400000);
    return parsedDate;
  }

  if (typeof value === 'string') {
    const parts = value.split('/');
    if (parts.length === 3) {
      const [day, month, year] = parts.map(Number);
      return new Date(year, month - 1, day);
    }
    return new Date(value);
  }

  if (value instanceof Date) return value;

  return null;
};



const uploadPlanilha = async (req, res) => {
  try {
    if (!req.file) return res.status(400).json({ error: 'File not sent' });

    const workbook = XLSX.readFile(req.file.path);
    const sheetName = workbook.SheetNames[0];
    const rows = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName]);

    if (!rows.length) {
      return res.status(400).json({ error: 'The spreadsheet is empty or poorly formatted' });
    }

    const transactions = await Promise.all(rows.map(async row => {
      const user = await User.findOne({ where: { cpf: String(row['cpf']) } });

      return {
        cpf: String(row['cpf']),
        description: row['description'],
        date: parseBRDate(row['date']),
        points: parseFloat(String(row['points']).replace(/[.,]/g, '')),
        value: parseFloat(String(row['value']).replace('.', '').replace(',', '.')),
        status: row['status'],
        userId: user ? user.id : null
      };
    }));

    await Transaction.bulkCreate(transactions);
    return res.status(201).json({ message: 'Transactions saved successfully' });

  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: 'Error processing spreadsheet' });
  }
};

module.exports = { uploadPlanilha };
