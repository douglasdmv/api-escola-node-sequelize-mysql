const database = require('../models')

class PessoaControler {
    static async pegaTodasAsPessoas(req, res){
        try {
            const todasAsPessoas = await database.Pessoas.findAll()
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
}

module.exports = PessoaControler