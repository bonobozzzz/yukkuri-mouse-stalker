  const imageUrl = chrome.runtime.getURL('images/yukkuri.png');
  var body_elements = document.getElementsByTagName('body');
  var elem = document.createElement('div');
  var img = document.createElement('img');
  img.src = imageUrl
  img.id = 'yukkuri'
  elem.id = 'mouse-stalker';
  elem.append(img)
  body_elements[0].appendChild(elem);


  const stalker = document.getElementById('mouse-stalker');
  document.addEventListener('mousemove', function (e) {
  stalker.style.transform = 'translate(' + e.clientX + 'px, ' + e.clientY + 'px)';
});
