const express = require('express');
const router = express.Router();
const contratoController = require('../controllers/contratos');

// GET /: devolve uma lista com todos os registos
router.get('/', async (req, res) => {
    try {
      let contratos;
      if (req.query.entidade) {
        contratos = await contratoController.findByEntidade(req.query.entidade);
      } else if (req.query.tipo) {
        contratos = await contratoController.findByTipo(req.query.tipo);
      } else if (req.query.nipc) { // Adiciona a busca por NIPC
        contratos = await contratoController.findByNIPC(req.query.nipc);
      } else {
        contratos = await contratoController.list();
      }
      res.render('index', { contratos });
    } catch (error) {
      res.status(500).send(error.message);
    }
});

// GET /:id: devolve o registo com identificador id (corresponde ao idcontrato)
router.get('/:id', async (req, res) => {
    try {
      const contrato = await contratoController.findById(req.params.id);
      if (contrato) {
        res.render('contrato', { contrato });
      } else {
        res.status(404).send('Contrato not found');
      }
    } catch (error) {
      res.status(500).send(error.message);
    }
});

// GET /entidades: devolve a lista de entidades comunicantes ordenada alfabeticamente e sem repetições
router.get('/entidades', async (req, res) => {
  try {
    const entidades = await contratoController.listEntidades();
    res.json(entidades);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// GET /tipos: devolve a lista dos tipos de procedimento ordenada alfabeticamente e sem repetições
router.get('/tipos', async (req, res) => {
  try {
    const tipos = await contratoController.listTipos();
    res.json(tipos);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// POST /: acrescenta um registo novo à BD
router.post('/', async (req, res) => {
  try {
    const newContrato = await contratoController.insert(req.body);
    res.status(201).json(newContrato);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// DELETE /:id: elimina da BD o registo com o identificador id
router.delete('/:id', async (req, res) => {
  try {
    const result = await contratoController.removeById(req.params.id);
    if (result.deletedCount) {
      res.status(204).send();
    } else {
      res.status(404).send('Contrato not found');
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// PUT /:id: altera o registo com o identificador id
router.put('/:id', async (req, res) => {
  try {
    const updatedContrato = await contratoController.update(req.params.id, req.body);
    if (updatedContrato.nModified) {
      const contrato = await contratoController.findById(req.params.id);
      res.json(contrato);
    } else {
      res.status(404).send('Contrato not found or no changes made');
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
});

module.exports = router;
