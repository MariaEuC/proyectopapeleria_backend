const mongoose = require('mongoose');

const conexion = "mongodb+srv://Root:admin@cluster0.pwnx2xn.mongodb.net/G23papeleria";

mongoose.connect(conexion)
    .then(evento => console.log("Conectado a Mongo"))
    .catch(error => console.log(error))

module.exports = mongoose;
