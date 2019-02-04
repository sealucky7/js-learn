const API_URL = '/data/';

export default class HTTPService{
  static sendRequest(url, successCallback, method = 'GET') {

    let xhr = new XMLHttpRequest();

    xhr.open('GET', API_URL + url, true);
    xhr.send();

    xhr.onerror = () => {
      console.error('Server is unavailable');
    };

    xhr.onload = () => {
      if (xhr.status !== 200) {
        console.error(xhr.status + ': ' + xhr.statusText);
        return;
      }

      let responseData = JSON.parse(xhr.responseText);

      successCallback(responseData);
    }
  }
}