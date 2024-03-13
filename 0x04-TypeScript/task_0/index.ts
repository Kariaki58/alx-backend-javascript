let company: string = 'Travery Media'
let isPublished: boolean = true
let x: any = 'Hello'


let ids: number[] = [1, 2, 3, 4, 5]
let arr: any[] = [1, true, "Hello"]

// Tuple
let person: [number, string, boolean]

person = [1, 'Brad', true]

//Tuple Array
let employee: [number, string][]

employee = [
    [1, 'Brad'],
    [2, 'John'],
    [3, 'Jill'],
]

//Union
let pid: string | number = 22

pid = '22'

// enum
enum Direction1 {
    Up = 'Up',
    Down = 'Down',
    Left = 'Left',
    Right = 'Right',
}

// objects

type User = {
    id: number,
    name: string
}

const user: User = {
    id: 1,
    name: 'John'
}

// Type Assertion

let cid: any = 1
let customerId = <number>cid
// let customerId = cid as number

// Functions
function addNumber(x: number, y: number): number {
    return x + y
}

function log(message: string | number): void {
    console.log(message)
}


log('Hello')
log(20)

console.log(addNumber(1, 2))

// Interfaces

interface UserInterface {
    id: number
    name: string
    age?: number //optionaly
}

const userI: UserInterface = {
    id: 1,
    name: 'John',
}

interface MathFunc {
    (x: number, y: number): number
}

const add: MathFunc = (x: number, y: number): number => x + y

// Classes
class Person {
    private id: number
    name: string

    constructor(id: number, name: string) {
        this.id = id
        this.name = name
    }
    register() {
        return `${this.name} is now registred`
    }
}

const brad = new Person(1, 'Brad Traversye')
const mike = new Person(2, 'Mike Jordan')

// subclasses
class Employee extends Person {
    position: string

    constructor(id: number, name: string, position: string) {
        super(id, name)
        this.position = position
    }   
}

const emp = new Employee(3, 'Shawn', 'Developer')

console.log(emp.register())

// Generics

function getArray<T>(items: T[]): T[] {
    return new Array().concat(items)
} 

let numArray = getArray<number>([1, 2, 3, 4])
let strArray = getArray<string>(['brad', 'John', 'Jill', 'Person'])


numArray.push(5)
