///////////////////////////////////////////////////////////
//                                                       //
//         STUDENT ENROLLMENT PETA PROJECT (JAVA)        //
//                                                       //
//        created by Kean James Pepito (Ichimaki)        //
//                      (2024)                           //
//                                                       //
///////////////////////////////////////////////////////////
import java.util.*;

public class Main {

    static Scanner userInput = new Scanner(System.in);

    public static void main(String[] args) throws Exception {
        start();
    }

    static void clearConsole()
    {
        System.out.println("\033[H\033[2J");  
        System.out.flush();  
    } 

    // heh
    static Boolean numericReceiver(String value)
    {
        try {
            Integer.parseInt(value);
            return true;
        } catch (Exception e) {
            return false;
        }
    }

    static void start() throws Exception
    {
        clearConsole();
        TextOutputs.Text_MainMenu();

        System.out.print("input number: ");
        String answer = userInput.next();

        if(!numericReceiver(answer))
        {
            console.log("Given input is not a number!");
            Thread.sleep(2000);
            start();
        }

        switch(Integer.parseInt(answer))
        {
            case 1: Enrollment();
            case 2: CheckEnrolled();
            case 3: RemoveEnrolled();
            case 4: System.exit(0);
            default:
                console.log("Please select from the options");
                Thread.sleep(1000);
                start();
        }
    }

    static void Enrollment() throws Exception
    {
        clearConsole();
        TextOutputs.Text_EnrollMenu();

        System.out.print("NAME: ");
        userInput.nextLine(); // weird bug fix
        String st_name = userInput.nextLine();
        System.out.print("GRADE LEVEL (1-12): ");
        String st_grade = userInput.next();
        System.out.print("ASSIGN SECTION: ");
        userInput.nextLine(); // weird bug fix
        String st_section = userInput.nextLine();
        
        int st_grade_int;

        while(true) {
            // name empty something
            if(st_name.isEmpty())
            {
                console.log("Name is empty!");
                Thread.sleep(500);
                System.out.print("RE-ENTER NAME: ");
                st_name = userInput.nextLine();
                continue;
            }
            
            // number something
            if(!numericReceiver(st_grade))
            {
                console.log("Given input is not a number!");
                Thread.sleep(500);
                System.out.print("RE-ENTER GRADE LEVEL (1-12): ");
                userInput.nextLine(); // weird bug fix
                st_grade = userInput.next();
                continue;
            }

            st_grade_int = Integer.parseInt(st_grade);

            if(st_grade_int > 12 || st_grade_int == 0)
            {
                console.log("Grade level should be 1 to 12");
                Thread.sleep(500);
                System.out.print("RE-ENTER GRADE LEVEL (1-12): ");
                st_grade = userInput.next();
                continue;
            }
            
            // section empty something
            if(st_section.isEmpty())
            {
                console.log("Section is empty!");
                Thread.sleep(500);
                System.out.print("RE-ENTER SECTION: ");
                st_section = userInput.nextLine();
                continue;
            }

            break;
        }
    
        //add
        new Student(st_name, st_grade_int, st_section).Add();
        console.log("STUDENT ENROLLED!");
        Thread.sleep(1000);
        start();
    }

    static void CheckEnrolled() throws Exception
    {
        if(Student.TotalStudents()==0)
        {
            console.log("No enrolled student yet!");
            Thread.sleep(2000);
            start();
        }

        clearConsole();
        TextOutputs.Text_CheckMenu();

        int studentNum_int, i = 1;
        for(;i <= Student.Students.keySet().size(); i++)
            console.log(i + ". " + Student.Students.keySet().toArray()[i-1]);
        console.log((i++) + ". go back to menu");
        
        while(true) {
            System.out.print("Pick student number: ");
            String studentNum = userInput.next(); 
            if(!numericReceiver(studentNum))
            {
                console.log("input should be numeric!");
                Thread.sleep(500);
                continue;
            }

            studentNum_int = Integer.parseInt(studentNum);

            if(studentNum_int == 0 || studentNum_int > Student.TotalStudents()+1)
            {
                console.log("Number doesn't exist in the selection!");
                Thread.sleep(500);
                continue;
            }

            break;
        }

        if(studentNum_int+1 == i) start();
        TextOutputs.Text_StudentInfo(Student.Students.keySet().toArray()[studentNum_int-1].toString());
        System.in.read();

        CheckEnrolled();
    }

    static void RemoveEnrolled() throws Exception
    {
        if(Student.TotalStudents()==0)
        {
            console.log("No enrolled student yet!");
            Thread.sleep(2000);
            start();
        }

        clearConsole();
        TextOutputs.Text_RemoveMenu();

        int studentNum_int, i = 1;
        for(;i <= Student.Students.keySet().size(); i++)
            console.log(i + ". " + Student.Students.keySet().toArray()[i-1]);
        console.log((i++) + ". go back to menu");
        
        while(true) {
            System.out.print("Pick student number: ");
            String studentNum = userInput.next(); 
            if(!numericReceiver(studentNum))
            {
                console.log("input should be numeric!");
                Thread.sleep(500);
                continue;
            }

            studentNum_int = Integer.parseInt(studentNum);

            if(studentNum_int == 0 || studentNum_int > Student.TotalStudents()+1)
            {
                console.log("Number doesn't exist in the selection!");
                Thread.sleep(500);
                continue;
            }

            break;
        }

        if(studentNum_int+1 == i) start();
        Student.Remove(Student.Students.keySet().toArray()[studentNum_int-1].toString());
        console.log("STUDENT REMOVED");
        Thread.sleep(2000);

        RemoveEnrolled();
    }
}
