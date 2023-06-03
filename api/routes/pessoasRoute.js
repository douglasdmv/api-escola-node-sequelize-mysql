const { Router } = require('express')
const PessoaControler = require('../controllers/PessoaController')

const router = Router()

router.get('/pessoas', PessoaControler.pegaTodasAsPessoas)
router.get('/pessoas/:id', PessoaControler.pegaUmaPessoa)
router.post('/pessoas', PessoaControler.criaPessoa)
router.put('/pessoas/:id', PessoaControler.atualizaPessoa)
router.delete('/pessoas/:id', PessoaControler.deletaPessoa)

module.exports = router