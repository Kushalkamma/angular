import java.io.*;
interface Inte{
    void youcam();
    void goe();
}
class Sub implements Inte{
    Sub()
    {}

    //@Override
    public void youcam() {
        System.out.println("you cam imple");
        
    }

   // @Override
    public void goe() {
        System.out.println("goe imple");
        
    }

}
class Subb {
    public static void main(String[] args){
        Sub s=new Sub();
        s.youcam();
        s.goe();
    }
}
