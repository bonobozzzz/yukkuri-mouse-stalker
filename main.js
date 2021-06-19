  const IMG_WID = 48;
  const IMG_HEI = 48;
  const DIV_ID = 'stalker-obj';

  var body_elements = document.getElementsByTagName('body');
  var elem = document.createElement('div');
  elem.id = 'mouse-stalker';
  body_elements[0].appendChild(elem);


  console.log(body_elements[0])
  console.log(elem)


  const stalker = document.getElementById('mouse-stalker');
  document.addEventListener('mousemove', function (e) {
  stalker.style.transform = 'translate(' + e.clientX + 'px, ' + e.clientY + 'px)';
});
