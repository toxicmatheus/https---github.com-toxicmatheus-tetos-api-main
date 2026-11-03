require("dotenv").config();

const express = require("express");
const cors = require("cors");
const niveisRoutes = require("./src/routes/niveisRoutes");
const imoveisTipoRoutes = require("./src/imoveis/imoveisTipoRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Olá mundo");
});

app.use("/niveis", niveisRoutes);
app.use("/imoveis_tipo", imoveisTipoRoutes);

app.listen(3000, () => {
    console.log("Servidor on: http://localhost:3000");
});