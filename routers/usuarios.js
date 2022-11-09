const express = require("express");
const router = express.Router();
const dbUsuario = require("../basededatos");

//login handle
router.get("/:idUsuario", function (req, res) {
    let idUsuario = req.params.idUsuario;
    let usuarioBuscado = dbUsuario.getUsuario(idUsuario);
    res.send(usuarioBuscado);
});

router.post("/create", function (req, res) {
    let userToCreate = req.body;
    let newId = dbUsuario.createUser(userToCreate);
    res.send(newId);
});

router.delete("/delete/:idUsuario", function (req, res) {
    let idUsuario = req.params.idUsuario;
    dbUsuario.deleteUser(idUsuario);
    res.send("El usuario se elimino correctamente con id: " + idUsuario);
});

module.exports = router;
