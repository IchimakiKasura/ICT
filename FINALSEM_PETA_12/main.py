#########################################################
#                                                       #
#       STUDENT ENROLLMENT PETA PROJECT (PYTHON)        #
#                                                       #
#        created by Kean James Pepito (Ichimaki)        #
#                      (2024)                           #
#                                                       #
######################################################### PYTHON 3.10 BELOW SUPPORT
from Students import Student
from TextOutputs import TextIO
from time import sleep

#constant values
GRADE = "GRADE_LEVEL"
SECTION = "SECTION_ASSIGNED"
DATE = "ENROLL_DATE"

def __init__():
    Student("sample", "0", "sample").Add()
    TextIO.clear()
    TextIO.Text_MainMenu()

    answer = input("input number: ")
    if not answer.isnumeric():
        print("Given input is not a number!")
        sleep(2)
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
    st_name = input("NAME: ")
    st_grade = input("GRADE LEVEL (1-12): ")
    st_section = input("ASSIGN SECTION: ")
    
    # check grade level
    while True:
        # name empty something
        if not st_name.strip():
            print("Name is empty!")
            sleep(0.5)
            st_name = input("RE-ENTER NAME: ")
            continue
        # number something
        if not st_grade.isnumeric():
            print("Grade level should be numeric")
            sleep(0.5)
            st_grade = input("RE-ENTER GRADE LEVEL (1-12): ")
            continue
        st_grade_int = int(st_grade)
        if st_grade_int > 12 or st_grade_int is 0:
            print("Grade level should be 1 to 12")
            sleep(0.5)
            st_grade = input("RE-ENTER GRADE LEVEL (1-12): ")
            continue
        # section empty something
        if not st_section.strip():
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
        iterations+=1   # it causes "(" is not closed?!?!?
        print("{}. {}".format(iterations, student))
    iterations+=1
    print("{}. go back to menu".format(iterations))

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

    TextIO.Text_StudentInfo(list(Student.Students.keys())[iterations-2])
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
        iterations+=1   # it causes "(" is not closed?!?!?
        print("{}. {}".format(iterations, student))
    iterations+=1
    print("{}. go back to menu".format(iterations))

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
    Student.Remove(list(Student.Students.keys())[iterations-2])
    print("STUDENT REMOVED!")
    sleep(2)
    RemoveEnrolled()
__init__()