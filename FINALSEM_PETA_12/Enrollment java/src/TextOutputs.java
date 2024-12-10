import java.util.HashMap;
import java.util.Scanner;

public class TextOutputs {

    static Scanner value = new Scanner(System.in);
    // FIX?:
    // bruh; the triple quote/Text block wont work
    // it says source level 15 above only??!
    private static void main()
    {
        console.log("\tSTUDENT ENROLLMENT APPLICATION (JAVA)\n");
        console.log("\tCurrent Students Enrolled: "+Student.TotalStudents()+"\n");
    }
    // Main menu
    public static void Text_MainMenu()
    {
        main();
        console.log("\t1. Enroll Student");
        console.log("\t2. Check Enrolled");
        console.log("\t3. Remove Student");
        console.log("\t4. quit\n");
    }
    // Enroll menu
    public static void Text_EnrollMenu()
    {
        main();
        console.log("ENROLL A STUDENT:\n");
    }
    // Check enroll menu
    public static void Text_CheckMenu()
    {
        main();
        console.log("CHECK ENROLLED STUDENT:\n");
    }
    // Remove student menu
    public static void Text_RemoveMenu()
    {
        main();
        console.log("REMOVE ENROLLED STUDENT:\n");
    }
    // Student Info
    public static void Text_StudentInfo(String student)
    {
        HashMap<String, Object> data = Student.Students.get(student);
        console.log("\n\tSTUDENT NAME\t:\t"     +   student                   );
        console.log("\tGRADE LEVEL\t:\t"        +   data.get(Main.GRADE)      );
        console.log("\tSECTION ASSIGNED:\t"     +   data.get(Main.SECTI0N)    );
        console.log("\tDATE ENROLLED\t:\t"      +   data.get(Main.DATE) + "\n");
        console.log("press enter to continue...");
    }
    public static String MessageInput(String message)
    {
        System.out.print(message);
        System.out.flush();
        return value.nextLine();
    }
    public static void clear()
    {
        System.out.println("\033[H\033[2J");  
        System.out.flush();
    } 
}