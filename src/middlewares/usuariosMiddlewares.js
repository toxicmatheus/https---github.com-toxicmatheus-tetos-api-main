const jwt = require("jsonwebtoken");

function usuarioAutenticado(req, res, next) {
    let authorization = req.headers.authorization;
    if (!authorization) {
        res.status(401).json({
            type: "error",
            description: "Token não informado."
        });
        return;
    }
    let token = authorization.split(" ")[1];
    next();
}

module.exports = {
    usuarioAutenticado
}