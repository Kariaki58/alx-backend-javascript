export default function appendToEachArrayValue(array, appendString) {
  let newArray = [];
  for (const data of array) {
    newArray.push(appendString + data);
  }
  return newArray;
}
