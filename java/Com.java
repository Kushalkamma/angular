abstract class Com{
    public abstract void animal();
    public void sound(){
        System.out.println("baba");
    }
    
}
class Sub extends Com{


}
class yello extends Com{
    public static void main(String[] args){
        Sub s=new Sub();
        s.sound();
    }
}
