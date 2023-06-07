const database = require('../models')

class PessoaControler {
    static async pegaPessoasAtivas(req, res){
        try {
            const pessoasAtivas = await database.Pessoas.findAll()
            return res.status(200).json(pessoasAtivas)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async pegaTodasAsPessoas(req, res){
        try {
            const todasAsPessoas = await database.Pessoas.scope('todos').findAll()
            return res.status(200).json(todasAsPessoas)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async pegaUmaPessoa(req, res) {
        const { id } = req.params
        try {
            const umaPessoa = await database.Pessoas.findOne( { where: { id: Number(id) }})
            return res.status(200).json(umaPessoa)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async criaPessoa(req, res) {
        try {
            const novaPessoa = await database.Pessoas.create(req.body)
            return res.status(201).json(novaPessoa)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async atualizaPessoa(req, res) {
        const { id } = req.params
        try {
            await database.Pessoas.update(req.body, { where: { id: Number(id) }})
            const atualizaPessoa = await database.Pessoas.findOne( { where: { id: Number(id) }})
            return res.status(200).json(atualizaPessoa)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async deletaPessoa(req, res) {
        const { id } = req.params
        try {
            await database.Pessoas.destroy({ where: { id: Number(id) }})
            return res.status(200).json({mensagem: `id ${id} deletado`})
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async restauraPessoa(req, res) {
        const { id } = req.params
        try {
            await database.Pessoas.restore({ where: { id: Number(id) }})
            return res.status(200).json({mensagem: `id ${id} restaurado`})
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    //http://localhost:3000/pessoas/1/matricula/5
    //http://localhost:3000/pessoas/:estudanteId/matricula/:matriculaId
    static async pegaUmaMatricula(req, res) {
        const { estudanteId, matriculaId } = req.params
        try {
          const umaMatricula = await database.Matriculas.findOne( { 
            where: { 
              id: Number(matriculaId),
              estudante_id: Number(estudanteId)
            }
          })
          return res.status(200).json(umaMatricula)
        } catch (error) {
          return res.status(500).json(error.message)
        }
    }

    //http://localhost:3000/pessoas/1/matricula
    //passar status e turma_id
    static async criaMatricula(req, res) {
        const { estudanteId } = req.params
        const novaMatricula = { ...req.body, estudante_id: Number(estudanteId) }
        try {
          const novaMatriculaCriada = await database.Matriculas.create(novaMatricula)
          return res.status(201).json(novaMatriculaCriada)
        } catch (error) {
          return res.status(500).json(error.message)
        }
    }

    //http://localhost:3000/pessoas/1/matricula/5
    //exemplo: mudar status para cancelado
    static async atualizaMatricula(req, res) {
        const { estudanteId, matriculaId } = req.params
        const novasInfos = req.body
        try {
          await database.Matriculas.update(novasInfos, { where: { id: Number(matriculaId), estudante_id: Number(estudanteId) }})
          const matriculaAtualizada = await database.Matriculas.findOne( { where: { id: Number(matriculaId) }})
          return res.status(200).json(matriculaAtualizada)
        } catch (error) {
          return res.status(500).json(error.message)
        }
    }

    //http://localhost:3000/pessoas/2/matricula/6
    static async deletaMatricula(req, res) {
        const { estudanteId, matriculaId } = req.params
        try {
          await database.Matriculas.destroy({ where: { id: Number(matriculaId) }})
          return res.status(200).json({ mensagem: `id ${matriculaId} deletado` })
        } catch (error) {
          return res.status(500).json(error.message)
        }
    }
}

module.exports = PessoaControler