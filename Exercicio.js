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
console.log("Pessoa Física: ")
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
   get razaoSocial(){
       return this._razaoSocial;
   }
   set razaoSocial(pRazaoSocial){
       this._razaoSocial = pRazaoSocial
   }

   imprimir(){
    return "Nome: " + this._nome +
           "\nCnpj: " + this._cnpj +
           "\nRazaoSocial: " + this._razaoSocial;  

}
}
console.log("Pessoa Jurídica: ")
var juridica = new Juridica ("Iury Ribeiro", "31.323.718/0001-42" , "SyuDoto");
console.log(juridica.imprimir());

console.log("\n#################################################");

class Endereço extends Fisica{

   
    _rua;
    _cidade;
    _estado;
    _cep
    _pais;
    constructor (pNome, pCpf, pDataNasc, pRua, pCidade, pEstado, pCep, pPais){
    super(pNome, pCpf, pDataNasc )
    
    this._rua = pRua;
    this._cidade = pCidade;
    this._estado = pEstado;
    this._cep = pCep;
    this._pais = pPais;
}

    get rua(){
    return this._rua;
}
    set rua(pRua){
    this._rua = pRua;
}
    get cidade(){
    return this._cidade;
}
    set cidade(pCidade){
    this._cidade = pCidade;
}
    get estado(){
    return this._estado;
}
    set estado(pEstado){
    this._estado = pEstado
    }

    get cep(){
    return this._cep;
}
    set cep(pCep){
    this._cep = pCep
}
get pais(){
    return this._pais;
}
set pais(pPais){
    this._pais = pPais
}

imprimir(){
    return super. imprimir() + "\nRua: " + this._rua +
           "\nCidade: " + this._cidade +
           "\nEstado: " + this._estado +
           "\nCep: " + this._cep +
           "\nPais: " + this._pais; 


}
}
var endereço = new Endereço ("Iury Ribeiro", "021.511.031-61" , "06/03/1997" , "Rubinho" , "Macapá", "Ap" , "68.900-008" , "Brasil");
console.log(endereço.imprimir());


   
console.log("\n#################################################");




class EndereçoJu extends Juridica{

   
    _rua;
    _cidade;
    _estado;
    _cep
    _pais;
    constructor (pNome, pCnpj, pRazaoSocial, pRua, pCidade, pEstado, pCep, pPais){
    super(pNome, pCnpj, pRazaoSocial)
    
    this._rua = pRua;
    this._cidade = pCidade;
    this._estado = pEstado;
    this._cep = pCep;
    this._pais = pPais;
}

    get rua(){
    return this._rua;
}
    set rua(pRua){
    this._rua = pRua;
}
    get cidade(){
    return this._cidade;
}
    set cidade(pCidade){
    this._cidade = pCidade;
}
    get estado(){
    return this._estado;
}
    set estado(pEstado){
    this._estado = pEstado
    }

    get cep(){
    return this._cep;
}
    set cep(pCep){
    this._cep = pCep
}
get pais(){
    return this._pais;
}
set pais(pPais){
    this._pais = pPais
}

imprimir(){
    return super. imprimir() + "\nRua: " + this._rua +
           "\nCidade: " + this._cidade +
           "\nEstado: " + this._estado +
           "\nCep: " + this._cep +
           "\nPais: " + this._pais; 


}
}
var endereçoJu = new EndereçoJu ("Iury Ribeiro", "31.323.718/0001-42" , "SyuDoto" , "Rubinho" , "Macapá", "Ap" , "68.900-008" , "Brasil");
console.log(endereçoJu.imprimir());





