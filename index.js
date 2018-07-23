import { findAllClassNamePositions } from './css/classname';
import { headerBuilder } from './html/html_builder';
import { fetchFileFromURL } from './libs/file_libs';

const getAllClassNameOfHtmlBlock = (htmlBlockAsString) => {
  const positions = findAllClassNamePositions(htmlBlockAsString);
  return positions;
};

const buildTheHeader = (websiteTitle = 'TK Media Native HTML Builder', listCssFiles = []) => headerBuilder(websiteTitle, listCssFiles);

const getFileContentFromURL = (fileURL) => fetchFileFromURL(fileURL);

export { getAllClassNameOfHtmlBlock, buildTheHeader, getFileContentFromURL };
