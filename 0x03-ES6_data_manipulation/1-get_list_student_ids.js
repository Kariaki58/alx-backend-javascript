export default function getListStudentIds (objList) {
  if (objList.constructor === Array) {
    return [];
  }
  return objList.map(item => {
    return item.id;
  });
}
