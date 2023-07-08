import java.io.*;
import java.math.*;
import java.security.*;
import java.text.*;
import java.util.*;
import java.util.concurrent.*;
import java.util.function.*;
import java.util.regex.*;
import java.util.stream.*;
import static java.util.stream.Collectors.joining;
import static java.util.stream.Collectors.toList;

class Result {

    /*
     * Complete the 'climbingLeaderboard' function below.
     *
     * The function is expected to return an INTEGER_ARRAY.
     * The function accepts following parameters:
     *  1. INTEGER_ARRAY ranked
     *  2. INTEGER_ARRAY player
     */

    public static List<Integer> climbingLeaderboard(List<Integer> ranked, List<Integer> player) {
    // Write your code here
    return rank(ranked, player);
    }
    
    //metodo para limpiar el arreglo que contiene los scores para evitar          repetidos
    public static List<Integer> rank(List<Integer> ranked, List<Integer> player){
        List<Integer> position = new ArrayList<>();
        int score = ranked.get(0);
        for(int i = 1; i <= ranked.size()-1; i++){
            if(score == ranked.get(i)){
                ranked.remove(i);
            }else{
                score = ranked.get(i);
            }
        }
        //ahora vamos a iterar sobre el arreglo ranked limpio de adelante             hacia atras y con player de atras a adelante.
        for(int j = 0; j < player.size(); j++){
            for(int k = ranked.size()-1; k >= 0; k--){
                if(player.get(j) < ranked.get(k)){
                    ranked.add(k+1,player.get(j));
                    position.add(k+2);
                    break;
                }
                if(player.get(j) == ranked.get(k)){
                    position.add(k+1);
                    break;
                }
            }
        }
        if(player.get(player.size()-1)> ranked.get(0)){
            position.add(1);
        }
        return position;
    }
}

public class Solution {
    public static void main(String[] args) throws IOException {
        BufferedReader bufferedReader = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bufferedWriter = new BufferedWriter(new FileWriter(System.getenv("OUTPUT_PATH")));

        int rankedCount = Integer.parseInt(bufferedReader.readLine().trim());

        List<Integer> ranked = Stream.of(bufferedReader.readLine().replaceAll("\\s+$", "").split(" "))
            .map(Integer::parseInt)
            .collect(toList());

        int playerCount = Integer.parseInt(bufferedReader.readLine().trim());

        List<Integer> player = Stream.of(bufferedReader.readLine().replaceAll("\\s+$", "").split(" "))
            .map(Integer::parseInt)
            .collect(toList());

        List<Integer> result = Result.climbingLeaderboard(ranked, player);

        bufferedWriter.write(
            result.stream()
                .map(Object::toString)
                .collect(joining("\n"))
            + "\n"
        );

        bufferedReader.close();
        bufferedWriter.close();
    }
}
