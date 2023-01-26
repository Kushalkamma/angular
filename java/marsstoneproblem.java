<strong>import java.util.Arrays;
import java.util.Scanner;

public class marsstoneproblem {

    // This is a mars problem number of stones rob can bring from mars 
    public static void main(String[] args) {

        int m=10;
        int n=3;
        int sum=0;
        int counter1=0;

        int[] arr1={1,3,5};
        int arr2[]=new int[m];
        int arr3[]=new int[m-n];

        for(int i=0;i&lt;m;i++){
            arr2[i]=i+1;
        }
        System.out.println(Arrays.toString(arr2));

        int k=0;
        int counter=0;

        // to remove duplicate elements from both the arrays 

        for (int i=0;i&lt;arr2.length;i++){
            counter=0;

            for(int j=0;j&lt;arr1.length;j++){

                if(arr2[i]==arr1[j]){
                     break;
                }
                else{
                    counter=counter+1;
                }
            }
            if(counter&gt;=n){
                arr3[k]=arr2[i];
                k=k+1;
            }
        }
        System.out.println(Arrays.toString(arr3));
        

        for( int i=0;i&lt;arr3.length;i++){

            if(sum+arr3[i]&lt;=m){  

                sum=sum+arr3[i]; 
                counter1=counter1+1;  
            }
            else{
                break;
            }
        }
        System.out.println("The possible number of stones which can be brought from mars are");
        System.out.println( counter1);

        
    }

}
</strong>