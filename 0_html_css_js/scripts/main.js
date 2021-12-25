document.write("Hello World!");
console.log("hellp console");
var x = 3;
// as always
alert("hello");
//var distance = parseInt(readLine(), 10);
if (1 == 2) {
    console.log("lol");
}
switch (x) {
    case 1:
        document.write(x);
        break;
    case 2:
        document.write(x + 2);
        break;
    default:
        document.write(x + 5);
}

for (i = 1; i <= 5; i++) {
    document.write(i + "<br />");
    if (i == 3) {
        continue;
    }
    if (i == 2) {
        break;
    }
}
while (i <= 5) {
    document.write(i + "<br />");
    i++;
}
do {
    document.write(i + "<br />");
    i++;
} while (i <= 5);

function sayhito(name) {
    alert("Hi, " + name);
}

sayhito(prompt("Type yout name:"));
confirm("you have credit..")

var oop = {
    name: "w", age: 21
}
oop.name = "new";
oop['name'] = "new new";

function person(name, age, color) { //class
    this.name = name;
    this.age = age;
    this.favColor = color;
    this.run = function (km) {
        km++;
    }
}
var p1 = new person("loo", 23, "green");
var p2 = new person("ta", 32, "blacj");

var courses = new Array("HTML", "CSS", "JS");
var course = courses[0]; // HTML
courses[1] = "C++"; //Changes the second element 
console.log(course.length);
var c2 = ["a", "v", "b"];
var adding = course.concat(c2);

//STD
Math.sqrt(2);

function fn() {
    alert("spam");
}
var t = setInterval(fn, 30000);

//DOM

//finds element by id
//document.getElementById(id) 

//finds elements by class name
//document.getElementsByClassName(name) 

//finds elements by tag name
//document.getElementsByTagName(name)


/*
element.childNodes      // returns an array of an element's child nodes.
element.firstChild      // returns the first child node of an element.
element.lastChild       // returns the last child node of an element.
element.hasChildNodes   // returns true if an element has any child nodes, otherwise false.
element.nextSibling     // returns the next node at the same tree level.
element.previousSibling // returns the previous node at the same tree level.
element.parentNode      // returns the parent node of an element.

Use the following methods to create new nodes:
element.cloneNode()             // clones an element and returns the resulting node.
document.createElement(element) // creates a new element node.
document.createTextNode(text)   // creates a new text node.
*/


function _2() {
    clearInterval(t);
    alert("spam off");
}


//bubbling and capturing.
//In bubbling, the innermost element's event is handled first and then the outer element's event is handled. The <p> element's click event is handled first, followed by the <div> element's click event.
//In capturing, the outermost element's event is handled first and then the inner. The <div> element's click event is handled first, followed by the <p> element's click event.





var images = [
    "http://www.sololearn.com/uploads/slider/1.jpg",
    "http://www.sololearn.com/uploads/slider/2.jpg",
    "http://www.sololearn.com/uploads/slider/3.jpg"
];
var num = 0;
function next() {
    var slider = document.getElementById("slider");
    num++;
    if (num >= images.length) {
        num = 0;
    }
    slider.src = images[num];
}
function prev() {
    var slider = document.getElementById("slider");
    num--;
    if (num < images.length - 1) {
        num = images.length - 1;
    }
    slider.src = images[num];
}


function validate() {
    var n1 = document.getElementById("num1");
    var n2 = document.getElementById("num2");
    if (n1.value != "" && n2.value != "") {
        if (n1.value == n2.value) {
            return true;
        }
    }
    alert("The values shlould be equal and not blank");
    return false;
}






/* 
//Cookies
//localStorage.setItem("key1", "cookies1");
localStorage.setItem("key2", "value2");
//this will print the value
alert(localStorage.getItem("key1"));
localStorage.removeItem("key1");
//localStorage.clear(); //remove all
*/
