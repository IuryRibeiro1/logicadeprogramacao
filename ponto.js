class Endereço{

    rua;
    cidade;
    estado;
    cep;
    pais;

        constructor(pRua, pCidade, pEstado, pCep, pPais){
            this.rua = pRua;
            this.cidade = pCidade;
            this.estado = pEstado;
            this.cep = pCep;
            this.pais = pPais

}
}

class Fisica extends Endereço{
    nome;
    cpf;
    dataDeNasc;

    constructor(pNome, pCpf, pDataDeNasc,pRua, pCidade, pEstado, pCep, pPais){
    super(pRua, pCidade, pEstado, pCep, pPais)
        
        this.nome = pNome;
        this.cpf = pCpf;
        this.dataDeNasc = pDataDeNasc;
        }

        imprimir(){
            return "\n Nome: " + this.nome +
                   "\n CPF: " + this.cpf +
                   "\n DataDeNasc: " + this.dataDeNasc +
                   "\n Rua: " + this.rua +
                   "\n Cidade: " + this.cidade +
                   "\n Estado: " + this.estado +
                   "\n Cep: " + this.cep +
                   "\n País: " + this.pais; 
        }
}

    console.log("Pessoa Física: ")
    var pf = new Fisica ("Iury" , "000.000.000-00" , "06/03/1997" , "Rubinho" , " Macapá" , "AP" , "68909-00" , "Brasil")
    console.log(pf.imprimir())

    console.log("##########################")

    class Juridica extends Endereço{
       nome;
       cnpj;
       razaoSocial;

       constructor(pNome, pCnpj, pRazaoSocial, pRua, pCidade, pEstado, pCep, pPais){
           super(pRua, pCidade, pEstado, pCep, pPais)
           this.nome = pNome;
           this.cnpj = pCnpj;
           this.razaoSocial = pRazaoSocial;
       }

       imprimir(){
        return "\n Nome: " + this.nome +
               "\n CNPJ: " + this.cnpj +
               "\n RazãoSocial: " + this.razaoSocial +
               "\n Rua: " + this.rua +
               "\n Cidade: " + this.cidade +
               "\n Estado: " + this.estado +
               "\n Cep: " + this.cep +
               "\n País: " + this.pais; 
    }

    }
    console.log("Pessoa Jurídica:")
    var pj = new Juridica ("Ribeiro" , "37.082.982/0001-18", "SyuDoto" , "Ayrton" , " São Paulo" , "SP" , "68509-00" , "Brasil")
    console.log(pj.imprimir())