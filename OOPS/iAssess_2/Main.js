
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);
        System.out.println("Enter the number of User details to be added");
        int n = in.nextInt();
        in.nextLine();

        UserBO list = new UserBO();
        list.addAll(UserBO.getList());
        }
    }
}
