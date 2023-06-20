import './photos.js';
import './form.js';
import './scale.js';
import './effects.js';
import './form-submit.js';
import './hashtag.js';
import { activateFilterButton } from './filter-list.js';
import { createPicture } from './photos.js';
import { sendRequest } from './fetch.js';

let photos = [];

const onSuccess = (data) => {
  photos = data.slice();
  createPicture(data);
  activateFilterButton();
};

const onFail = () => {
  const errorMessage = document.createElement('div');
  errorMessage.style.position = 'absolute';
  errorMessage.style.left = 0;
  errorMessage.style.top = 0;
  errorMessage.style.right = 0;
  errorMessage.style.fontSize = '30px';
  errorMessage.style.backgroundColor = '#FF4E4E';
  errorMessage.style.textAlign = 'center';
  errorMessage.style.padding = '10px 0';
  errorMessage.textContent = 'Ошибка загрузки фотографий';
  document.body.append(errorMessage);
};

sendRequest(onSuccess, onFail, 'GET');

export {photos};
