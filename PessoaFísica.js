class Endereço{

    constructor(pRua, pCidade, pEstado, pCep, pPais){
            this.rua = pRua;
            this.cidade = pCidade;
            this.estado = pEstado;
            this.cep = pCep;
            this.pais = pPais

}
}

class Fisica extends Endereço{

    constructor(pNome, pCpf, pDataDeNasc,pRua, pCidade, pEstado, pCep, pPais){
    super(pRua, pCidade, pEstado, pCep, pPais)
        
        this.nome = pNome;
        this.cpf = pCpf;
        this.dataDeNasc = pDataDeNasc;
        }

       toString(){
           return `Nome: ${this.nome}\nCPF: ${this.cpf}\nDatadeNascimento: ${this.dataDeNasc}\nRua: ${this.rua}\nCidade: ${this.cidade}\nEstado: ${this.estado}\nCEP: ${this.cep}\nPaís: ${this.pais} `
        }
}

    console.log("\nPessoa Física: ")
    var pf = new Fisica ("Iury" , "000.000.000-00" , "06/03/1997" , "Rubinho" , " Macapá" , "AP" , "68909-00" , "Brasil")
    console.log(pf.toString())

    class Juridica extends Endereço{
     
       constructor(pNome, pCnpj, pRazaoSocial, pRua, pCidade, pEstado, pCep, pPais){
           super(pRua, pCidade, pEstado, pCep, pPais)
           this.nome = pNome;
           this.cnpj = pCnpj;
           this.razaoSocial = pRazaoSocial;
       }

       toString(){
        return `Nome: ${this.nome}\nCNPJ: ${this.cnpj}\nRazãoSocial: ${this.razaoSocial}\nRua: ${this.rua}\nCidade: ${this.cidade}\nEstado: ${this.estado}\nCEP: ${this.cep}\nPaís: ${this.pais}`
    }

    }
    console.log("\nPessoa Jurídica:")
    var pj = new Juridica ("Ribeiro" , "37.082.982/0001-18", "SyuDoto" , "Ayrton" , " São Paulo" , "SP" , "68509-00" , "Brasil")
    console.log(pj.toString())