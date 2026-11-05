const PRISMA = require("../services");

async function buscar(req, res){
    try {
        const linhas = await PRISMA.imoveis.findMany();
        res.json(linhas);
    } catch (error) {
        res.json({
            type: "error",
            description: error.message 
        });
    }
}

async function criar(req, res){
    try {
        const dados = req.body;

        await PRISMA.imoveis.create({
            data: dados
        });
        
        res.json({
            type: "success",
            description: "Registro criado com sucesso."
        })
        
    } catch (error) {
        res.json({
            type: "error",
            description: error.message 
        });
    }
}

async function editar(req, res){
    try {
        const dados = req.body;
        const { id } = req.params;
        
        await PRISMA.imoveis.update({
            where: {
                id
            },
            data: dados
        });
        
        res.json({
            type: "success",
            description: "Registro atualizado com sucesso."
        })
        
    } catch (error) {
        res.json({
            type: "error",
            description: error.message 
        });
    }
}

async function deletar(req, res){
    try {
        const { id } = req.params;
        
        await PRISMA.imoveis.delete({
            where: {
                id
            }
        });
        
        res.json({
            type: "success",
            description: "Registro deletado com sucesso."
        })
        
    } catch (error) {
        res.json({
            type: "error",
            description: error.message 
        });
    }
}

module.exports = {
    buscar,
    criar,
    editar,
    deletar
}