import colecaoUf from "../dados/dados.js";

export const buscarUfs = () => {  //Retorna toda    coleção
    return colecaoUf;
}

export const buscarUfsPorNome = (nomeUf) => { //Busca UF pelo nome
    return colecaoUf.filter(uf => uf.nome.toLowerCase().includes(nomeUf.toLowerCase()));
}

export const buscarUfsPorId = (id) => { //Retorna o id especificado
    const idUF = parseInt(id);
    return colecaoUf.find(uf => uf.id === idUF);
}

export const buscarUfsPorSigla = (nomeUf) => {
    return colecaoUf.filter(uf => uf.nome.toLowerCase().includes())
}