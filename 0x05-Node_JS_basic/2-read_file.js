const fs = require('fs');
const path = require('path');

const countStudents = (database) => {
    try {
        const fileContent = fs.readFileSync(path.join(__dirname, database), 'utf8');
        if (!fileContent) {
            console.log('Cannot load the database')
            return;
        }
        const lines = fileContent.trim().split('\n');
        const objects = [];
        const headers = lines[0].split(',');

        for (let i = 1; i < lines.length; i++) {
            const data = lines[i].split(',');
            const obj = headers.reduce((acc, header, index) => {
                acc[header] = data[index];
                return acc;
            }, {});
            objects.push(obj);
        }
        console.log(`Number of students: ${objects.length}`)
        let CS = 0
        let SWE = 0
        const listOfCS = []
        const listOfSWE = []
        objects.forEach((data) => {
            if (data.field.includes('CS')) {
                CS += 1
                listOfCS.push(data.firstname)
            } else {
                SWE =+ 1
                listOfSWE.push(data.firstname)
            }
        })
        console.log(
            `Number of students in CS: ${CS}. List: ${listOfCS.join(' ')}`
        )
        console.log(
            `Number of students in SWE: ${SWE}. List: ${listOfSWE.join(' ')}`
        )
    } catch(err) {
        throw new Error("Cannot load the database")
    }
}

module.exports = countStudents
