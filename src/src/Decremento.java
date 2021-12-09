public class Decremento {
    public static void main(String[] args) {
        int contador = 100; // Declara e inicializa o contador

        while (contador > 0) {
            System.out.print(contador + " ");
            if(contador%30 == 0) System.out.println(""); // Quebra de linha para ver todos os números
            contador--; // mesma coisa que utilizar contador = contador - 1
        }
    } // fim do método main
} // fim da classe Decremento
