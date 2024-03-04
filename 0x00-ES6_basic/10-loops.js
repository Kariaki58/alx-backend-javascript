export default function appendToEachArrayValue (array, appendString) {
  for (const data of array) {
    array[array.indexOf(data)] = `${appendString}${data}`;
  }

  return array;
}
