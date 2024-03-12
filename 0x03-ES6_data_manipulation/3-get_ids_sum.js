export default function getStudentIdsSum(Students) {
  return Students.reduce((other, item) => other + item.id, 0);
}
