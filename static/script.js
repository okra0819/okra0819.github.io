var sentences = [
  '你好吗？',
  '天气好吗？',
  '很久都没有听过你的声音了',
  '也好久都没有见过你了',
  '你说我一点都没变',
  '那你呢？',
  ' ',
  '七夕节该说点什么呢？',
  ' ',
  '希望你一直都好好的吧',
  '好好爱自己',
  '\u0008\u5c0f\u5bd2\u554a',
  '这一天要快乐',
  '每天都要快乐',
  '七夕快乐'
];

function showInput() {
  var container = document.querySelector('.container') || document.getElementsByClassName('container')[0];
  var opacity = container.style.opacity || 0;
  var timer;

  function show() {
    if (opacity >= 1) {
      clearInterval(timer);
    } else {
      opacity += .01;
      container.style.opacity = opacity;
      setTimeout(show, 10);
    }
  }

  timer = setTimeout(show, 10);
}

function startType() {
  superplaceholder({
    el: document.querySelector('input') || document.getElementById('input'),
    sentences: sentences,
    options: {
      // delay between letters (in milliseconds)
      letterDelay: 150, // milliseconds
      // delay between sentences (in milliseconds)
      sentenceDelay: 1500,
      // should start on input focus. Set false to autostart
      startOnFocus: false,
      // loop through passed sentences
      loop: false,
      // Initially shuffle the passed sentences
      shuffle: false,
      // Show cursor or not. Shows by default
      showCursor: true,
      // String to show as cursor
      cursor: '|'
    }
  });
}

function randomBgColor() {
  var className = 'bg-color-';
  var timer;

  function changeColor() {
    var key = (Math.floor(Math.random() * 100) % 9).toString();
    document.body.className = className + key;
    setTimeout(changeColor, 3000);
  }

  timer = setTimeout(changeColor, 3000);
}

function showEgg() {
  var input = document.querySelector('input') || document.getElementById('input');
  input.value = 'I will always love you';
}

window.onload = function() {
  randomBgColor();
  showInput();
  setTimeout(function() {
    startType();
  }, 2000);
  setTimeout(function() {
    showEgg();
  }, 3 * 60 * 1000);
}