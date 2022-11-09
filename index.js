console.log("Cargando configuracion...");
//Importar las dependencias
var bodyParser = require("body-parser");
const express = require("express");

//Cargar configuracion app WEB
const PORT = 3500;

console.log("Inicializar la Aplicacion WEB...");
//Inicializar una APLICACION WEB
const app = express();

console.log("Configurando Routers...");

//Middlewares
app.use(bodyParser.json());

// 1) Metodo HTTP
// 2) Ruta Virtual
// 3) Algoritmo que me genera la respuesta

//Cargue de ROUTERS
const userRouter = require("./routers/usuarios");

//Configurar Routers en la APP
app.use("/api/usuarios", userRouter);
app.get(
    "/",

    function (req, res) {
        res.send("Hola estudiantes del grupo 35, 43 y 46!!!");
    }
);

console.log("Iniciando Servidor");

//Lanzamiento server
app.listen(
    PORT,

    function () {
        console.log(`La aplicacion WEB esta escuchando en el PUERTO: ` + PORT);
    }
);
