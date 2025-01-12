'use strict';

let schema = [
  {
    name: '',
    email: '',
    age: 0,
    color: '',
    comments: '',
    buyCar: '',
    include: [],
  },
];

const submitBtn = document.getElementById('submit');

submitBtn.addEventListener('click', function (e) {
  e.preventDefault();
  const email = document.getElementById('email').value;
  const name = document.getElementById('name').value;
  const age = document.getElementById('age').value;
  const color = document.getElementById('dropdown').value;
  const comments = document.getElementById('input-textarea').value;
  const buyCar = document.querySelector('input[name="buy-car"]:checked').value;
  const options = document.getElementsByName('options');
  let include = [];

  options.forEach((el) => {
    if (el.checked) {
      include.push(el.value);
    }
  });

  let newArr = schema.map((e) => e);
  newArr = { email, name, age, color, comments, buyCar, include };
  console.log(newArr);
});
