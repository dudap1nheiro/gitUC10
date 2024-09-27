import { Branch, BranchMaster } from "./Branch";
import { BranchDevelop } from "./Branch";
import { BranchFeature } from "./Branch";
import { BranchHotfix } from "./Branch";
import { BranchRelease } from "./Branch";

var rl = require('readline-sync')
let menu: boolean = true
let bancoBranch: Array<any> = []

function menuPrincipal(): void {
    while (menu) {
        //menu principal: criar ou selecionar branch
        //menu secundário: ações com a branch escolhida
        `
  1 - criar nova Branch 
  2 - selecionar Branch existente
  3 - sair
    `
    };
    let branchTeste = new BranchMaster("teste", '')
    let option = rl.questionInt("Escolha: ")

    switch (option) {
        case 1:
            branchTeste.criarBranch()
            break;
        case 2:
            for (let i = 0; i < bancoBranch.length; i++) {
                console.log(${i} - ${bancoBranch[i].nome})
            }
            let escolha = rl.questionInt('Escolha uma Branch: ')
            let tipo = rl.questionInt(Qual o tipo da Branch? \n 1) Branch master \n  2) Branch Develop \n 3) Branch Feature \n 4) Branch Hotflix \n 5) Branch Release \n 6) Branch)
            break;

            switch(tipo) {
                case 1:
                    menuBranchMaster(bancoBranch[escolha])
                    break;
                case 2:
                    menuBDevelop(bancoBranch[escolha])
                    break;
                case 3:
                    menuBFeature(bancoBranch[escolha])
                    break;
                case 4:
                    menuBHotfix(bancoBranch[escolha])
                    break;
                case 5:
                    menuBRelease(bancoBranch[escolha])
                    break;
                case 6:
                    menuBranch(bancoBranch[escolha])
                    default:
                        console.log('opção invalida')

            
            break
            case 3:
                process.exit(0)
                default:
                    console.log('opção invalida');
                    break
            }
    }
}


function menuBranch(branch: Branch) {
    while (menuBranch) {
        let menuBranch = rl.questionInt
            (`
       
       1 - criar um commit 
       2 - criar um merge
       3 - checkout
       4 - historico
       5 - voltar ao menu principal

       `)

        switch (menuBranch) {
            case 1:
                branch.criarCommit('')
                break;
            case 2:
                branch.merge('')
                break;
            case 3:
                branch.checkout()
                break;
            case 4:
                branch.mostrarHistorico()
                break;
            case 5:
                menuPrincipal()
                break;
                default:
                    console.log('opção invalida')
        }
    }
}

function menuBranchMaster(branch: BranchMaster) {
    while (true) {
        let optMaster = rl.questionInt(
            `Escolha uma opcao
        1 - Criar commit
        2 - Fazer merge
        3 - checkout
        4 - mostrar historico
        5 - Criar branch
        6 - voltar ao menu principal
        `)

        switch (optMaster) {
            case 1:
                branch.criarCommit('')
                break;
            case 2:
                branch.merge('')
                break;
            case 3:
                branch.checkout()
                break;
            case 4:
                branch.mostrarHistorico()
                break;
            case 5:
                branch.criarBranch()
                break;
            case 6:
                menu = false
                menuPrincipal()
                break;
                default:
                    console.log('opção invalida')
                    }

        }
    }



function menuBDevelop(branch: BranchDevelop) {
    while (true) {
        let optDev = rl.questionInt(`
            Escolha uma opção: 
            1 - Merge
            2 - Finalizar Sprint
            3 - Mostrar Histórico
            4 - Checkout
            5 - Voltar ao menu principal
            `)

        switch (optDev) {
            case 1:
                branch.merge('')
                break;
            case 2:
                branch.finalizarSprint('')
                break;
            case 3:
                branch.mostrarHistorico()
                break;
            case 4:
                branch.checkout()
                break;
            case 5:
                menu = false
                menuPrincipal()
            default:
                console.log('Opção invalida')
                break;


        }
    }
}

function menuBHotfix(branch: BranchHotfix) {
    while (true) {
        let optHot = rl.questionInt(`
        Escolha uma opção:
        1 - Merge
        2 - corrigir bugs 
        3 - Mostrar Histórico
        4 - Checkout
        5 - Voltar ao menu principal
        `
        )

        switch (optHot) {
            case 1:
                branch.merge('')
                break;
            case 2:
                branch.corrigirBug('')
                break;
            case 3:
                branch.mostrarHistorico()
                break;
            case 4:
                branch.checkout()
                break;
                case 5:
                    menu = false
                    menuPrincipal()
                    break;
            default:
                console.log('Opção invalida')
                break;

        }
    }
}

function menuBFeature(branch: BranchFeature) {
    while (true) {
        let optFea = rl.questionInt(`
        Escolha uma opção:
        1 - Merge
        2 - implementar funcionalidade 
        3 - Mostrar Histórico
        4 - Checkout
        5 - voltar para o menu principal
        `
        )

        switch (optFea) {
            case 1:
                branch.merge('')
                break;
            case 2:
                branch.implementarFuncionalidade('')
                break;
            case 3:
                branch.mostrarHistorico()
                break;
            case 4:
                branch.checkout()
                break;
                case 5:
                    menu = false
                    menuPrincipal()
                    break;
            default:
                console.log('Opção invalida')
                break;
        }
    }
}

function menuBRelease(branch: BranchRelease) {
    while (true) {
        let optRea = rl.questionInt(`
        Escolha uma opção:
        1 - Merge
        2 - Promover para producao
        3 - Mostrar Histórico
        4 - Checkout
        5 - Voltar para o menu principal
        `
        )

        switch (optRea) {
            case 1:
                branch.merge('')
                break;
            case 2:
                branch.promoverParaProducao()
                break;
            case 3:
                branch.mostrarHistorico()
                break;
            case 4:
                branch.checkout()
                break;
                case 5:
                    menu = false
                    menuPrincipal()
                    break;
                    default:
                        console.log('Opção invalida')
                        break;
        }
    }
}