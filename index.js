console.log('bobbyhadz.com');

const elements1 = document.querySelectorAll(
  'div.box1, span.box3',
);
console.log(elements1); // 👉️ [div.box1, span.box3]

const elements2 = document.querySelectorAll('div, span, p');
console.log(elements2); // 👉️ [div.box1, div.box2, span.box3, p.box4]

const elements3 = document.querySelectorAll(
  'div.box1, span#box5',
);
console.log(elements3); // 👉️ [div.box1, span#box5]
