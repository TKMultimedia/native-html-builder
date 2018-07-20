const getIndicesOf = (subString, mainString, caseSensitive = false) => {
  let searchStr = subString;
  let str = mainString;
  const searchStrLen = searchStr.length;
  if (searchStrLen === 0) {
    return [];
  }
  let startIndex = 0;
  let index;
  const indices = [];
  if (!caseSensitive) {
    str = str.toLowerCase();
    searchStr = searchStr.toLowerCase();
  }
  index = str.indexOf(searchStr, startIndex);
  while (index > -1) {
    indices.push(index);
    startIndex = index + searchStrLen;
    index = str.indexOf(searchStr, startIndex);
  }
  return indices;
};

const getAllStringParametersOfProperty = (originString, propertyName, endLetter = '"') => {
  const indexs = getIndicesOf(propertyName, originString);
  const result = [];
  indexs.forEach(index => {
    result.push(getParameterValue(originString, propertyName.length + index + 2, endLetter));
  });
  return result;
};

const getParameterValue = (originString, startIndex, endLetter) => {
  const endPos = originString.indexOf(endLetter, startIndex);
  return originString.substring(startIndex, endPos);
};

export { getAllStringParametersOfProperty };
