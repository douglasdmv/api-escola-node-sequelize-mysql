// const database = require('../models')

const Services = require('../services/Services')
const niveisServices = new Services('Niveis')

class NivelController {

    static async pegaTodosOsNiveis(req, res) {
      try {
        const todosOsNiveis = await niveisServices.pegaTodosOsRegistros()
        return res.status(200).json(todosOsNiveis)
      } catch (error) {
        return res.status(500).json(error.message);
      }
    }

    static async pegaUmNivel(req, res) {
      const { id } = req.params
      try {
        const umNivel = await niveisServices.pegaUmRegistro({ id })
        return res.status(200).json(umNivel)
      } catch (error) {
        return res.status(500).json(error.message)
      }
    }

    static async criaNivel(req, res) {
      try {
        const novoNivel = await niveisServices.criaRegistro(req.body)
        return res.status(201).json(novoNivel)
      } catch (error) {
        return res.status(500).json(error.message)
      }
    }

    static async atualizaNivel(req, res) {
      const { id } = req.params
      try {
        await niveisServices.atualizaRegistro(req.body, id)
        return res.status(200).json({ mensagem: `id ${id} atualizado` })
      } catch (error) {
        return res.status(500).json(error.message)
      }
    }

    static async apagaNivel(req, res) {
      const { id } = req.params
      try {
        await niveisServices.apagaRegistro(id)
        return res.status(200).json({ mensagem: `id ${id} deletado`})
      } catch (error) {
        return res.status(500).json(error.message)
      }
    }

    static async restauraNivel(req, res) {
      const { id } = req.params
      try {
        await niveisServices.restauraRegistro(id)
        return res.status(200).json({ mensagem: `id ${id} restaurado`})
      } catch (error) {
        return res.status(500).json(error.message)
      }
    }

}

module.exports = NivelController