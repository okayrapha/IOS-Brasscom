	import java.util.Scanner; // Import necessário para utilizar a classe Scanner
	import java.util.Random; // Import necessário para utilizar a classe Random

        	public class AdivinhaUP {
	    public static void main(String[] args) {
        	        // Instância (buffer) utilizando a classe Scanner
        	        Scanner entrada = new Scanner(System.in);
        	        // Instância utilizando a classe Random
        	        Random rand = new Random();
        	        int palpite, num = 0;
        	        num = rand.nextInt(10) + 1;

        	        do{
                        System.out.println("Digite seu palpite:");
            	            palpite = entrada.nextInt();
            	            if (palpite == num) {
                	                System.out.println("Você acertou!!!");
                	            } else {
                	                if (palpite < num) {
                    	                    System.out.println("Seu palpite está abaixo.");
                    	                } else {
                    	                    System.out.println("Seu palpite está acima.");
                    	                }
                	            }
            	        }while(palpite != num);

        	        entrada.close();
        	    } // fim do método main
	}
