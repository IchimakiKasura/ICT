import sys, subprocess
from Students import Student

os = sys.platform
class TextIO:

    @staticmethod
    def clear():
        if os == 'win32': subprocess.run('cls', shell=True)
        elif os == 'linux' or os == 'darwin': subprocess.run('clear', shell=True)
    @staticmethod
    def wait():
        if os == 'win32': subprocess.run('pause>nul', shell=True)
        elif os == 'linux' or os == 'darwin': subprocess.run('read', shell=True)

    @staticmethod
    def MainTitle(extraMessage):
        print(f"""
    STUDENT ENROLLMENT APPLICATION (PYTHON)

    Curent Students Enrolled: {Student.TotalStudents()}

{extraMessage}""")

    @staticmethod
    def Text_MainMenu():
        TextIO.MainTitle("""    1. Enroll Student
    2. Check Enrolled
    3. Remove Student
    4. quit
""")

    @staticmethod
    def Text_StudentInfo(student):
        import __main__
        data = Student.Students[student]
        print(f"""
    STUDENT NAME    :   {student}
    GRADE LEVEL     :   {data[__main__.GRADE]}
    SECTION ASSIGNED:   {data[__main__.SECTION]}
    DATE ENROLLED   :   {data[__main__.DATE]}

press any key to continue...""")