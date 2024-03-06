export default function createIteratorObject(report) {
  const array = [];
  const newArray = [];

  for (const data of Object.keys(report)) {
    array.push(...Object.values(report[data]));
  }
  for (const s of array) {
    newArray.push(...s);
  }
  return newArray;
}
