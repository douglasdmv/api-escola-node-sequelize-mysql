// const database = require('../models')
// const Sequelize = require('sequelize')

const { PessoasServices } = require('../services')
const pessoasServices = new PessoasServices()

class PessoaControler {
    static async pegaPessoasAtivas(req, res){
        try {
            const pessoasAtivas = await pessoasServices.pegaRegistrosAtivos()
            return res.status(200).json(pessoasAtivas)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async pegaTodasAsPessoas(req, res){
        try {
            const todasAsPessoas = await pessoasServices.pegaTodosOsRegistros()
            return res.status(200).json(todasAsPessoas)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async pegaUmaPessoa(req, res) {
        const { id } = req.params
        try {
            const umaPessoa = await pessoasServices.pegaUmRegistro({ id })
            return res.status(200).json(umaPessoa)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async criaPessoa(req, res) {
        try {
            const novaPessoa = await pessoasServices.criaRegistro(req.body)
            return res.status(201).json(novaPessoa)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async atualizaPessoa(req, res) {
        const { id } = req.params
        try {
            await pessoasServices.atualizaRegistro(req.body, Number(id))
            return res.status(200).json({ mensagem: `id ${id} atualizado` })
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async deletaPessoa(req, res) {
        const { id } = req.params
        try {
            await pessoasServices.apagaRegistro(Number(id))
            return res.status(200).json({mensagem: `id ${id} deletado`})
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async restauraPessoa(req, res) {
        const { id } = req.params
        try {
            await pessoasServices.restauraRegistro(Number(id))
            return res.status(200).json({mensagem: `Registro ${id} restaurado`})
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async pegaMatriculas(req, res) {  
      const { estudanteId } = req.params
      try {
        const matriculas = await pessoasServices
          .pegaMatriculasPorEstudante({ id: Number(estudanteId) })
        return res.status(200).json(matriculas)
      } catch (error) {
        return res.status(500).json(error.message)
      }
    }
  
    static async cancelaPessoa(req, res) {  
      const { estudanteId } = req.params
      try {
        await pessoasServices.cancelaPessoaEMatriculas(Number(estudanteId))
        return res
          .status(200)
          .json({message: `matrículas ref. estudante ${estudanteId} canceladas`}) 
      } catch (error) {
        return res.status(500).json(error.message)
      }
    }
}

module.exports = PessoaControler