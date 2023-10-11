import java.util.ArrayList;
public class A{
    public static void main(String args[]) 
    {
     int arr[] = {1,2,3,4,5,6,7,8,9,10};
     ArrayList<Integer> p = new ArrayList<Integer>();
     ArrayList<Integer> c = new ArrayList<Integer>();
     ArrayList<Integer> n = new ArrayList<Integer>();

     for(int i=0; i<arr.length; i++)
     { 
        int count=0;
        for(int j=0; j< arr.length; j++)
        {
            if(arr[i] % arr[j] == 0)
                count++;
        }   
            if(count<2){System.out.println("Number is neither prime nor composite"+n.add(arr[i]));}
            else if(count>2){ System.out.println(c.add(arr[i]));} 
            else{ System.out.println(p.add(arr[i]));}
     }
     System.out.println("nutral="+n);
     System.out.println("Primes="+p);
     System.out.println("Composite ="+ c);

         
    }
}

