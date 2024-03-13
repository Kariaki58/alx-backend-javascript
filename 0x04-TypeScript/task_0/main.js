var student1 = {
    firstName: "John",
    lastName: "Doe",
    age: 20,
    location: "New York"
};
var student2 = {
    firstName: "Jane",
    lastName: "Smith",
    age: 22,
    location: "Los Angeles"
};
var studentsList = [student1, student2];
function renderTable() {
    var table = document.createElement('table');
    var tableBody = document.createElement('tbody');
    studentsList.forEach(function (student) {
        var row = tableBody.insertRow();
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        cell1.textContent = student.firstName;
        cell2.textContent = student.location;
    });
    table.appendChild(tableBody);
    document.body.appendChild(table);
}
renderTable();
