const express = require("express");
const cors = require("cors");
const path = require("path");
const niveisRoutes = require("./src/routes/niveisRoutes");
const imoveisTipoRoutes = require("./src/routes/imoveisTipoRoutes");
const usuariosRoutes = require("./src/routes/usuariosRoutes");
const locatariosRoutes = require("./src/routes/locatariosRoutes");
const imoveisRoutes = require("./src/routes/imoveisRoutes");
const historicoManutencaoRoutes = require("./src/routes/historicoManutencaoRoutes");
const historicoImoveisRoutes = require("./src/routes/historicoImovelRoutes");
const { login } = require("./src/controllers/usuariosController");
const { usuarioAutenticado } = require("./src/middlewares/usuariosMiddlewares");

const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./src/docs/swagger-output.json');

const app = express();

app.use(cors()); //permite que requisições externas acessem as rotas
app.use(express.json()); //transforma o JSON do corpo da requisição em JS

app.get("/", (req, res) => {
    res.redirect("/docs");
});


app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

app.post("/login",
    /* #swagger.tags = ['Usuarios'] */
    /* #swagger.summary = 'Autentica um usuario' */
    /* #swagger.responses[200] = { description: 'Usuário autenticado ou Email ou senha incorretos.', schema: { mensagem: 'Usuário autenticado', token: 'jwt-token' } } */
    /* #swagger.responses[500] = { description: 'Erro interno do servidor.', schema: { mensagem: 'Error: mensagem do erro' } } */
    login);

app.use("/niveis", usuarioAutenticado, niveisRoutes);
app.use("/imoveis-tipo", usuarioAutenticado, imoveisTipoRoutes);
app.use("/locatarios", usuarioAutenticado, locatariosRoutes);
app.use("/imoveis", usuarioAutenticado, imoveisRoutes);
app.use("/historico-manutencoes", usuarioAutenticado, historicoManutencaoRoutes);
app.use("/historico-imoveis", usuarioAutenticado, historicoImoveisRoutes);
app.use("/usuarios", usuarioAutenticado, usuariosRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log("Servidor on: http://localhost:" + PORT);
});