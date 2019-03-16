import java.util.*;

public class Main{
    public static void main(String[] args) {
        Scanner reader = new Scanner(System.in);
        int periodo = reader.nextInt();
        int saldo = reader.nextInt();
        int menorSaldo = saldo;
        int[] movimento = new int[periodo];

        for(int i = 0; i<periodo;i++){
            movimento[i] = reader.nextInt();
            saldo = saldo + movimento[i];
            if(menorSaldo > saldo){
                menorSaldo = saldo;
            }
        }
        System.out.println(menorSaldo);
    }
}