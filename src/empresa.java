import org.w3c.dom.ls.LSOutput;

public class empresa {
    public static void main(String[] args) {
        produto pc = new produto("Carne" , 10  , 30.00);
        pc.comprar(2.0);
        produto_leite pl = new produto_leite("Leite" , 10.0, 5.00);
        pl.comprar(3.0);
        produto_oleo po = new produto_oleo("Oleo", 15.0 , 3.00);
        po.comprar(5.0);
        produto_alface pa = new produto_alface("Alface" , 20.0 , 2.00);
        pa.comprar(10.0);

        System.out.println(pc);
        System.out.println(pl);
        System.out.println(po);
        System.out.println(pa);
    }

}

