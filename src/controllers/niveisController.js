const PRISMA = require("../services");

async function buscar(req, res){
    try {
        const linhas = await PRISMA.niveis.findMany();
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
        const { nome } = req.body;
        const sql = await PRISMA.niveis.create({
            data: { 
                nome
            }
        });

        if(sql){
            res.json({
                type: "success",
                description: "Registro criado com sucesso"
            })
        }else{
            res.json({
                type: "warning",
                description: "Falha ao criar registro"
            })
        }
    } catch (error) {
        res.json({
            type: "error",
            description: error.message 
        });
    }
}

async function editar(req, res){
    try {
        const {id} = req.params
        const nome = req.body;
         
        await PRISMA.niveis.update({
            where: {
                id
            },
            data: {
                nome
            }
        });

        if(resposta){
            res.json({
                type: "success",
                description: "Registro atualizado com sucesso"
            })
        }else{
            res.json({
                type: "warning",
                description: "Falha ao atualizar registro"
            })
        }
    } catch (error) {
        res.json({
            type: "error",
            description: error.message 
        });
    }
}

async function deletar(req, res){
    try {
        const {id} = req.params

        await PRISMA.niveis.delete({
            where: {
                id
            }
        });

        res.json({
            type: "success",
            description: "Registro deletado com sucesso"
        });
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