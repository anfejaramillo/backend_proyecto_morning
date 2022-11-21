//Cargar dependencias
let mongoose = require("mongoose");
//cargar configuracion
let appConfig = require("../config");
//Conectarnos
let promiseConnection = mongoose.connect(appConfig.dbFullPath);
promiseConnection
    .then(function (value) {
        console.log(value);
        console.log("Connection to DB successfully");
    })
    .catch(function (err) {
        console.log(err);
    });
