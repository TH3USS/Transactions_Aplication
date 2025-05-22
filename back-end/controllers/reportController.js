const db = require('../models');
const { Op } = require('sequelize');
const Transaction = db.transaction;

const getAdminReport = async (req, res) => {
  try {
    const { cpf, description, status, startDate, endDate, minValue, maxValue } = req.query;

    const where = {};

    if (cpf) where.cpf = cpf;
    if (description) where.description = { [Op.like]: `%${description}%` };
    if (status) where.status = status;
    if (startDate && endDate) where.date = { [Op.between]: [new Date(startDate), new Date(endDate)] };
    if (minValue && maxValue) where.value = { [Op.between]: [parseFloat(minValue), parseFloat(maxValue)] };

    const transactions = await Transaction.findAll({ where });
    res.json(transactions);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar relatório' });
  }
};

const getUserExtract = async (req, res) => {
  try {
    const userId = req.user.id;
    const { status, startDate, endDate } = req.query;

    const where = { userId };

    if (status) where.status = status;
    if (startDate && endDate) where.date = { [Op.between]: [new Date(startDate), new Date(endDate)] };

    const transactions = await Transaction.findAll({ where });
    res.json(transactions);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar extrato' });
  }
};

const getUserWallet = async (req, res) => {
  try {
    const userId = req.user.id;

    const totalPoints = await Transaction.sum('points', {
      where: {
        userId,
        status: 'Aprovado'
      }
    });

    res.json({ saldo: totalPoints || 0 });
  } catch (error) {
    res.status(500).json({ error: 'Erro ao calcular carteira' });
  }
};

module.exports = { getAdminReport, getUserExtract, getUserWallet };
