const http = require('http')
const fs = require('fs').promises;

async function countStudents(path) {
    try {
        const data = await fs.readFile(path, 'utf8');
        const lines = data.split('\n').filter(line => line.trim() !== '');
        if (lines.length <= 1) {
            return 'No students found in the database.';
        }
        const students = [];
        const fields = {};
        for (let i = 1; i < lines.length; i++) {
            const parts = lines[i].split(',');
            if (parts.length < 4) continue;
            const [firstname, , , field] = parts.map(part => part.trim());
            students.push({ firstname, field });
            fields[field] = fields[field] || [];
            fields[field].push(firstname);
        }
        let responseText = "This is the list of our students\n";
        responseText += `Number of students: ${students.length}\n`;
        for (const [field, names] of Object.entries(fields)) {
            responseText += `Number of students in ${field}: ${names.length}. List: ${names.join(', ')}\n`;
        }
        return responseText;
    } catch (error) {
        throw new Error('Cannot load the database');  // Rethrow to differentiate file reading errors from empty data
    }
}

const DATABASE = process.argv[2];
const server = http.createServer(async (request, response) => {
    if (request.url === '/') {
        response.writeHead(200, { 'Content-Type': 'text/plain' });
        response.end("Hello Holberton School!");
    } else if (request.url === '/students') {
        try {
            const studentData = await countStudents(DATABASE);
            response.writeHead(200, { 'Content-Type': 'text/plain' });
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
