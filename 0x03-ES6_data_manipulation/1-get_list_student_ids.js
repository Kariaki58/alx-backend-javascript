export default function getListStudentIds (objList) {
  if (typeof objList !== 'object') {
    return [];
  }
  return objList.map(item => {
    return item.id;
  });
}
