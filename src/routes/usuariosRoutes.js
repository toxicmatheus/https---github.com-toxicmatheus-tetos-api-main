const { buscar, criar, editar, deletar } = require("../controllers/usuariosController.js");

const rotas = require("express").Router();

rotas.get("/", buscar);
rotas.post("/", criar);
rotas.put("/:id", editar);
rotas.delete("/:id", deletar);

module.exports = rotas;