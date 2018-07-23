/* eslint-env browser */

const makeRequestURL = (url, method = 'GET') =>
  new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.onload = () => {
      if (xhr.status >= 200 && xhr.status < 300) {
        resolve(xhr.response);
      } else {
        reject(new Error('Error'));
      }
    };
    xhr.onerror = () => {
      reject(new Error('Error'));
    };
    xhr.responseType = 'blob';
    xhr.send();
  });

const readFileBase64FromURL = inputFile => {
  const temporaryFileReader = new FileReader();

  return new Promise((resolve, reject) => {
    temporaryFileReader.onerror = () => {
      temporaryFileReader.abort();
      reject(new Error('Problem parsing input file.'));
    };

    temporaryFileReader.onloadend = () => {
      resolve(temporaryFileReader.result);
    };
    temporaryFileReader.readAsDataURL(inputFile);
  });
};

const fetchFileFromURL = async fileURL => {
  const rawData = await makeRequestURL(fileURL);
  const base64Data = await readFileBase64FromURL(rawData);
  return base64Data;
};

export { fetchFileFromURL };
