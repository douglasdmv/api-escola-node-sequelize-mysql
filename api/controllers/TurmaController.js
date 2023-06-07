const database = require('../models');

class TurmaController {

    static async pegaTodasAsTurmas(req, res) {
        try {
          const todasAsTurmas = await database.Turmas.findAll()
          return res.status(200).json(todasAsTurmas)
        } catch (error) {
          return res.status(500).json(error.message);
        }
    }

    static async pegaUmaTurma(req, res) {
        const { id } = req.params
        try {
          const umaTurma = await database.Turmas.findOne( { where: { id: Number(id) }})
          return res.status(200).json(umaTurma)
        } catch (error) {
          return res.status(500).json(error.message)
        }
    }

    static async criaTurma(req, res) {
        try {
          const novaTurma = await database.Turmas.create(req.body)
          return res.status(201).json(novaTurma)
        } catch (error) {
          return res.status(500).json(error.message)
        }
    }

    static async atualizaTurma(req, res) {
        const { id } = req.params
        try {
          await database.Turmas.update(req.body, { where: { id: Number(id) }})
          const atualizaTurma = await database.Turmas.findOne( { where: { id: Number(id) }})
          return res.status(200).json(atualizaTurma)
        } catch (error) {
          return res.status(500).json(error.message)
        }
    }

    static async apagaTurma(req, res) {
        const { id } = req.params
        try {
          await database.Turmas.destroy({ where: { id: Number(id) }})
          return res.status(200).json({ mensagem: `id ${id} deletado`})
        } catch (error) {
          return res.status(500).json(error.message)
        }
    }

    static async restauraTurma(req, res) {
        const { id } = req.params
        try {
          await database.Turmas.restore({ where: { id: Number(id) }})
          return res.status(200).json({ mensagem: `id ${id} restaurado`})
        } catch (error) {
          return res.status(500).json(error.message)
        }
    }
}

module.exports = TurmaController;