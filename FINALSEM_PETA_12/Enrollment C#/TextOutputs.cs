namespace Enrollment_C_;
#nullable disable
public sealed class TextOutputs {

    public static void main() => Console.WriteLine($"""
    
    STUDENT ENROLLMENT APPLICATION (C#)

    Curent Students Enrolled: {Student.TotalStudents()}

""");
    
    // Main Menu
    public static void Text_MainMenu()
    {
        main();
        Console.WriteLine("""
    1. Enroll Student
    2. Check Enrolled
    3. Remove Student
    4. quit

""");
    }

    // Enroll Menu
    public static void Text_EnrollMenu()
    {
        main();
        Console.WriteLine("ENROLL A STUDENT:\n");
    }

    // Check Enroll Menu
    public static void Text_CheckMenu()
    {
        main();
        Console.WriteLine("CHECK ENROLLED STUDENT:\n");
    }

    // Remove Student Menu
    public static void Text_RemoveMenu()
    {
        main();
        Console.WriteLine("ENROLL A STUDENT:\n");
    }

    // Student Info
    public static void Text_StudentInfo(String student)
    {
        var data = Student.Students[student];
        Console.WriteLine($"""
        
    STUDENT NAME    :   {student}
    GRADE LEVEL     :   {data[glbStr.GRADE]}
    SECTION ASSIGNED:   {data[glbStr.SECTION]}
    DATE ENROLLED   :   {data[glbStr.DATE]}

    press any key to continue...
""");
    }

    //dunno
    public static void MessageInput(string Message, out string output)
    {
        Console.Write(Message);
        output = Console.ReadLine();
    }
    public static void ReMessageInput(string Message, ref string output)
    {
        Console.Write(Message);
        output = Console.ReadLine();
    }
}