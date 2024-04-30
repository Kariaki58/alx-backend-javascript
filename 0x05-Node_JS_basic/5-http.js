const http = require('http')
const fs = require('fs').promises;


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
const server = http.createServer(async (request, response) => {
    response.writeHead(200, { 'Content-Type': 'text/plain' });
    if (request.url === '/') {
        response.end("Hello Holberton School!");
    } else if (request.url === '/students') {
        try {
            const studentData = await countStudents(DATABASE);
            response.end(studentData);
        } catch (error) {
            response.writeHead(500, { 'Content-Type': 'text/plain' });
            response.end(error.message);
        }
    } else {
        response.writeHead(404, { 'Content-Type': 'text/plain' });
        response.end("Resource not found");
    }
});

const PORT = 1245;
server.listen(PORT);

module.exports = server;
