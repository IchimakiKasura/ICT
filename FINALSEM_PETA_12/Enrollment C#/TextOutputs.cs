namespace Enrollment_C_;
using static Program;

public sealed class TextIO {

    public static void MainTitle(string extraMessage) => Console.WriteLine($"""
    
    STUDENT ENROLLMENT APPLICATION (C#)

    Curent Students Enrolled: {Student.TotalStudents()}

{extraMessage}
""");
    
    // Main Menu
    public static void Text_MainMenu() =>
        MainTitle("""
    1. Enroll Student
    2. Check Enrolled
    3. Remove Student
    4. quit

""");

    // Student Info
    public static void Text_StudentInfo(string student)
    {
        var data = Student.Students[student];
        Console.WriteLine($"""
        
    STUDENT NAME    :   {student}
    GRADE LEVEL     :   {data[GRADE]}
    SECTION ASSIGNED:   {data[SECTION]}
    DATE ENROLLED   :   {data[DATE]}

    press any key to continue...
""");
    }

    //dunno
    public static void MessageInput(string Message, out string output)
    {
        Console.Write(Message);
        output = Console.ReadLine().Trim();
    }
    public static void ReMessageInput(string Message, ref string output)
    {
        Console.Write(Message);
        output = Console.ReadLine().Trim();
    }
}