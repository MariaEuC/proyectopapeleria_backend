const mongoose = require('../db/ConnectionDB');

const Usuarios = mongoose.Schema({
    usuario: {
        type: String,
        required: true,
        unique: true
    },
    clave: {
        type: String,
    },
    rol: {
        type: String,
        required: true
    },
    estado: {
        type: String,
        required: true
    },
    persona: {
        _id: {
            type: String
        },
        correo: {
            type: String,
            required: true,
            unique: true
        }
    }

}, {
    collection: "Usuarios",
    versionKey: false
});

module.exports = mongoose.model("Usuarios", Usuarios);