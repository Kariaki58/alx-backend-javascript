interface DirectorInterface {
    workFromHome(): string
    getCoffeeBreak(): string
    workDirectorTasks(): string
}

interface TeacherInterface {
    workFromHome(): string
    getCoffeeBreak(): string
    workTeacherTasks(): string
}

interface Director {
    workFromHome(): string
    getCoffeeBreak(): string
    workTeacherTasks(): string
}

class Director implements Director {
    workFromHome(): string {
      return "Working from home";
    }
  
    getToWork(): string {
      return "Getting a coffee break";
    }
  
    workDirectorTasks(): string {
      return "Getting to director tasks";
    }
}

class Teacher implements TeacherInterface {
    workFromHome(): string {
        return "Cannot work from home"
    }
    getCoffeeBreak(): string {
        return "Cannot have a break"
    }
    workTeacherTasks(): string {
        return "Getting to work"
    }
}

function createEmployee(salary: number | string): Director | Teacher {
    if (typeof salary === "number" && salary < 500) {
        const teacher = new Teacher()
        return teacher
    }
    const director = new Director()
    return director
}


function isDirector(employee: Teacher | Director): employee is Director{
    return "workDirectorTasks" in employee
}

function executeWork(employee: Teacher | Director): void {
    if (isDirector(employee)) {
        console.log(employee.workDirectorTasks());
    } else {
        console.log((employee as Teacher).workTeacherTasks())
    }
}

type Subjects = 'Math' | 'History';

function teachClass(todayClass: Subjects): string {
    return `Teaching ${todayClass}`
}