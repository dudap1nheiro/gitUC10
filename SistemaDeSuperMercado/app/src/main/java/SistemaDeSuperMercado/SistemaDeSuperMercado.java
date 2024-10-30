/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package SistemaDeSuperMercado;

/**
 *
 * @author EDUARDAPINHEIRODESOU
 */
abstract public class SistemaDeSuperMercado {
    protected String nome;
    protected String tipo;
    protected Double valor;
    
    public SistemaDeSuperMercado (String nome, String tipo, Double valor){
        this.nome = nome;
        this.tipo = tipo;
        this.valor = valor; 
        
    }    
}
