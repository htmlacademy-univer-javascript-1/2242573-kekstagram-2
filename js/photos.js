import {showFullImage} from './user-modul.js';

const photoItemTemplate = document.querySelector('#picture')
  .content
  .querySelector('.picture');

const photosList = document.querySelector('.pictures');

const createPicture = (pictures) => {
  for (const picture of pictures) {
    const photoElement = photoItemTemplate.cloneNode(true);
    photoElement.querySelector('.picture__img').src = picture.url;
    photoElement.querySelector('.picture__likes').textContent = picture.likes;
    photoElement.querySelector('.picture__comments').textContent = picture.comments.length;
    showFullImage(photoElement, picture);
    photosList.appendChild(photoElement);
  }
};

export {createPicture};
