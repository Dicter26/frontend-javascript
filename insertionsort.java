import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public class  insertionsort {
    /*
     * Complete the 'insertionSort1' function below.
     *
     * The function accepts following parameters:
     *  1. INTEGER n
     *  2. INTEGER_ARRAY arr
     */

    public static void insertionSort1(int n, List<Integer> arr) {
        // Write your code here
            int last = arr.get(arr.size()-1);
            String formatedstring;
            for(int i = n-1; i > 0; i--){
                if(last < arr.get(i-1)){
                    arr.set(i, arr.get(i-1));
                    formatedstring = arr.toString().replace(",","").replace("[","").replace("]","").trim();
                    System.out.println(formatedstring);
                }else{
                    arr.set(i, last);
                    formatedstring = arr.toString().replace(",","").replace("[","").replace("]","").trim();
                    System.out.println(formatedstring);
                }
            }
        }

    public static void main(String[]args){
        List<Integer> arr = Arrays.asList(1 ,3, 5, 9, 13, 22, 27, 35, 46, 51, 55, 83, 87, 23);
        
        insertionSort1(arr.size(), arr);
    }
}