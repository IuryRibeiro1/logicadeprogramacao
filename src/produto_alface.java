public class produto_alface {

    public String alface;
    public double quantidade;
    public double preco;

    public produto_alface(String produto_alface, double quantidade, double preco) {
        setProduto_Alface(produto_alface);
        setPreco(preco);
        setQuantidade(quantidade);
    }

    public String getProduto_Alface() {
        return alface;
    }

    public void setProduto_Alface(String alface) {
        this.alface = alface;
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
        this.setPreco(this.quantidade * this.preco);
    }

    public String toString(){
        return "Produto: " + this.getProduto_Alface() +
                "\nPreco: " + this.getPreco() +
                "\nQuantidade: " + this.getQuantidade() +
                "\n";
    }
}
