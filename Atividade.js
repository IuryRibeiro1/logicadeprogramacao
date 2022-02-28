class Cadastro {
    _nome
    _idade
    _limite
    
    constructor(pNome, pIdade, pLimite){
         
        this._nome = pNome
        this._idade = pIdade
        this._limite = pLimite
    }
    
    get _nome(){
        return this._nome
    }
    set _nome(pNome){
        this._nome = pNome
    }
    get _idade(){
        return this._idade
    }
    set _idade(pIdade){
        if (_idade.length > 18)
        this._idade = pIdade
        else console.log("Cadastro não permitido por ser menor de Idade")
        
    }
    get _limite(){
        return this._limite
    }
    set _limite(pLimite){
        if (_limite >=100)
        this._limite = pLimite
        else console.log("Não foi permitido cadastrar por excesso de vagas")
    }   
    
    imprimir(){
        return "\nNome: " + this._nome +
               "\nIdade: " + this._idade +
               "\nLimite: " + this._limite;
    }
    }
    
    var cadastro = new Cadastro ("Syu", 17, 101)
    console.log(cadastro.imprimir())
    