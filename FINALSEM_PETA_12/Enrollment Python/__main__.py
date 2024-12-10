#########################################################
#                                                       #
#       STUDENT ENROLLMENT PETA PROJECT (PYTHON)        #
#                                                       #
#        created by Kean James Pepito (Ichimaki)        #
#                      (2024)                           #
#                                                       #
######################################################### PYTHON 3.10 ABOVE SUPPORT
from Students import Student
from TextOutputs import TextIO
from time import sleep
import sys

#constant values
GRADE = "GRADE_LEVEL"
SECTION = "SECTION_ASSIGNED"
DATE = "ENROLL_DATE"

# Main
def __init__():
    TextIO.clear()
    TextIO.Text_MainMenu()

    answer = input("input number: ")
    if not answer.isnumeric():
        print("Given input is not a number!")
        sleep(2)
        __init__()
    
    # only works on Python 3.10+
    if sys.version_info.minor > 10:
        match int(answer):
            case 1: Enrollment()
            case 2: CheckEnrolled()
            case 3: RemoveEnrolled()
            case 4: exit()
            case _:
                print("Please select from the options")
                sleep(1)
                __init__()

    answer = int(answer)
    if answer is 1: Enrollment()
    elif answer is 2: CheckEnrolled()
    elif answer is 3: RemoveEnrolled()
    elif answer is 4: exit()
    else:
        print("Please select from the options")
        sleep(1)
        __init__()

def Enrollment():
    TextIO.clear()
    TextIO.MainTitle("ENROLL A STUDENT:\n")
    st_name = input("NAME: ").strip()
    st_grade = input("GRADE LEVEL (1-12): ").strip()
    st_section = input("ASSIGN SECTION: ").strip()
    
    # check grade level
    while True:
        # empty name check
        if not st_name:
            print("Name is empty!")
            sleep(0.5)
            st_name = input("RE-ENTER NAME: ")
            continue
        # empty number check
        if not st_grade.isnumeric():
            print("Grade level should be numeric")
            sleep(0.5)
            st_grade = input("RE-ENTER GRADE LEVEL (1-12): ")
            continue
        st_grade_int = int(st_grade)
        if st_grade_int < 1 or st_grade_int > 12:
            print("Grade level should be 1 to 12")
            sleep(0.5)
            st_grade = input("RE-ENTER GRADE LEVEL (1-12): ")
            continue
        # empty section check
        if not st_section:
            print("Section is empty!")
            sleep(0.5)
            st_section = input("RE-ENTER SECTION: ")
            continue
        break
            
    # add student to hashmap
    Student(st_name, st_grade, st_section).Add()
    print("STUDENT ENROLLED!")
    sleep(1)
    __init__()

def CheckEnrolled():
    if Student.TotalStudents() is 0:
        print("No enrolled student yet!")
        sleep(2)
        __init__()
    TextIO.clear()
    TextIO.MainTitle("CHECK ENROLLED STUDENTS:\n")

    iterations = 0
    for student in Student.Students:
        print("{}. {}".format(iterations :=iterations+1, student))
    print("{}. go back to menu".format(iterations :=iterations+1))

    while True:
        studentNum = input("Pick student number: ")
        if studentNum.isnumeric() is False:
            print("input should be numeric!")
            sleep(0.5)
            continue
        studentNum = int(studentNum)
        if studentNum is 0 or studentNum > Student.TotalStudents()+1:
            print("Number doesn't exist in the selection!")
            sleep(0.5)
            continue
        break

    if studentNum is iterations:
        __init__()

    TextIO.Text_StudentInfo(list(Student.Students.keys())[studentNum-1])
    TextIO.wait()
    CheckEnrolled()

def RemoveEnrolled():
    if Student.TotalStudents() is 0:
        print("No enrolled student yet!")
        sleep(2)
        __init__()
    TextIO.clear()
    TextIO.MainTitle("REMOVE ENROLLED STUDENTS:\n")

    iterations = 0
    for student in Student.Students:
        print("{}. {}".format(iterations := iterations + 1, student))
    print("{}. go back to menu".format(iterations := iterations + 1))

    while True:
        studentNum = input("Pick student number: ")
        if studentNum.isnumeric() is False:
            print("input should be numeric!")
            sleep(0.5)
            continue
        studentNum = int(studentNum)
        if studentNum is 0 or studentNum > Student.TotalStudents()+1:
            print("Number doesn't exist in the selection!")
            sleep(0.5)
            continue
        break
    
    if studentNum is iterations:
        __init__()
    Student.Remove(list(Student.Students.keys())[studentNum-1])
    print("STUDENT REMOVED!")
    sleep(2)
    RemoveEnrolled()

__init__() # Invoke __init__ method idk, it should be auto but bruh