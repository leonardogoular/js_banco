export class cliente{
    //name;
    #nome;
    //cpf privado(cpf == Social Security Number)
    #cpf;

    get cpf(){
        //retornando cpf privado
        return this._cpf;
    }
// atributos só poderar se modificado no momento que for instanciado. 
    constructor(nome,cpf){
        this.nome = nome;
        this.cpf = cpf;
    }
}