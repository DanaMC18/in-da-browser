import { imageMap } from './images.js'

const randomImage = () => {
  const images = Object.values(imageMap);
  const index = Math.floor(Math.random() * images.length);
  return images[index];
}

export default randomImage;
