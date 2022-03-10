class Bicicleta {

    _nome;  
    _preco;
    _quantidade;

        constructor(pNome, pPreco, pQuantidade){
            this._nome = pNome
            this._preco = pPreco
            this._quantidade = pQuantidade

}

    get nome(){
        return this.nome
    }
    set nome(pNome){
        this.nome = pNome
    }
    get preco(){
        return this.preco
    }
    set preco(pPreco){
        this.preco = pPreco
    }
    get quantidade (){
        return this.quantidade
    }
    set quantidade(pQuantidade){
        this.quantidade = pQuantidade
    }

    Desconto(pDesconto){
        this._preco = this._preco - ((this._preco * pDesconto)/100)
    }
    toString(){
        return (`A Bicicleta: ${this._nome}\ncusta: ${this._preco}\nPossuímos: ${this._quantidade} No estoque. `)
    }
   
}

var bicicleta = new Bicicleta ("Caloi" , 1500 , 15 )
bicicleta.Desconto(100);
console.log(bicicleta.toString())










