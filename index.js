import { findAllClassNamePositions } from './css/classname';
import { headerBuilder } from './html/html_builder';

const getAllClassNameOfHtmlBlock = (htmlBlockAsString) => {
  const positions = findAllClassNamePositions(htmlBlockAsString);
  return positions;
};

const buildTheHeader = (websiteTitle = 'TK Media Native HTML Builder', listCssFiles = []) => headerBuilder(websiteTitle, listCssFiles);

export { getAllClassNameOfHtmlBlock, buildTheHeader };
