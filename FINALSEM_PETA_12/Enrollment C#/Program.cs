///////////////////////////////////////////////////////////
//                                                       //
//         STUDENT ENROLLMENT PETA PROJECT (C#)          //
//                                                       //
//        created by Kean James Pepito (Ichimaki)        //
//                      (2024)                           //
//                                                       //
///////////////////////////////////////////////////////////


/// USES C#11+ WITH .NET 8
namespace Enrollment_C_;
class Program
{
    public const String
        GRADE = "GRADE_LEVEL",
        SECTION = "SECTION_ASSIGNED",
        DATE = "ENROLL_DATE";

    static void Main(String[] args) =>
        start();

    static void start()
    {
        Console.Clear();
        TextIO.Text_MainMenu();

        TextIO.MessageInput("input number: ", out string answer);

        if(!int.TryParse(answer, out int answer_int))
        {
            Console.WriteLine("Given input is not a number!");
            Thread.Sleep(2000);
            start();
        }

        switch(answer_int)
        {
            case 1: Enrollment();       break;
            case 2: CheckEnrolled();    break;
            case 3: RemoveEnrolled();   break;
            case 4: Environment.Exit(0);break;
            default:
                Console.WriteLine("Please select from the options");
                Thread.Sleep(1000);
                start();
                break;
        } 
    }

    static void Enrollment() 
    {
        Console.Clear();
        TextIO.MainTitle("ENROLL A STUDENT:\n");

        TextIO.MessageInput("NAME: ", out string st_name);
        TextIO.MessageInput("GRADE LEVEL (1-12): ", out string st_grade);
        TextIO.MessageInput("ASSIGN SECTION: ", out string st_section);

        int st_grade_int;

        while(true)
        {
            // name something
            if(String.IsNullOrEmpty(st_name))
            {
                Console.WriteLine("Name is empty!");
                Thread.Sleep(500);
                TextIO.ReMessageInput("RE-ENTER NAME: ", ref st_name);
                continue;
            }

            // number something
            if(!int.TryParse(st_grade, out st_grade_int))
            {
                Console.WriteLine("Given input is not a number!");
                Thread.Sleep(500);
                TextIO.ReMessageInput("RE-ENTER GRADE LEVEL (1-12):", ref st_grade);
                continue;
            }

            if(st_grade_int > 12 || st_grade_int is 0)
            {
                Console.WriteLine("Grade level should be 1 to 12");
                Thread.Sleep(500);
                TextIO.ReMessageInput("RE-ENTER GRADE LEVEL (1-12):", ref st_grade);
                continue;
            }

            // section something
            if(String.IsNullOrEmpty(st_section))
            {
                Console.WriteLine("Section is empty!");
                Thread.Sleep(500);
                TextIO.ReMessageInput("RE-ENTER SECTION: ", ref st_section);
                continue;
            }

            break;
        }

        // add
        new Student(st_name, st_grade_int, st_section).Add();
        Console.WriteLine("STUDENT ENROLLED!");
        Thread.Sleep(1000);
        start();
    }

    static void CheckEnrolled()
    {
        if(Student.TotalStudents() is 0)
        {
            Console.WriteLine("No enrolled student yet!");
            Thread.Sleep(2000);
            start();
        }

        Console.Clear();
        TextIO.MainTitle("CHECK ENROLLED STUDENT:\n");

        int studentNum_int, i = 1;
        foreach(var student in Student.Students)
            Console.WriteLine($"{i++}. {student.Key}");
        Console.WriteLine($"{i++}. go back to menu");

        while(true)
        {
            TextIO.MessageInput("Pick student number: ", out string studentNum);
            if(!int.TryParse(studentNum, out studentNum_int))
            {
                Console.WriteLine("input should be numeric!");
                Thread.Sleep(500);
                continue;
            }

            if(studentNum_int is 0 || studentNum_int > Student.TotalStudents()+1)
            {
                Console.WriteLine("Number doesn't exist in the selection!");
                Thread.Sleep(500);
                continue;
            }
            break;
        }
        if(studentNum_int.Equals(i)) start();
        TextIO.Text_StudentInfo(Student.Students.Keys.ElementAt(studentNum_int-1));
        Console.ReadKey();

        CheckEnrolled();
    }

    static void RemoveEnrolled()
    {
        if(Student.TotalStudents() is 0)
        {
            Console.WriteLine("No enrolled student yet!");
            Thread.Sleep(2000);
            start();
        }

        Console.Clear();
        TextIO.MainTitle("REMOVE ENROLLED STUDENTS:\n");

        string studentNum;
        int studentNum_int, i = 1;
        foreach(dynamic student in Student.Students)
            Console.WriteLine($"{i++}. {student.Key}");
        Console.WriteLine($"{i++}. go back to menu");

        while(true)
        {
            TextIO.MessageInput("Pick student number: ", out studentNum);
            if(!int.TryParse(studentNum, out studentNum_int))
            {
                Console.WriteLine("input should be numeric!");
                Thread.Sleep(500);
                continue;
            }

            if(studentNum_int is 0 || studentNum_int > Student.TotalStudents()+1)
            {
                Console.WriteLine("Number doesn't exist in the selection!");
                Thread.Sleep(500);
                continue;
            }
            break;
        }

        if(studentNum_int.Equals(i)) start();
        Student.Students.Remove(Student.Students.Keys.ElementAt(studentNum_int-1));
        Console.WriteLine("STUDENT REMOVED");
        Thread.Sleep(200);
        RemoveEnrolled();
    }
}
