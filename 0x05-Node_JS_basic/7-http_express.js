const express = require("express");
const fs = require('fs').promises;
const app = express()


async function countStudents(path) {
    try {
        const data = await fs.readFile(path, 'utf8');
        const lines = data.split('\n').filter(line => line !== '');
        if (lines.length === 0) {
            throw new Error('Cannot load the database');
        }
        const students = [];
        const fields = {};
        for (let i = 1; i < lines.length; i++) {
            if (lines[i]) {
                const [firstname, , , field] = lines[i].split(',');
                students.push({ firstname, field });

                if (!fields[field]) {
                    fields[field] = [];
                }
                fields[field].push(firstname);
            }
        }
        let responseText = "This is the list of our students\n"
        responseText += `Number of students: ${students.length}\n`;
        for (const [field, names] of Object.entries(fields)) {
            responseText += `Number of students in ${field}: ${names.length}. List: ${names.join(', ')}\n`;
        }
        return responseText;
    } catch (error) {
        throw new Error('Cannot load the database');
    }
}
const DATABASE = process.argv[2]

app.get("/", (request, response) => {
    response.send("Hello Holberton School!")
})

app.get("/students", async (request, response) => {
    const studentData = await countStudents(DATABASE);
    response.status(200).send(studentData)
})

app.listen(1245)

module.exports = app
