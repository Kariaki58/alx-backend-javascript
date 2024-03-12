export default function cleanSet (set, startString) {
  const resultArray = [];
  set.forEach(item => {
    if (item.startsWith(startString) && startString !== '') {
      resultArray.push(item.substring(startString.length));
    } else {
      return ''
    }
  });
  return resultArray.join('-');
}
