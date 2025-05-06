const express = require('express');
const router = express.Router();
const Pessoa = require('../models/pessoas');

// Criar
router.post('/', async (req, res) => {
  try {
    const pessoa = await Pessoa.create(req.body);
    res.status(201).json(pessoa);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Listar
router.get('/', async (req, res) => {
  const pessoas = await Pessoa.findAll();
  res.json(pessoas);
});

// Atualizar
router.put('/:id', async (req, res) => {
  const pessoa = await Pessoa.findByPk(req.params.id);
  if (!pessoa) return res.status(404).json({ error: 'Pessoa não encontrada' });
  await pessoa.update(req.body);
  res.json(pessoa);
});

// Deletar
router.delete('/:id', async (req, res) => {
  const pessoa = await Pessoa.findByPk(req.params.id);
  if (!pessoa) return res.status(404).json({ error: 'Pessoa não encontrada' });
  await pessoa.destroy();
  res.sendStatus(204);
});

module.exports = router;