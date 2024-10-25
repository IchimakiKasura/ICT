import java.time.Year;
import java.util.HashMap;

public class Student {

    public static HashMap<String, HashMap<String, Object>> Students = 
        new HashMap<String, HashMap<String, Object>>();

    public String Name, Section;
    public int Grade;

    public Student(String Name, int Grade, String Section)
    {
        this.Name = Name;
        this.Grade = Grade;
        this.Section = Section;
    }

    public void Add()
    {
        HashMap<String, Object> StudentValue = new HashMap<String, Object>();
        StudentValue.put(Main.GRADE, Grade);
        StudentValue.put(Main.SECTI0N, Section);
        StudentValue.put(Main.DATE, Year.now());

        Students.put(Name, StudentValue);
    }

    public static void Remove(String key) {
        Students.remove(key);
    }

    public static int TotalStudents() {
        return Students.size();
    }

}