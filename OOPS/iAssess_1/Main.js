// package CollectionsAndMap.iAssess_1;

public class Main {
    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);
        System.out.println("Enter number of users:");
        int n = in.nextInt();
        in.nextLine();

        Set<User> set = new TreeSet<>();
        for (int i = 0; i < n; i++) {
            System.out.println("Enter details of user" + (i + 1));
        }
    }
}
