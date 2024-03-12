export default function cleanSet(theSet, startString) {
  if (!startString || !startString.length || typeof startString !== 'string') return '';
  let empty = '';
  theSet.forEach((item) => {
    if (item && item.startsWith(startString)) {
      empty += `${item.slice(startString.length)}-`;
    }
  });
  const content = empty.slice(0, empty.length - 1);
  return content;
}
