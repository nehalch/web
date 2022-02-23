/**
* @param {string} name
*/

let abc = "abcIHiuIUhiuHihUi";
console.log(abc.length);
console.log(abc.toLowerCase());
console.log(abc.toUpperCase());
console.log(abc[abc.length - 2]); // 2nd char from end


let hello_world = 'Hello world!';
let hello = hello_world.substring(0, 5);
let world = hello_world.substring(6);
console.log(hello);
console.log(world);

hello_world = hello + ' ' + world;
console.log(hello_world);


let text = `This is a multiline
string that
just works!`
let language = "JavaScript";
`I am learning ${language}`; // like in rust

////////none

const fruits = ['apples', 'bananas', 'cherries'];
for (const fruit of fruits) {
  console.log(fruit);
}


// const resetParas = document.querySelectorAll('.resultParas p');

// for (const resetPara of resetParas) {
//   resetPara.textContent = '';
// }

// guessField.focus();

// guesses.style.backgroundColor = 'yellow';
// guesses.style.fontSize = '200%';
// guesses.style.padding = '10px';
// guesses.style.boxShadow = '3px 3px 6px black';


// guesses.textContent = 'Where is my paragraph?';

// guessField.value = 'Hello';

let a1 = 12;
let a2 = a1.toString()

console.log(typeof (a1));
console.log(typeof (a2));



let b1 = "101";
let b2 = Number.parseInt(b1, 10);
let b3 = Number.parseInt(b1, 2);

console.log(typeof (b1));
console.log(typeof (b2));
console.log(b2);
console.log(b3);


let b4 = 4 % 3;
console.log(b4);
let a = "hello";
console.log(a);

/*
js
let const
if
bool
%2 even odd
*/