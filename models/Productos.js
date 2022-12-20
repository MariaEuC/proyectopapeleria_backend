const mongoose = require('../db/ConnectionDB');

const Productos = mongoose.Schema({
    nombreprod: {
        type: String
    },
    codigo: {
        type: String,
        required: true,
        unique: true
    },
    cantidad: {
        type: String
    },
    precioCompra: {
        type: String
    },
    precioVenta: {
        type: String
    },
    stockMinimo: {
        type: String
    },
    descripcion: {
        type: String
    },
    unidadMedida: {
        type: String
    }


}, {
    collection: "Productos",
    versionKey: false
});

module.exports = mongoose.model("Productos", Productos);