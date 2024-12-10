import java.util.Scanner;
// very kinda not important part, a shortcut for "System.out.println()"
public class console {
    public static void log(Object value){
        System.out.println(value);
        System.out.flush();
    }
    @SuppressWarnings("resource")
    public static void pause()
    {
        new Scanner(System.in).nextLine();
    }
}