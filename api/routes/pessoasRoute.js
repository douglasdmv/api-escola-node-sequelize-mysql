const { Router } = require('express')
const PessoaControler = require('../controllers/PessoaController')
const MatriculaController = require('../controllers/MatriculaController')

const router = Router()

router.get('/pessoas', PessoaControler.pegaTodasAsPessoas)
router.get('/pessoas/ativas', PessoaControler.pegaPessoasAtivas)
router.get('/pessoas/:id', PessoaControler.pegaUmaPessoa)
router.post('/pessoas', PessoaControler.criaPessoa)
router.put('/pessoas/:id', PessoaControler.atualizaPessoa)
router.delete('/pessoas/:id', PessoaControler.deletaPessoa)
router.post('/pessoas/:id/restaura', PessoaControler.restauraPessoa)
router.get('/pessoas/:estudanteId/matricula/:matriculaId', MatriculaController.pegaUmaMatricula)
router.post('/pessoas/:estudanteId/matricula', MatriculaController.criaMatricula)
router.put('/pessoas/:estudanteId/matricula/:matriculaId', MatriculaController.atualizaMatricula)
router.delete('/pessoas/:estudanteId/matricula/:matriculaId', MatriculaController.deletaMatricula)
router.post('/pessoas/:estudanteId/matricula/:matriculaId/restaura', MatriculaController.restauraMatricula)
router.get('/pessoas/:estudanteId/matricula', PessoaControler.pegaMatriculas)
router.get('/pessoas/matricula/:turmaId/confirmadas', MatriculaController.pegaMatriculasPorTurma)
router.get('/pessoas/matricula/lotada', MatriculaController.pegaTurmasLotadas)
router.post('/pessoas/:estudanteId/cancela', PessoaControler.cancelaPessoa)

module.exports = router