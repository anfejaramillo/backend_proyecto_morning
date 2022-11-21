//Inicializacion del enrutador
const express = require("express");
const router = express.Router();
//cargue del modelo de usuarios
let userSchema = require("../db/schemas/userSchema");
//login handle
router.get("/get/:idUsuario", async function (req, res) {
    let idUsuario = req.params.idUsuario;
    let result = await userSchema.findUserById(idUsuario);
    res.send(result);
});

router.post("/create", async function (req, res) {
    let userToCreate = req.body;
    let result = await userSchema.createUser(userToCreate);
    res.send(result);
});

router.get("/all", async function (req, res) {
    let result = await userSchema.getAllUsers();
    res.send(result);
});

router.delete("/delete/:idUsuario", async function (req, res) {
    let idUsuario = req.params.idUsuario;
    let result = await userSchema.deleteUser(idUsuario);
    res.send(result);
});

module.exports = router;
