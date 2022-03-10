class Cadastro {
    nome;
    idade;
    quantidade;

    constructor(pNome, pIdade, pQuantidade) {

        this.nome = pNome;
        this.idade = pIdade;
        this.quantidade = pQuantidade;
    }

    get nome() {
        return this.nome
    }
    set nome(pNome) {
        this.nome = pNome
    }
    get idade() {
        return this.idade;
    }
    set idade(pIdade) {
        this.idade = pIdade
    }

    get quantidade() {
        return this.quantidade
    }
    set quantidade(pQuantidade) {
        this.quantidade = pQuantidade
    }

    tostring() {
        if (this.idade < 18) { console.log("Cadastro não permitido") }
       
        else console.log("Cadastro permitido")
        
        while (this.quantidade < 100) {
            console.log("Cadastro autorizado")
            this.quantidade++}
        
        if (this.quantidade >= 100) { console.log("Não é permitido cadastrar por excesso de vagas!") }
       
        return `Nome: ${this.nome}  \nIdade: ${this.idade}  \nQuantidade: ${this.quantidade}`



    }
}


var cadastro = new Cadastro("Iury", 18, 90)
console.log(cadastro.tostring())






