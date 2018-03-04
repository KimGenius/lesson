import java.util.Random;
import java.util.Scanner;

public class rcp {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int player = scanner.nextInt();
        Random random = new Random();
        int computer = random.nextInt(3) + 1;
        System.out.println(computer);
        // 1 : 가위
        // 2 : 바위
        // 3 : 보
        if ((player == 1 && computer == 2) || (player == 2 && computer == 3) || (player == 3 && computer == 1)) {
            System.out.println("컴퓨터 승!");
        } else if ((player == 1 && computer == 3) || (player == 2 && computer == 1) || (player == 3 && computer == 2)) {
            System.out.println("플레이어 승!");
        } else if (player == computer) {
            System.out.println("무승부!");
        }
    }
}
