/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package SistemaDeSuperMercado;

/**
 *
 * @author EDUARDAPINHEIRODESOU
 */
public class shampoo {
    private String nome;
    private String tipo;
    private Double valor;
    
    public shampoo(String nome, String tipo, Double valor){
        this.nome = nome;
        this.tipo = tipo;
        this.valor = valor;
    }
    public void informaçao () {
        System.out.println(" produto " + nome + " categoria " + tipo + "10,99" + valor);
    }
}