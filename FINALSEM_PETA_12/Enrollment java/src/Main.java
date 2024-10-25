///////////////////////////////////////////////////////////
//                                                       //
//         STUDENT ENROLLMENT PETA PROJECT (JAVA)        //
//                                                       //
//        created by Kean James Pepito (Ichimaki)        //
//                      (2024)                           //
//                                                       //
///////////////////////////////////////////////////////////
public class Main {

    public static final String GRADE = "GRADE_LEVEL";
    public static final String SECTI0N = "SECTION_ASSIGNED";
    public static final String DATE = "ENROLL_DATE";

    public static void main(String[] args) throws Exception {
        start();
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
        TextOutputs.clear();
        TextOutputs.Text_MainMenu();
        String answer = TextOutputs.MessageInput("input number: ", false);
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
        TextOutputs.clear();
        TextOutputs.Text_EnrollMenu();

        // there's a weird bug where it needs to have a double input idk
        String st_name = TextOutputs.MessageInput("NAME: ", true);
        String st_grade = TextOutputs.MessageInput("GRADE LEVEL (1-12): ", false);
        String st_section = TextOutputs.MessageInput("ASSIGN SECTION: ", true);
        
        int st_grade_int;

        while(true) {
            // name empty something
            if(st_name.isEmpty())
            {
                console.log("Name is empty!");
                Thread.sleep(500);
                st_name = TextOutputs.MessageInput("RE-ENTER NAME: ", false);
                continue;
            }
            // number something
            if(!numericReceiver(st_grade))
            {
                console.log("Given input is not a number!");
                Thread.sleep(500);
                st_grade = TextOutputs.MessageInput("RE-ENTER GRADE LEVEL (1-12): ", false);
                continue;
            }

            st_grade_int = Integer.parseInt(st_grade);

            if(st_grade_int > 12 || st_grade_int == 0)
            {
                console.log("Grade level should be 1 to 12");
                Thread.sleep(500);
                st_grade = TextOutputs.MessageInput("RE-ENTER GRADE LEVEL (1-12): ", false);
                continue;
            }
            // section empty something
            if(st_section.isEmpty())
            {
                console.log("Section is empty!");
                Thread.sleep(500);
                st_section = TextOutputs.MessageInput("RE-ENTER SECTION: ", false);
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

        TextOutputs.clear();
        TextOutputs.Text_CheckMenu();

        int studentNum_int, i = 1;
        for(;i <= Student.Students.keySet().size(); i++)
            console.log(i + ". " + Student.Students.keySet().toArray()[i-1]);
        console.log((i++) + ". go back to menu");
        
        while(true) {
            String studentNum = TextOutputs.MessageInput("Pick student number: ", false); 
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

        TextOutputs.clear();
        TextOutputs.Text_RemoveMenu();

        int studentNum_int, i = 1;
        for(;i <= Student.Students.keySet().size(); i++)
            console.log(i + ". " + Student.Students.keySet().toArray()[i-1]);
        console.log((i++) + ". go back to menu");
        
        while(true) {
            String studentNum = TextOutputs.MessageInput("Pick student number: ", false); 
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