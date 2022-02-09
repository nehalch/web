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