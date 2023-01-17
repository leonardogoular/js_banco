//importando modulos
import { cliente } from "./Cliente.js";
import { contaCorrente } from "./ContaCorrente.js";

//instanciando cliente1
const client1 = new cliente("ricardo",11122233309);

//criando conta do usuario ricardo
const contaCorenteRicardo = new contaCorrente(1001,client1);

//fazendo deposito
contaCorenteRicardo.depositar(500);

//criando e intaciando conta dois()
const conta2 =new contaCorrente();
const client2 =new cliente();
conta2.cliente=client2;
conta2.agencia=1002;

// transferindo valor()
contaCorenteRicardo.transferir(100,conta2);

//mostrando no console()
console.log(contaCorenteRicardo._saldo);
console.log(client1);
console.log(client2);
console.log(contaCorenteRicardo);