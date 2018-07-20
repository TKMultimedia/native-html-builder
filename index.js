import { findAllClassNamePositions } from './css/classname';

const getAllClassNameOfHtmlBlock = (htmlBlockAsString) => {
  const positions = findAllClassNamePositions(htmlBlockAsString);
  return positions;
};

export { getAllClassNameOfHtmlBlock };
