import { uniqWith, isEqual } from 'lodash';
import { getAllStringParametersOfProperty } from '../libs/string_libs';

const findAllClassNamePositions = (inputHtmlString) => uniqWith(getAllStringParametersOfProperty(inputHtmlString, 'class'), isEqual);

export { findAllClassNamePositions };
