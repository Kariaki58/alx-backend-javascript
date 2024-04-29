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

        console.log(`Number of students: ${students.length}`);
        for (const [field, names] of Object.entries(fields)) {
            console.log(`Number of students in ${field}: ${names.length}. List: ${names.join(', ')}`);
        }
    } catch (error) {
        throw new Error('Cannot load the database');
    }
}

module.exports = countStudents;
