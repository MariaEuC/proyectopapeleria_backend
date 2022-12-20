const express = require('express');
const cors = require('cors');
const bodyParser = require('body-Parser');

const app = express();

const PersonasRouter = require('./routers/PersonasRouter');
const UsuariosRouter = require('./routers/UsuariosRouter');
const TransaccionesRouter = require('./routers/TransaccionesRouter');
const ProductosRouter = require('./routers/ProductosRouter');


app.use(cors());
app.use(bodyParser.json());

// Personas
app.use("/personas", PersonasRouter)

// Usuarios
app.use("/usuarios", UsuariosRouter)

// Transacciones
app.use("/transacciones", TransaccionesRouter)

// Productos
app.use("/productos", ProductosRouter)



app.listen(5000);
