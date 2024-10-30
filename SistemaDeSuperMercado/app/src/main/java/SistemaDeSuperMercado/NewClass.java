/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package SistemaDeSuperMercado;

/**
 *
 * @author EDUARDAPINHEIRODESOU
 */
import java.util.ArrayList;
import java.util.Scanner;


public class main {

    public static void main(String[] args) {
        ArrayList<Produto> carrinho = new ArrayList<>();
        Scanner scanner = new Scanner(System.in);

        boolean rodar = false;

        while (!rodar) {
            System.out.println("------ menu de compras -----------");
            System.out.println("1- Adicionar no carrinho");
            System.out.println("2- Remover do carrino");
            System.out.println("3- Detalhes do carrinho");
            System.out.println("4- Finalizar a compra");
            System.out.println("5- Sair");
            System.out.println("-----------------------------------");

            int sistema = scanner.nextInt();

            switch (sistema) {
                case 1:
                    System.out.println("Escolha a categoria/tipo");
                    System.out.println("1- bolo");
                    System.out.println("2- danone");
                    System.out.println("3- miojo");
                    System.out.println("4- sabonete");
                    System.out.println("5- shampoo");
                    int escolha = scanner.nextInt();
                    switch (escolha) {
                        case 1:
                            Bebidas newbebida = new Bebidas();
                            carrinho.add(newbebida);
                            System.out.println("bolo adicionado ao carrinho");
                            break;
                        case 2:
                            Massa newmassa = new Massa();
                            carrinho.add(newmassa);
                            System.out.println("danone adicionado ao carrinho");
                            break;
                        case 3:
                            Limpeza newlimpeza = new Limpeza();
                            carrinho.add(newlimpeza);
                            System.out.println("miojo adicionado ao carrinho");
                            break;
                        case 4:
                            Bombonierre newbis = new Bombonierre();
                            carrinho.add(newbis);
                            System.out.println("sabonete adicionado ao carrinho");
                            break;
                        case 5:
                            Carnes newcarne = new Carnes();
                            carrinho.add(newcarne);
                            System.out.println("shampoo adicionado ao carrinho");
                            break;
                    }
                    break;
                case 2:
                    System.out.println("Escolha a categoria/tipo");
                    System.out.println("1- bolo");
                    System.out.println("2- danone");
                    System.out.println("3- miojo");
                    System.out.println("4- sabonete");
                    System.out.println("5- shampoo");
                    for (int i = 0; i < carrinho.size(); i++) {
                        System.out.println((i + 1) + carrinho.get(i).nome + "" + "RS" + "" + carrinho.get(i).preco);
                    }

                    System.out.println("Escolha o que voce deseja remover do carrinho");
                    int i = scanner.nextInt();
                    carrinho.remove(i - 1);
                    break;

                case 3:
                    System.out.println(carrinho);
                    double valorTotal = 0;
                    for (int ii = 0; ii < carrinho.size(); ii++) {
                        valorTotal += carrinho.get(ii).preco;
                        
                    }
                    System.out.println("Valor total do carrinho: " + valorTotal);
                    break;
                case 4:
                    System.out.println("Voce concluiu a sua compra");
                    carrinho.clear();
                    break;
                case 5:
                    System.out.println("Tchau tcahu");
                    break;
                default:
            }       
    }

}
}
