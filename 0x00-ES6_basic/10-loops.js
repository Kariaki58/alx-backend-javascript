export default function appendToEachArrayValue(array, appendString) {
  const newArray = [];
  for (const data of array) {
    newArray.push(appendString + data);
  }
  
  return newArray;
}
