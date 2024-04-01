interface Teacher {
    firstName: string
    lastName: string
    fullTimeEmployee: boolean
    yearsOfExperience?: number
    location: string
    contract?: any
}

const teacher3: Teacher = {
    firstName: 'John',
    fullTimeEmployee: false,
    lastName: 'Doe',
    location: 'London',
    contract: false,
  };
  
interface Directors extends Teacher {
    numberOfReports: number
}

const director1: Directors = {
    firstName: 'John',
    lastName: 'Doe',
    location: 'London',
    fullTimeEmployee: true,
    numberOfReports: 17,
  };

interface printTEacherFunction {
    (firstName: string, lastName: string): string
}

const printTeacher: printTEacherFunction = (firstName: string, lastName: string): string => {
    return firstName[0] + '.' + ' ' + lastName
}

interface StudentInterface {
    firstName: string
    lastName: string
    workOnHomework(): string
    displayName(): string

}
class StudentClass implements StudentInterface {
    firstName: string;
    lastName: string;

    constructor(firstName: string, lastName: string) {
        this.firstName = firstName
        this.lastName = lastName
    }
    workOnHomework(): string {
        return "Currently working"
    }
    displayName(): string {
        return `${this.firstName}`
    }
}

