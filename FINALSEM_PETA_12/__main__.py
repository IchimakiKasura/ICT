#########################################################
#                                                       #
#       STUDENT ENROLLMENT PETA PROJECT (PYTHON)        #
#                                                       #
#        created by Kean James Pepito (Ichimaki)        #
#                      (2024)                           #
#                                                       #
#########################################################

# Preferred to be run on windows CMD to avoid weird bugs lmao

import os
import msvcrt # since were on windows not on Linux-based os 🥰
import datetime
from time import sleep

# Student class
class Student:
    students = {
        # "sample":
        # {
        #     "GRADE_LEVEL": 0,
        #     "SECTION_ASSIGNED": "lmao",
        #     "ENROLL_DATE": 2024
        # }
    }

    def __init__(self, name, grade=None, section=None):
        self.name = name
        self.grade = grade
        self.section = section

    def add(self):
        Student.students[self.name] = {
            "GRADE_LEVEL": self.grade,
            "SECTION_ASSIGNED": self.section,
            "ENROLL_DATE": datetime.date.today().year
        }

    def remove(self):
        del Student.students[self.name]

    def totalStudent():
        return Student.students.__len__()
    
# cross-platform console clear cuz I work using bash, so "cls" does not work on me
# cuz it only works on CMD or windows machines, though I use windows, kinda ironic lmao
def clearConsole():
    if os.name=='ce' or 'nt' or 'dos': os.system("cls") # windows/mac/etc
    elif os.name=='posix': os.system("clear") #Linux based system
    else: print('\n'*120)


def __init__():
    clearConsole()
    print(f"""
    STUDENT ENROLLMENT APPLICATION (PYTHON)

    Current Students Enrolled: {Student.totalStudent()}
          
    1. Enroll Student
    2. Check Enrolled
    3. Remove Student
    4. quit
    """)

    answer = input("input number: ")

    # check if its numeric
    if not answer.isnumeric():
        print("Given input is not a number!")
        sleep(2)
        __init__()

    # only works on Python 3.10+
    match int(answer):
        case 1:
            Enrollment()
        case 2:
            CheckEnrolled()
        case 3:
            RemoveEnrolled()
        case 4:
            exit()
        case _:
            print("Please select from the options")
            sleep(1)
            __init__()

    # uncomment below and comment above if lower than python 3.10
    # answer = int(answer)
    # if answer == 1: Enrollment()
    # elif answer == 2: CheckEnrolled()
    # elif answer == 3: RemoveEnrolled()
    # elif answer == 4: exit()
    # else:
    #     print("Please select from the options")
    #     sleep(1)
    #     __init__()


def Enrollment():
    clearConsole()
    print(f"""
    STUDENT ENROLLMENT APPLICATION (PYTHON)

    Current Students Enrolled: {Student.totalStudent()}
          
ENROLL A STUDENT:
    """)
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

        # numer something
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
    Student(st_name, st_grade, st_section).add()
    print("STUDENT ENROLLED!")
    sleep(1)
    __init__()


def CheckEnrolled():
    if Student.students.__len__() is 0:
        print("No enrolled student yet!")
        sleep(2)
        __init__()
    
    clearConsole()
    print(f"""
    STUDENT ENROLLMENT APPLICATION (PYTHON)

    Current Students Enrolled: {Student.totalStudent()}
          
CHECK ENROLLED STUDENTS:
    """)

    iterations = 0
    keys = []
    for student in Student.students:
        iterations+=1
        print("{}. {}".format(iterations,student))
        keys.append(student)

    iterations+=1
    print("{}. go back to menu".format(iterations))

    while True:
        studentNum = input("Pick student number: ")
        if studentNum.isnumeric() == False:
            print("input should be numeric!")
            sleep(0.5)
            continue

        studentNum = int(studentNum)

        if studentNum is 0 or studentNum > Student.totalStudent()+1:
            print("Number doesn't exist in the selection!")
            sleep(0.5)
            continue

        break
        
    if studentNum is iterations:
        __init__()

    print("""
    STUDENT NAME:       {}
    GRADE LEVEL:        {}
    SECTION ASSIGNED:   {}
    DATE ENROLLED:      {}
              
press any key to continue...""".format(
            keys[studentNum-1],
            Student.students[keys[studentNum-1]]["GRADE_LEVEL"],
            Student.students[keys[studentNum-1]]["SECTION_ASSIGNED"],
            Student.students[keys[studentNum-1]]["ENROLL_DATE"],
        ))

    msvcrt.getch()
    CheckEnrolled()


def RemoveEnrolled():
    if Student.totalStudent() is 0:
        print("No enrolled student yet!")
        sleep(2)
        __init__()
    clearConsole()
    print(f"""
    STUDENT ENROLLMENT APPLICATION (PYTHON)

    Current Students Enrolled: {Student.totalStudent()}
          
REMOVE ENROLLED STUDENTS:
    """)

    iterations = 0
    keys = []
    for student in Student.students:
        iterations+=1
        print("{}. {}".format(iterations,student))
        keys.append(student)

    iterations+=1
    print("{}. go back to menu".format(iterations))

    while True:
        studentNum = input("Pick student number: ")
        if studentNum.isnumeric() == False:
            print("input should be numeric!")
            sleep(0.5)
            continue

        studentNum = int(studentNum)

        if studentNum is 0 or studentNum > Student.totalStudent()+1:
            print("Number doesn't exist in the selection!")
            sleep(0.5)
            continue

        break
    
    if studentNum is iterations:
        __init__()
    
    Student(keys[studentNum-1]).remove()
    print("STUDENT REMOVED!")
    sleep(2)
    RemoveEnrolled()

__init__()