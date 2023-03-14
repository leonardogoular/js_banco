//importando modulos
import { cliente } from "./Cliente.js";
import { contaCorrente } from "./ContaCorrente.js";

//instanciando cliente1
const client1 = new cliente("ricardo",11122233309);

//criando conta do usuario ricardo
const contaCorrenteRicardo = new contaCorrente(1001,client1);

//fazendo deposito
contaCorrenteRicardo.depositar(500);

//criando e intaciando conta dois()
const conta2 = new contaCorrente();
const client2 = new cliente();
conta2.cliente = client2;
conta2.agencia = 1002;

// transferindo valor()
contaCorrenteRicardo.transferir(100,conta2);

//mostrando no console()
console.log(contaCorrenteRicardo._saldo);
console.log(client1);
console.log(client2);
console.log(contaCorrenteRicardo);