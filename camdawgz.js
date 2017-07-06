let images = [
  "beach", "carmen-san-diego", "death-row-records", "disney", "eiffel-tower",
  "fresh-prince", "greys-anatomy", "hasselhoff", "honey-i-shrunk-the-kids",
  "jesus-christ-superstar", "lamb-chop", "lightning", "lily-pads",
  "little-miss-sunshine", "mean-girls", "mt-rushmore", "sixteen-candles",
  "snakes-on-a-plane", "sound-of-music", "strife", "superbowl"
]

let displayImage = function() {
  var image = images[Math.floor(Math.random() * images.length)];
  
  document.querySelector('#main-image').src = `images/camdawgz/${image}.jpg`;
}