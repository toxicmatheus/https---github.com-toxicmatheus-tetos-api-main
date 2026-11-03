function validarDados(req, res, next) {
    const { nome } = req.body;
    
    if(!nome){
        res.json({
            type: "warning",
            description: "Coluna nome é obrigatória"
        });
    }
    next();
}   

module.exports = {
    validarDados
}