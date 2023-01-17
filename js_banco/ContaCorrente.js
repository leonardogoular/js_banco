//importando modulo
import { cliente } from "./Cliente.js";
//exportado class
export class contaCorrente{
    
   static numeroDeconta = 0;
    agencia;
    // atributo privados
    _cliente;
    _saldo = 0;

    //atribui novo cliente somente se foi intanceado 
    set cliente(novoValor){
        if(novoValor instanceof cliente){
        this._cliente = novoValor;
    }

    }
    //retorna cliente
    get cliente(){
        return this._cliente; 
    }
 //retorna saldo
    get saldo(){
        return this._saldo;
    } 

    constructor(agencia,cliente){
        this.agencia = agencia;
        this.cliente = cliente;
        contaCorrente.numeroDeconta += 1;

    }
// saca valor se for valido 
    sacar(valor){
                if( this._saldo >= valor ){
                    this._saldo -= valor;
                    return valor;
                }

                }
                //deposita valor se for maior a 0
    depositar(valor){
                    if( 0 <valor ){
                        this._saldo += valor;
                    }
                }
                //tranferi valor da conta atual para a conta como parametro 
    transferir(valor,conta){
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);


    }
}