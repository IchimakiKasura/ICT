class Student:
    Students = {}
    def __init__(self, Name, Section, Grade):
        self.Name = Name
        self.Section = Section
        self.Grade = Grade
    def Add(self):
        import datetime, __main__ 
        self.Students[self.Name] = {
            __main__.GRADE: self.Grade,
            __main__.SECTION: self.Section,
            __main__.DATE: datetime.date.today().year
        }
    @staticmethod
    def Remove(key): del Student.Student[key]
    @staticmethod
    def TotalStudents(): return Student.Students.__len__()