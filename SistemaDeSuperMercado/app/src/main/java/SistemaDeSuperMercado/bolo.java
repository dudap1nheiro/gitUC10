/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package SistemaDeSuperMercado;

/**
 *
 * @author EDUARDAPINHEIRODESOU
 */
public class bolo {
    private String nome;
    private String tipo;
    private Double valor;
    
    public bolo (String nome, String tipo, Double valor){
        this.nome = nome;
        this.tipo = tipo;
        this.valor = valor;
    } 
    public void informaçoes (){
        System.out.println(" produto; " + nome + ", categoria: " + tipo + ", valor: " +valor);
    }
    
}
}
