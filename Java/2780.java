import java.util.*;

public class Main{
    public static void main(String[] args) {
        Scanner reader = new Scanner(System.in);
        int D = reader.nextInt();
        if(D <= 800){
            System.out.println("1");
        }else if(D > 800 && D<= 1400){
            System.out.println("2");
        }else if(D > 1400 && D<= 2000){
            System.out.println("3");
        }
    }
}