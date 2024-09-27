var rl = require('readline-sync')

export class branch{
    public nome: string
    public dataCriacao: Date
    public commits: []
    public branchPai: []
    constructor(nome: string, dataCriacao: Date){
        this.nome
        this.dataCriacao = dataCriacao
    }
}