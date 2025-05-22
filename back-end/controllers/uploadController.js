const XLSX = require('xlsx');
const db = require('../models');
const Transaction = db.Transaction;


const uploadPlanilha = async (req, res) => {
  try {
    if (!req.file) return res.status(400).json({ error: 'Arquivo não enviado' });

    const workbook = XLSX.readFile(req.file.path);
    const sheetName = workbook.SheetNames[0];
    const rows = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName]);

    const transactions = rows.map(row => ({
      cpf: String(row['cpf']),
      description: row['description'],
      date: new Date(row['date']),
      points: parseFloat(String(row['points']).replace(/[.,]/g, '')),
      value: parseFloat(String(row['value']).replace('.', '').replace(',', '.')),
      status: row['status'],
    }));

    if (!rows.length) {
      return res.status(400).json({ error: 'A planilha está vazia ou mal formatada' });
    }

    await Transaction.bulkCreate(transactions);
    res.status(201).json({ message: 'Transações salvas com sucesso' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Erro ao processar planilha' });
  }
};

module.exports = { uploadPlanilha };
