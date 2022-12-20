const mongoose = require('../db/ConnectionDB');

const Transacciones = mongoose.Schema({
    usuario: {
        type: String
    },
    productos: {
        type: String
    },
    fecha: {
        type: String
    },
    valorTotal: {
        type: String
    },
    tipoTrans: {
        type: String
    },
    codigoCompra: {
        type: String
    },
    comprador: {                // de personas
        type: String
    },
    vendedor: {                 // de personas
        type: String
    },

}, {
    collection: "Transacciones",
    versionKey: false
});

module.exports = mongoose.model("Transacciones", Transacciones);