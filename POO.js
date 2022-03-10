//Criação de uma atividade que envolva todo o aprendizado até o momento
class Violão {
    _quantidade
    _cor
    _marca
    
        constructor(pQuantidade, pCor, pMarca){
            this._quantidade = pQuantidade
            this._cor = pCor
            this._marca = pMarca
        }
    
    get quantidade(){
        return this.quantidade;
    }
    set quantidade(pQuantidade){
        this.quantidade = pQuantidade
    }
    get cor(){
        return this.cor;
    }
    set cor(pCor){
        this.cor = pCor;
    }
    get Marca(){
        return this.Marca;
    }
    set marca(pMarca){
        this.marca = pMarca;

    }
}

class Pessoa extends Violão{
_nome;
_idade;
_cpf;
    
    constructor(pNome, pIdade, pCpf, pQuantidade, pCor, pMarca){
       super(pQuantidade, pCor, pMarca)
        this._nome = pNome;
        this._idade = pIdade;
        this._cpf = pCpf;
    }     

get nome(){
    return this.nome;
}
set nome(pNome){
    this.nome = pNome;
}
get idade(){
    return this.idade;
}
set idade(pIdade){
    this.idade = pIdade;
}
get cpf(){
    return this.cpf;
}
set cpf(pCpf){
    this.cpf = pCpf;
}



    add(numero){
        this._quantidade.push(numero)
    }
    toString() {
        return `"Nome: ${this._nome} tem ${this._idade} anos, o seu CPF é ${this._cpf}. Possui ${this._quantidade} violão da  cor ${this._cor} dá marca ${this._marca}. `
    }   

}

var pessoa = new Pessoa("Iury" , 25 , "001.002.003-04" , [1] , "Cinza" , "Tagima")
pessoa.add(1);
console.log(pessoa.toString())

