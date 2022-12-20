const express = require('express');
const { model } = require('mongoose');
const Productos = require('../models/Productos');
const ProductosRouter = express.Router();


//Listar Productos
ProductosRouter.get("/", (req, res) => {
    Productos.find()
        .then(datos => res.json({ Productos: datos }))
        .catch(error => res.json({ mensaje: error }));
});

//Guardar Nueva Producto
ProductosRouter.post("/", (req, res) => {
    const producto = new Productos(req.body);
    producto.save()
        .then(datos => res.json(datos))
        .catch(error => res.json({ mensaje: error }));
});

//Actualizar Producto
ProductosRouter.patch("/", (req, res) => {
    const Producto = new Productos(req.body);
    Productos.updateOne({ _id: Producto._id }, Producto)
        .then(datos => res.json(datos))
        .catch(error => res.json({ mensaje: error }));
});

//Eliminar Producto
ProductosRouter.delete("/:id", (req, res) => {
    Productos.deleteOne({ _id: req.params.id })
        .then(datos => res.json(datos))
        .catch(error => res.json({ mensaje: error }));
});



module.exports = ProductosRouter;