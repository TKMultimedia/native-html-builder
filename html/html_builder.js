import htmlString from './form/header_part.html';
import pretty from 'pretty';

const headerBuilder = (siteTitle, cssFiles = []) => {
  let resultHtml = htmlString;
  cssFiles.forEach(cssFileName => {
    resultHtml = resultHtml.replace('__STYLE_AREA__', `${buildACssRow(cssFileName)}__STYLE_AREA__`);
  });
  resultHtml = resultHtml.replace('__STYLE_AREA__', '');
  return pretty(resultHtml.replace('__HTML_TITLE__', siteTitle));
};

const buildACssRow = (cssFileName) => `<link href="${cssFileName}" rel="stylesheet" />`;

export { headerBuilder };
