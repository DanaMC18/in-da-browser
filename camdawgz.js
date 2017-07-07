// keeping orientation for future update when all images on a web page 
// will be replaced with camdawgz 
let images = [
  {title: "beach", orientation: "landscape"},
  {title: "carmen-san-diego", orientation: "portrait"},
  {title: "death-row-records", orientation: "portrait"},
  {title: "disney", orientation: "portrait"},
  {title: "eiffel-tower", orientation: "portrait"},
  {title: "fresh-prince", orientation: "landscape"},
  {title: "greys-anatomy", orientation: "landscape"},
  {title: "hasselhoff", orientation: "landscape"},
  {title: "honey-i-shrunk-the-kids", orientation: "portrait"},
  {title: "jesus-christ-superstar", orientation: "portrait"},
  {title: "lamb-chop", orientation: "portrait"},
  {title: "lightning", orientation: "landscape"},
  {title: "lily-pads", orientation: "landscape"},
  {title: "little-miss-sunshine", orientation: "landscape"},
  {title: "mean-girls", orientation: "portrait"},
  {title: "mt-rushmore", orientation: "landscape"},
  {title: "sixteen-candles", orientation: "portait"},
  {title: "snakes-on-a-plane", orientation: "portait"},
  {title: "sound-of-music", orientation: "portait"},
  {title: "strife", orientation: "landscape"},
  {title: "superbowl", orientation: "portait"},
  {title: "TMNT", orientation: "portait"},
  {title: "waldo1", orientation: "portait"},
  {title: "waldo2", orientation: "portait"},
  {title: "wizard-of-oz", orientation: "landscape"}
]

let displayImage = function() {
  let index = Math.floor(Math.random() * images.length);
  let image = images[index];
  let imgPath = `images/camdawgz/${image.title}.jpg`;
  
  document.querySelector('body').background = imgPath;
}

document.addEventListener('DOMContentLoaded', displayImage);