# SUPPORTED FOR PYTHON 3.10+ cuz of the "match" keyword
import os
import msvcrt # since nasa windows naman tayo at hindi linux-based os 🥰
import datetime
from time import sleep

# hashmap or what u call "Dictionary"
#
# template:
#   "student_name":
#   {
#       "GRADE_LEVEL": 0
#       "SECTION_ASSIGNED": na
#       "ENROLL_DATE": <- auto generated
#   },
students = {
    "sample":
    {
        "GRADE_LEVEL": 0,
        "SECTION_ASSIGNED": "lmao",
        "ENROLL_DATE": "lmao"
    }
}

# cross-platform console clear cuz I work using bash, so "cls" does not work on me
# cuz it only works on CMD or windows machines, though I use windows, kinda ironic lmao
def clearConsole():
    if os.name=='ce' or 'nt' or 'dos': os.system("cls") # windows/mac/etc
    elif os.name=='posix': os.system("clear") #Linux based system
    else: print('\n'*120)

def start():
    clearConsole()
    print("""
    STUDENT ENROLLMENT APPLICATION

    1. Enroll Student
    2. Check Enrolled
    3. Remove Student
    4. quit
    """)

    answer = input("input number: ")

    # check if its numeric
    if answer.isnumeric():
        answer = int(answer)
    else: 
        print("Given input is not a number!")
        sleep(2)
        start()

    match answer:
        case 1:
            Enrollment()
        case 2:
            CheckEnrolled()
        case 3:
            RemoveEnrolled()
        case 4:
            exit()



def Enrollment():
    clearConsole()
    print("""
    STUDENT ENROLLMENT APPLICATION

ENROLL A STUDENT:
    """)
    st_name = input("NAME: ")
    st_grade = input("GRADE LEVEL (1-12): ")
    st_section = input("ASSIGN SECTION: ")
    
    # check grade level
    while True:
        if st_grade.isnumeric() == False:
            print("Grade level should be numeric")
            sleep(0.5)
            st_grade = input("RE-ENTER GRADE LEVEL (1-12): ")
            continue

        st_grade = int(st_grade)

        if st_grade > 12 or st_grade == 0:
            print("Grade level should be 1 to 12")
            sleep(0.5)
            st_grade = input("RE-ENTER GRADE LEVEL (1-12): ")
            continue

        break
            
    # add student to hashmap
    students[st_name] = {
        "GRADE_LEVEL": st_grade,
        "SECTION_ASSIGNED": st_section,
        "ENROLL_DATE": datetime.date.today().year
    }
    print("STUDENT ENROLLED!")
    sleep(1)
    start()



def CheckEnrolled():
    if students.__len__()==0:
        print("No enrolled student yet!")
        sleep(2)
        start()
    
    clearConsole()
    print("""
    STUDENT ENROLLMENT APPLICATION

CHECK ENROLLED STUDENTS
    """)

    iterations = 0
    keys = []
    for student in students:
        iterations=iterations+1
        print("{}. {}".format(iterations,student))
        keys.append(student)

    # believe me, it is very weird its not updating when I just directly
    # put Iteration+1 on the for loop
    iterations=iterations+1
    print("{}. go back to menu".format(iterations))

    studentNum = input("Pick student number: ")

    if studentNum.isnumeric() == False and studentNum < students.__len__():
        print("Number doesn't exist in the selection!")
        sleep(2)
        CheckEnrolled()

    studentNum = int(studentNum)

    if studentNum == iterations:
        start()
    else:
        print("""
    STUDENT NAME: {}
    GRADE LEVEL: {}
    SECTION ASSIGNED: {}
    DATE ENROLLED: {}
              
press any key to continue...""".format(
            keys[studentNum-1],
            students[keys[studentNum-1]]["GRADE_LEVEL"],
            students[keys[studentNum-1]]["SECTION_ASSIGNED"],
            students[keys[studentNum-1]]["ENROLL_DATE"],
        ))

        msvcrt.getch()
        CheckEnrolled()



def RemoveEnrolled():
    clearConsole()
    print("""
    STUDENT ENROLLMENT APPLICATION

CHECK ENROLLED STUDENTS
    """)

    iterations = 0
    keys = []
    for student in students:
        iterations=iterations+1
        print("{}. {}".format(iterations,student))
        keys.append(student)

    iterations=iterations+1
    print("{}. go back to menu".format(iterations))

    studentNum = input("Pick student number: ")

    if studentNum.isnumeric() == False and studentNum < students.__len__():
        print("Number doesn't exist in the selection!")
        sleep(2)
        RemoveEnrolled()

    studentNum = int(studentNum)
    

start()