var rl = require('readline-sync')

export class Branch {
    public nome: String
    public dataCriacao: String
    public commits: Array<string> = []
    public branchPai: Array<string> = []
    public historico: Array<string> = []
    constructor(nome: String, dataCriacao: String) {
        this.nome = nome
        this.dataCriacao = dataCriacao
    }
    criarCommit(mensagem: string): void {
        this.commits.push(mensagem)
        this.historico.push(mensagem)
    }

    merge(outraBranch: string): void {
        let arrayMerge = this.branchPai.concat(outraBranch)
        this.branchPai = arrayMerge
    }

    checkout(): void { }


    mostrarHistorico(): void {
        console.log(this.historico)
    }
}



export class BranchMaster extends Branch {
    constructor(nome: String, dataCriacao: string) {
        super(nome, dataCriacao)
    }

    selecionarBranch(): void {
        let nomeBranch = rl.question('Digite o nome da branch que deseja selecionar: ')
        let branchSelecionada = this.branchPai.find(branch => branch === nomeBranch)
        if (branchSelecionada) {
            console.log(Você selecionou a branch ${nomeBranch})
        } else {
            console.log('Branch não encontrada')
        }
    }

    criarBranch(): Branch | boolean {
        let nome = rl.readline('Nome do Branch: ')
        let data = rl.readline('Data Branch: ')
        console.log(`
            1 - Branch Develop
            2 - Branch hotfix
            3 - Branch feature
            4 - Branch release
            5 - tchau brigado

        `);

        let opt = rl.readline('Opção: ')
        switch (opt) {
            case 1: 'Develop'
                console.log('Branch criado com sucesso')
                return new BranchDevelop(nome, data)
                break;
            case 2: 'Hotfix'
                console.log('Branch criado com sucesso')
                return new BranchHotfix(nome, data)
                break;
            case 3: 'Feature'
                console.log('Branch criado com sucesso')
                return new BranchFeature(nome, data)
                break;
            case 4: 'Release'
                console.log('Branch criado com sucesso')
                return new BranchRelease(nome, data)
                break;
            default:
                console.log(Opção inválida);
                return false
        }
    }
}



export class BranchDevelop extends Branch {
    finalizarSprint(BranchRelease):  void{
        this.merge(BranchRelease)

    }
    }




export class BranchHotfix extends Branch {
    corrigirBug(descricao: string): void {
        this.commits.push(descricao)
    }
}



export class BranchFeature extends Branch {
    implementarFuncionalidade(descricao): void {
        this.commits.push(implementação de funcionalidade: ${descricao})
    }
}



export class BranchRelease extends Branch {
    constructor(nome: String, dataCriacao: string) {
        super(nome, dataCriacao)
    }
    promoverParaProducao(): void {
        console.log(${this.commits} Esta branch esta pronta pra ser lancada)
    }
}