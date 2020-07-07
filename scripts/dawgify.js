chrome.runtime.onMessage.addListener(request => {
  const pageImages = document.querySelectorAll('img');
  const imgsLength = pageImages.length;
  let counter = 0;

  pageImages.forEach(img => {
    img.src = request.dawgs[counter]
    counter = (counter + 1) % imgsLength;
  })
});
