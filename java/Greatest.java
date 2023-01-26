import java.util.Scanner;
public class Greatest {
    public static void main(String [] args) {
        Scanner sc=new Scanner(System.in);
        int a,b;
        a=sc.nextInt();
        b=sc.nextInt();
        if(a>b)
        System.out.println("a is bigger");
        else if(b>a)
        System.out.println("b is bigger");
        else
        System.out.println("equal");
    }
}
