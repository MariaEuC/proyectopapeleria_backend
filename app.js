const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

const PersonasRouter = require('./routers/PersonasRouter');
const UsuariosRouter = require('./routers/UsuariosRouter');
const ProductosRouter = require('./routers/ProductosRouter');
const TransaccionesRouter = require('./routers/TransaccionesRouter');


app.use(cors());
app.use(bodyParser.json());

// Personas
app.use("/personas", PersonasRouter);

// Usuarios
app.use("/usuarios", UsuariosRouter);

app.get("/", (req, res) => {
    res.json("Conectado");
})

// P
app.use("/productos", ProductosRouter);

// Transacciones
app.use("/transacciones", TransaccionesRouter);



// const PORT = process.env.PORT || 5000;
// app.listen(PORT);
app.listen(5000);