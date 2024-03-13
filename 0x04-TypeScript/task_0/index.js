var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var company = 'Travery Media';
var isPublished = true;
var x = 'Hello';
var ids = [1, 2, 3, 4, 5];
var arr = [1, true, "Hello"];
// Tuple
var person;
person = [1, 'Brad', true];
//Tuple Array
var employee;
employee = [
    [1, 'Brad'],
    [2, 'John'],
    [3, 'Jill'],
];
//Union
var pid = 22;
pid = '22';
// enum
var Direction1;
(function (Direction1) {
    Direction1["Up"] = "Up";
    Direction1["Down"] = "Down";
    Direction1["Left"] = "Left";
    Direction1["Right"] = "Right";
})(Direction1 || (Direction1 = {}));
var user = {
    id: 1,
    name: 'John'
};
// Type Assertion
var cid = 1;
var customerId = cid;
// let customerId = cid as number
// Functions
function addNumber(x, y) {
    return x + y;
}
function log(message) {
    console.log(message);
}
log('Hello');
log(20);
console.log(addNumber(1, 2));
var userI = {
    id: 1,
    name: 'John',
};
var add = function (x, y) { return x + y; };
// Classes
var Person = /** @class */ (function () {
    function Person(id, name) {
        this.id = id;
        this.name = name;
    }
    Person.prototype.register = function () {
        return "".concat(this.name, " is now registred");
    };
    return Person;
}());
var brad = new Person(1, 'Brad Traversye');
var mike = new Person(2, 'Mike Jordan');
// subclasses
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee(id, name, position) {
        var _this = _super.call(this, id, name) || this;
        _this.position = position;
        return _this;
    }
    return Employee;
}(Person));
var emp = new Employee(3, 'Shawn', 'Developer');
console.log(emp.register());
// Generics
function getArray(items) {
    return new Array().concat(items);
}
var numArray = getArray([1, 2, 3, 4]);
var strArray = getArray(['brad', 'John', 'Jill', 'Person']);
numArray.push(5);
