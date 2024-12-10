#include <unordered_map>
#include <string>
#include <chrono>
#include <ctime>
#include <format>

using namespace std;

struct studentInfo
{
    string key;
    string value;
};

class Student
{
    string _Name, _Section, _Grade;
    public:
        static unordered_map<string, studentInfo[3]> Students;

        Student(string Name, string Section, string Grade)
        {
            _Name = Name;
            _Section = Section;
            _Grade = Grade;
        }

        void add()
        {
            time_t now = time(0);
            tm *ltm = localtime(&now);

            Students[_Name][0] = { "GRADE_LEVEL", _Grade };
            Students[_Name][1] = { "SECTION_ASSIGNED", _Section };
            Students[_Name][2] = { "ENROLL_DATE", to_string(1900+ltm->tm_year) };
        }

        static void remove(string key)
        {
            Students.erase(key);
        }

        static int TotalStudents()
        {
            return Students.size();
        }
};