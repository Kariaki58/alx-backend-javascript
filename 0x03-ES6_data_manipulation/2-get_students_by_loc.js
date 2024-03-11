export default function getStudentsByLocation(Students, city){
    return Students.filter(data => data.location === city)
}