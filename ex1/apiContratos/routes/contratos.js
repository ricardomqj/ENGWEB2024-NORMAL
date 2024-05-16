const express = require('express');
const router = express.Router();
const contratoController = require('../controllers/contratos');

// GET /contratos: devolve uma lista com todos os registos
router.get('/', async (req, res) => {
  try {
    if (req.query.entidade) {
      res.json(await contratoController.findByEntidade(req.query.entidade));
    } else if (req.query.tipo) {
      res.json(await contratoController.findByTipo(req.query.tipo));  // Correção aqui
    } else {
      res.json(await contratoController.list());
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// GET //:id: devolve o registo com identificador id (corresponde ao idcontrato)
router.get('/:id', async (req, res) => {
  try {
    const contrato = await contratoController.findById(req.params.id);
    if (contrato) {
      res.json(contrato);
    } else {
      res.status(404).send('Contrato not found');
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// GET //entidades: devolve a lista de entidades comunicantes ordenada alfabeticamente e sem repetições
router.get('/entidades', async (req, res) => {
  try {
    res.json(await contratoController.listEntidades());
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// GET //tipos: devolve a lista dos tipos de procedimento ordenada alfabeticamente e sem repetições
router.get('/tipos', async (req, res) => {
  try {
    res.json(await contratoController.listTipos());
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

// DELETE //:id: elimina da BD o registo com o identificador id
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

// PUT //:id: altera o registo com o identificador id
router.put('/:id', async (req, res) => {
  try {
    const updatedContrato = await contratoController.update(req.params.id, req.body);
    if (updatedContrato) {
      if (updatedContrato.message) {
        res.status(200).send(updatedContrato.message);
      } else {
        res.json(updatedContrato);
      }
    } else {
      res.status(404).send('Contrato not found');
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
});

module.exports = router;
