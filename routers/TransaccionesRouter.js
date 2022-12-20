const express = require('express');
const { model } = require('mongoose');
const Transacciones = require('../models/Transacciones');
const TransaccionesRouter = express.Router();


//Listar Transacciones
TransaccionesRouter.get("/", (req, res) => {
    Transacciones.find()
        .then(datos => res.json({ Transacciones: datos }))
        .catch(error => res.json({ mensaje: error }));
});

//Guardar Nueva Persona
TransaccionesRouter.post("/", (req, res) => {
    const persona = new Transacciones(req.body);
    persona.save()
        .then(datos => res.json(datos))
        .catch(error => res.json({ mensaje: error }));
});

//Actualizar Persona
TransaccionesRouter.patch("/", (req, res) => {
    const persona = new Transacciones(req.body);
    Transacciones.updateOne({ _id: persona._id }, persona)
        .then(datos => res.json(datos))
        .catch(error => res.json({ mensaje: error }));
});

//Eliminar Persona
TransaccionesRouter.delete("/:id", (req, res) => {
    Transacciones.deleteOne({ _id: req.params.id })
        .then(datos => res.json(datos))
        .catch(error => res.json({ mensaje: error }));
});



module.exports = TransaccionesRouter;