// Atividade 2 Programação Orientada a Objetos.
class Fisica {

    _nome;
    _cpf
    _dataNasc
    constructor (pNome, pCpf, pDataNasc){
        this._nome = pNome;
    }
    get nome(){
        return this._nome;
 
    }
    set nome(pNome){
        this._nome = pNome;
    }

    get cpf(){
        return this._cpf;
    }
    
    set cpf(pCpf){
        this._cpf = pCpf;
    }
    get dataNasc(){
        return this._dataNasc;
    }
    set dataNasc(pDataNasc){
        this._dataNasc = pdataNasc;
    }


    imprimir(){
        return "Nome: " + this._nome +
        "\nCpf: " + this._cpf +
        "\nDatanasc: " + this._dataNasc +     
    }

}
  
var fisica = new Fisica ("Iury Ribeiro", "021.511.031-61" , "06/03/1997");
console.log("Nome: " , fisica.imprimir);
fisica.nome = "Iury Ribeiro";
console.log("Novo nome: " , fisica.imprimir, "021.511.031-61" , "06/03/1997");














