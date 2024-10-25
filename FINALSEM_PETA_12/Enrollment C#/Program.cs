///////////////////////////////////////////////////////////
//                                                       //
//         STUDENT ENROLLMENT PETA PROJECT (C#)          //
//                                                       //
//        created by Kean James Pepito (Ichimaki)        //
//                      (2024)                           //
//                                                       //
///////////////////////////////////////////////////////////

/// USES C#11+ WITH .NET 8

#nullable disable
namespace Enrollment_C_;

class Program
{
    static void Main(String[] args)
    {
        start();
        Console.WriteLine(Student.Students.Count);
    }

    static void start()
    {
        Console.Clear();
        TextOutputs.Text_MainMenu();

        Console.Write("input number: ");
        string answer = Console.ReadLine();

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
        TextOutputs.Text_EnrollMenu();

        TextOutputs.MessageInput("NAME: ", out string st_name);
        TextOutputs.MessageInput("GRADE LEVEL (1-12): ", out string st_grade);
        TextOutputs.MessageInput("ASSIGN SECTION: ", out string st_section);

        int st_grade_int;

        while(true)
        {
            // name something
            if(String.IsNullOrEmpty(st_name.Trim()))
            {
                Console.WriteLine("Name is empty!");
                Thread.Sleep(500);
                TextOutputs.ReMessageInput("RE-ENTER NAME: ", ref st_name);
                continue;
            }

            // number somethinf
            if(!int.TryParse(st_grade, out st_grade_int))
            {
                Console.WriteLine("Given input is not a number!");
                Thread.Sleep(500);
                TextOutputs.ReMessageInput("RE-ENTER GRADE LEVEL (1-12):", ref st_grade);
                continue;
            }

            if(st_grade_int > 12 || st_grade_int is 0)
            {
                Console.WriteLine("Grade level should be 1 to 12");
                Thread.Sleep(500);
                TextOutputs.ReMessageInput("RE-ENTER GRADE LEVEL (1-12):", ref st_grade);
                continue;
            }

            // section something
            if(String.IsNullOrEmpty(st_section.Trim()))
            {
                Console.WriteLine("Section is empty!");
                Thread.Sleep(500);
                TextOutputs.ReMessageInput("RE-ENTER SECTION: ", ref st_section);
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
        TextOutputs.Text_CheckMenu();

        string studentNum;
        int studentNum_int, i = 1;
        foreach(dynamic student in Student.Students)
            Console.WriteLine($"{i++}. {student.Key}");
        Console.WriteLine($"{i++}. go back to menu");

        while(true)
        {
            TextOutputs.MessageInput("Pick student number: ", out studentNum);
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
        TextOutputs.Text_StudentInfo(Student.Students.Keys.ElementAt(studentNum_int-1));
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
        TextOutputs.Text_RemoveMenu();

        string studentNum;
        int studentNum_int, i = 1;
        foreach(dynamic student in Student.Students)
            Console.WriteLine($"{i++}. {student.Key}");
        Console.WriteLine($"{i++}. go back to menu");

        while(true)
        {
            TextOutputs.MessageInput("Pick student number: ", out studentNum);
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
