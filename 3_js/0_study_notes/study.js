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
for (let i = 0; i < 100; i++) { } // c for construction

const fruits = ['apples', 'bananas', 'cherries'];
for (const fruit of fruits) {
  console.log(fruit);
}
let upper = fruits.map(toUpper);


const cats = ['Leopard', 'Serval', 'Jaguar', 'Tiger', 'Caracal', 'Lion'];

const filtered = cats.filter((cat) => cat.startsWith('L'));
console.log(filtered);
// [ "Leopard", "Lion" ]
break;
continue;


while () { }
do {} while( )

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

1.2134.toFixed(2);
Number('123');
1++;

let a = document.querySelector("")

const list = document.createElement('p');
list.textContent = "123";
document.querySelector("body").appendChild(list);
  
console.log(typeof (b1));
console.log(typeof (b2));
console.log(b2);
console.log(b3);


let b4 = 4 % 3;
console.log(b4);
let a = "hello";
console.log(a);


// str.split(",")
// str.includes('zilla')
// str.startsWith('zilla')
// str.endsWith('zilla')
// str.slice(1, 4)
// str..replace('moz','van')
// str..indexOf('char')

/*js


types

if
bool
%2 even odd



const arr

arr. length 
arr. push return length
cities.unshift('Edinburgh'); //push as first item;
cities.shift(); // remove first element
cities.splice(index, 2); // remove index + 1 el
arr. forEach()

.pop //delete last item

.map // func for each item

cities.filter(isLong) // func filter if return true


cities.join(',') //separate arr with comas as str

dogNames.toString(); // arr to string with commas

*/

const birds = ['Parrot', 'Falcon', 'Owl'];

for (const bird of birds) {
  console.log(bird);
}

let greeting = ( isBirthday ) ? 'Happy birthday Mrs. Smith — we hope you have a great day!' : 'Good morning Mrs. Smith.';


