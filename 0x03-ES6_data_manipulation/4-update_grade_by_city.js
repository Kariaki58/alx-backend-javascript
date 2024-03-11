export default function updateStudentGradeByCity(Students, city, newGrades){
    const newArray = Students.filter(item => item.location === city)
    .map((item, index) => {
        let grade = "N/A"
        newGrades.forEach((data, index) => {
            if(data.studentId === item.id) {
                grade = data.grade
            }
        })
        // if (newGrades[index]) {
        //     grades = newGrades[index].studentId === item.id? 
        //      newGrades[index].grade
        // }
        return {...item, grade}
    })
    
    return newArray
}