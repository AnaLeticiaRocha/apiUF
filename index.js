import colecaoUf from "./dados/dados.js";
import { buscarUfs, buscarUfsPorId, buscarUfsPorNome, buscarUfsPorSigla } from "./servicos/servicos.js";
import express from 'express';

const app = express();

app.get('/ufs', (req, res) => {
    const nomeUf = req.query.busca;
    const resultado = nomeUf ? buscarUfsPorNome(nomeUf) : colecaoUf;

    if (resultado.length > 0) {
        res.json(resultado);
    } else {
        res.status(404).send({ "erro": "Nenhuma UF encontrada" });
    }
});

app.get('/ufs/:iduf' , (req, res) => {
    const idUf = res.params.iduf;
    const uf = buscarUfsPorId(req.params.iduf);

    if (uf) {
        res.json(uf);
    }else if (isNaN(parseInt(idUf))) {
        res.status(400).send({ "erro": "Requisição Inválida"});
    }else{
        res.status(404).send({ "erro": "ID não encontrada"});
    }
})

app.get('/ufs/:iduf' , (req, res) => {
    const nomeUf = req.query.buscar;
    const resultado = nomeUf ? buscarUfsPorSigla(nomeUf) : colecaoUf;
    
                                                                                          
})



app.get('/ufs/:idUF', (req, res) => {
    const idUF = parseInt(req.params.idUF);
    const uf = colecaoUf.find(u => u.id === idUF);
    res.json(uf);
})

app.listen(8080, () => {
    let data = new Date();
    console.log('Servidor iniciado na porta 8080 em' + data);

})