function validarDados(req, res, next) {
    const colunas = [
        "logradouro",
        "bairro",
        "cidade",
        "estado",
        "numero",
        "cep",
        "valor_aluguel",
        "metragem",
        "quartos",
        "suites",
        "banheiros",
        "tipo_id"
    ];
    const dados = req.body;
    let campoAusentes = colunas.filter(chave => !Object.keys(dados).includes(chave));

    res.json(campoAusentes.map(campo => {
        return {
            type: "warning",
            description: `Coluna ${campo} não informada`
        }
    }))

    next();
}

module.exports = {
    validarDados
}