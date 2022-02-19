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


const resetParas = document.querySelectorAll('.resultParas p');
for (const resetPara of resetParas) {
  resetPara.textContent = '';
}
const resetParas = document.querySelector('.resultParas p');

guessField.focus();

guesses.style.backgroundColor = 'yellow';
guesses.style.fontSize = '200%';
guesses.style.padding = '10px';
guesses.style.boxShadow = '3px 3px 6px black';


guesses.textContent = 'Where is my paragraph?';

guessField.value = 'Hello';
