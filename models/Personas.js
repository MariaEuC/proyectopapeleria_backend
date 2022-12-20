const mongoose = require('../db/ConnectionDB');

const Personas = mongoose.Schema({
    nombres: {
        type: String
    },
    apellidos: {
        type: String
    },
    tipoDoc: {
        type: String
    },
    numDoc: {
        type: String
    },
    direccion: {
        type: String
    },
    telefono: {
        type: String
    },
    correo: {
        type: String,
        required: true,
        unique: true
    }

}, {
    collection: "Personas",
    versionKey: false
});

module.exports = mongoose.model("Personas", Personas);