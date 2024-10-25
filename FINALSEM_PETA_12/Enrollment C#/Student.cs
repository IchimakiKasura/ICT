namespace Enrollment_C_;

public class Student(string Name, int Grade, string Section)
{
    public static readonly Dictionary<string, Dictionary<string, object>> Students = [];
    public string Name = Name, Section = Section;
    public int Grade = Grade;

    public void Add()
    {
        Students.Add(Name, new(){
            {glbStr.GRADE, Grade},
            {glbStr.SECTION, Grade},
            {glbStr.DATE, DateTime.Now.Year}
        });
    }
    public static void Remove(string key) =>
        Students.Remove(key);
    public static int TotalStudents()
        => Students.Count;
}