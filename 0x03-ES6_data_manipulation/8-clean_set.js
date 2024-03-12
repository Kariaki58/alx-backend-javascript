export default function cleanSet (set, startString) {
  const resultArray = [];
  set.forEach(item => {
    if (item.startsWith(startString)) {
      resultArray.push(item.substring(startString.length));
    }
  });
  return resultArray.join('-');
}
