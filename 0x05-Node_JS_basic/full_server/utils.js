import { readFile } from 'fs'
import path from 'path'

const readDatabase = (filePath) => {
    try {
        const readFileFromDb = readFile(path.join(__dirname, '..', filePath), { encoding: 'utf-8' })
        console.log(readFileFromDb)

    } catch(err) {
        console.log("An error occured")
    }
}


readDatabase('database.csv')