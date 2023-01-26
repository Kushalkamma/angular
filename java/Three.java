import java.util.Scanner;
public class Three {
    public static void main(String [] args) {
        Scanner sc=new Scanner(System.in);
        int a,b,c;
        a=sc.nextInt();
        b=sc.nextInt();
        c=sc.nextInt();
        if(a>b && a>c)
            System.out.println("a is bigger");
        else if(b>c && b>a)
            System.out.println("b is bigger");
        else
            System.out.println("c is bigger");
    }
}
