import randomImage from '../scripts/random-image.js';

const displayImage = () => {
  const image = randomImage();
  document.querySelector('body').background = image;
}

document.addEventListener('DOMContentLoaded', displayImage);
