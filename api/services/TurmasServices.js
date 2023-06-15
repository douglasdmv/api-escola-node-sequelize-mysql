const Services = require('./Services')

class TurmasServices extends Services {
    constructor() {
        super('Turmas')
    }

    // async pegaTurmasMatriculas(where = {}) {
    //     return super.pegaUmRegistro(where)
    // }
}

module.exports = TurmasServices