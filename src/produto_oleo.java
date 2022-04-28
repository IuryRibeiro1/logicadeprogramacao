public class produto_oleo {

    public String oleo;
    public double quantidade;
    public double preco;

    public produto_oleo(String produto_oleo, double quantidade, double preco) {
        setProduto_Oleo(produto_oleo);
        setPreco(preco);
        setQuantidade(quantidade);
    }

    public String getProduto_Oleo() {
        return oleo;
    }

    public void setProduto_Oleo(String oleo) {
        this.oleo = oleo;
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
        return "Produto: " + this.getProduto_Oleo() +
                "\nPreco: " + this.getPreco() +
                "\nQuantidade: " + this.getQuantidade()+
                "\n";
    }
}
