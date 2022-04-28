public class produto_leite {

    public String produto_Leite;
    public double quantidade;
    public double preco;

    public produto_leite(String Produto_leite, double quantidade, double preco) {
       setProduto_Leite(Produto_leite);
       setPreco(preco);
       setQuantidade(quantidade);
    }

    public String getProduto_Leite() {
        return produto_Leite;
    }

    public void setProduto_Leite(String produto_leite) {
        this.produto_Leite = produto_leite;
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

    public void comprar(double valor) {
        this.setQuantidade(this.quantidade - valor);
        this.setPreco(this.preco * valor);
    }

    public String toString(){
        return "Produto: " + this.getProduto_Leite() +
                "\nPreco: " + this.getPreco() +
                "\nQuantidade: " + this.getQuantidade() +
                "\n";
    }
}
