// Atividade 2 Programação Orientada a Objetos.
class Fisica {

    _nome;
    _cpf;
    _dataNasc;
    constructor (pNome, pCpf, pDataNasc){
        this._nome = pNome;
        this._cpf = pCpf;
        this._dataNasc = pDataNasc;
    
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
        this._dataNasc = pDataNasc;
    }


    imprimir(){
        return "Nome: " + this._nome +
               "\nCpf: " + this._cpf +
               "\nDataNasc: " + this._dataNasc;  
    }
}
var fisica = new Fisica ("Iury Ribeiro", "021.511.031-61" , "06/03/1997");
console.log(fisica.imprimir());



console.log("\n#################################################");


class Juridica {

_nome;
_cnpj;
_razaoSocial
constructor(pNome, pCnpj, pRazaoSocial) {
 
    this._nome = pNome;
    this._cnpj = pCnpj;
    this._razaoSocial = pRazaoSocial;
}
 
    get nome(){
        return this._nome;
   }
   set nome(pNome){
       this._nome = pNome;
   }
   get cnpj(){
       return this._cnpj;
   }
   set cnpj(pCnpj){
       this._cnpj = pCnpj;
   }
   get _razaoSocial(){
       return this._razaoSocial;
   }
   set _razaoSocial(pRazaoSocial){
       this._razaoSocial = pRazaoSocial
   }

   imprimir(){
    return "Nome: " + this._nome +
           "\nCnpj: " + this._cnpj +
           "\nRazaoSocial: " + this._razaoSocial;  

}
}
var juridica = new Juridica ("Iury Ribeiro", "31.323.718/0001-42" , "SyuDoto");
console.log(juridica.imprimir());








