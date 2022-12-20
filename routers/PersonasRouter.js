const express = require('express');
const { model } = require('mongoose');
const Personas = require('../models/Personas');
const PersonasRouter = express.Router();


//Listar Personas
PersonasRouter.get("/", (req, res) => {
    Personas.find()
        .then(datos => res.json({ personas: datos }))
        .catch(error => res.json({ mensaje: error }));
});

//Guardar Nueva Persona
PersonasRouter.post("/", (req, res) => {
    const persona = new Personas(req.body);
    persona.save()
        .then(datos => res.json(datos))
        .catch(error => res.json({ mensaje: error }));
});

//Actualizar Persona
PersonasRouter.patch("/", (req, res) => {
    const persona = new Personas(req.body);
    Personas.updateOne({ _id: persona._id }, persona)
        .then(datos => res.json(datos))
        .catch(error => res.json({ mensaje: error }));
});

//Eliminar Persona
PersonasRouter.delete("/:id", (req, res) => {
    Personas.deleteOne({ _id: req.params.id })
        .then(datos => res.json(datos))
        .catch(error => res.json({ mensaje: error }));
});



module.exports = PersonasRouter;