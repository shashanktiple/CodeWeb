public class Sq{
    public static void main(String[] args) {
        int N =100;
        int l = 1;
        int r = N;

        while(l<r){
            int mid = (l+r)/2;
            if(mid*mid == N){
                System.out.println("----------found the square root "+mid);
                break;
            }
            else if( mid * mid > N){
                r = mid-1;
            }
            else{
                l = mid+1;
            }
            
        }
    }
}
