public class produto {

    public String produto;
    public double quantidade;
    public double preco;

    public produto (String produto, double quantidade, double preco) {
     setProduto(produto);
     setPreco(preco);
     setQuantidade(quantidade);
    }

    public String getProduto() {
        return produto;
    }

    public void setProduto(String produto) {
        this.produto = produto;
    }

    public double getQuantidade() {
        return quantidade;
    }

    public void setQuantidade(double quantidade) {
        this.quantidade = quantidade;
    }

    public double getPreco() {
        return preco;
    }

    public void setPreco(double preco) {
        this.preco = preco;
    }

    public void comprar(double valor){
        this.setQuantidade(this.quantidade - valor );
        this.setPreco(this.quantidade *  this.preco);
    }


    public String toString(){
        return "Produto: " + this.getProduto() +
                "\nPreco: " + this.getPreco() +
                "\nQuantidade: " + this.getQuantidade() +
                "\n";
    }
}
