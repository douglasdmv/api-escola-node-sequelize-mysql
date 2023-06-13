const { Router } = require('express')
const PessoaControler = require('../controllers/PessoaController')

const router = Router()

router.get('/pessoas', PessoaControler.pegaPessoasAtivas)
router.get('/pessoas/todos', PessoaControler.pegaTodasAsPessoas)
router.get('/pessoas/:id', PessoaControler.pegaUmaPessoa)
router.post('/pessoas', PessoaControler.criaPessoa)
router.put('/pessoas/:id', PessoaControler.atualizaPessoa)
router.delete('/pessoas/:id', PessoaControler.deletaPessoa)
router.post('/pessoas/:id/restaura', PessoaControler.restauraPessoa)
router.get('/pessoas/:estudanteId/matricula/:matriculaId', PessoaControler.pegaUmaMatricula)
router.post('/pessoas/:estudanteId/matricula', PessoaControler.criaMatricula)
router.put('/pessoas/:estudanteId/matricula/:matriculaId', PessoaControler.atualizaMatricula)
router.delete('/pessoas/:estudanteId/matricula/:matriculaId', PessoaControler.deletaMatricula)
router.post('/pessoas/:estudanteId/matricula/:matriculaId/restaura', PessoaControler.restauraMatricula)
router.get('/pessoas/:estudanteId/matricula', PessoaControler.pegaMatriculas)

module.exports = router