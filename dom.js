// // Examine the document object
// console.dir(document);
// console.log(document.contentType);
// console.log(document.domain);
// console.log(document.URL);
// // console.log(document.title);
// // document.title = "Sourav Majumder";
// console.log(document.title);
// console.log(document.head);
// console.log(document.all);
// console.log(document.all[10]);
// console.log(document.body);
// console.log(document.all[10]);
// document.all[10].textContent = "hello";
// console.log(document.forms[0]);

//Selector using getElementById

// console.log(document.getElementById("header-title"));
// var headerTitle = document.getElementById("header-title");
// console.log(headerTitle);
// console.log(headerTitle.textContent);
// console.log(headerTitle.innerText);
// headerTitle.innerHTML = "<h1>hello</h1>";
// var header = document.getElementById("main-header");
// header.style.borderBottom = "solid 5px #000";

// Selector Get element by classname
// var items = document.getElementsByClassName("list-group-item");
// console.log(items);
// items[1].textContent = "hello 2";
// // items[1].style.fontWeight = "bold";
// // items[2].style.backgroundColor = "green";

// for (var i = 0; i < items.length; i++) {
//   if (i % 2 == 0) {
//     items[i].style.backgroundColor = "red";
//   } else {
//     items[i].style.backgroundColor = "green";
//   }
// }

// // Selector getelementsbytagname
// var lii = document.getElementsByTagName("li");
// console.log(lii);
// lii[1].textContent = "hello 2";
// // items[1].style.fontWeight = "bold";
// // items[2].style.backgroundColor = "green";

// for (var i = 0; i < lii.length; i++) {
//   if (i % 2 == 0) {
//     lii[i].style.backgroundColor = "orange";
//   } else {
//     lii[i].style.backgroundColor = "pink";
//   }
// }

// Query Selector eita sudhu first value kei change kre
// var header = document.querySelector("#main-header");
// header.style.borderBottom = "20px solid black";

// var inputt = document.querySelector("input");
// inputt.value = "sourav";

// var submit = document.querySelector('input[type = "submit"]');
// submit.style.color = "red";

// var listItem = document.querySelector(".list-group-item");
// listItem.style.backgroundColor = "green";

// var lastItem = document.querySelector(".list-group-item:nth-child(3)");
// lastItem.style.backgroundColor = "green";

// var lastItem = document.querySelector(".list-group-item:last-child");
// lastItem.style.backgroundColor = "green";

//Query selector all

// var titles = document.querySelectorAll(".title");

// console.log(titles);
// titles[0].textContent = "hello";
// titles[1].innerText = "cook";

// var odd = document.querySelectorAll("li:nth-child(odd");
// var even = document.querySelectorAll("li:nth-child(even");
// for (var i = 0; i < odd.length; i++) {
//   odd[i].style.backgroundColor = "red";
//   even[i].style.backgroundColor = "green";
// }

// Traversing the dom
var listItem = document.querySelector("#items");
// console.log(listItem.parentNode);
// listItem.parentNode.style.backgroundColor = "red";
// console.log(listItem.parentNode.parentNode);

//Parentelement is exactly the same as parentnode.
// just remove the node and element there.

//Children
// console.log(listItem.childNodes);
// AMra childnodes use krbo na karon era barti space
// keo node bole er jnno children use krbo
// console.log(listItem.children);
// listItem.children[1].style.backgroundColor = "red";

// //firstchild
// console.log(listItem.firstChild); //It will take space as a node
// //Firstelementchild
// console.log(listItem.firstElementChild);
// listItem.firstElementChild.innerText = "hellp";
// //Lastchild
// console.log(listItem.lastChild); //same as firstchild
// //Lastelementchild
// console.log(listItem.lastElementChild);
// listItem.lastElementChild.innerText = "text";
// NExt sibiling
// var nextItem = document.querySelector(".title");
// // console.log(nextItem.nextSibling.nextSibling.nextSibling.nextSibling);
// // console.log(nextItem.nextElementSibling);

// // console.log(listItem.previousSibling.previousSibling);
// // console.log(listItem.previousElementSibling.previousElementSibling);
// // Creating element
// var newDiv = document.createElement("div");

// newDiv.className = "sourav";

// newDiv.id = "majumder";

// //Add atributes
// newDiv.setAttribute("style", "color:red;font-size:40px;");
// //add child in div
// var childText = document.createTextNode("hello world");
// //append
// newDiv.appendChild(childText);
// console.log(newDiv);
// // Add newdiv into dom

// var container = document.querySelector("header .container");
// var header = document.querySelector(".container h1");

// container.insertBefore(newDiv, header);

//......Event......//

//One way
// var button = document
//   .getElementById("button")
//   .addEventListener("click", function () {
//     console.log(123);
//   });

//Another way
// var button = document
//   .getElementById("button")
//   .addEventListener("click", buttonFunction);

// function buttonFunction(e) {
//   //   console.log("sourav clicks");
//   //   document.getElementById("header-title").textContent = "It has changed";
//   //   document.querySelector("#main").style.backgroundColor = "#f4f4f4";
//   //   console.log(e);
//   //   console.log(e.target);
//   //   console.log(e.target.id);
//   //   console.log(e.target.className);
//   //   console.log(e.target.classList[1]);
//   //   var output = document.getElementById("output");
//   //   output.innerHTML = "<li >And a fifth one</li>";
//   //   output.style.listStyleType = "none";
//   //   output.style.border = "1px solid #f5f5f5";
//   //   output.style.padding = "8px 12px";
//   // Window theke mapa hoy
//   //   console.log(e.clientX);
//   //   console.log(e.clientY);
//   // Box theke mapa hoy
//   //   console.log(e.offsetX);
//   //   console.log(e.offsetY);
//   // press one key and click
//   console.log(e.altKey);
//   console.log(e.ctrlKey);
//   console.log(e.shiftKey);
// }
// var button = document.getElementById("button");
// button.addEventListener("click", runEvent);
// button.addEventListener("dblclick", runEvent);
// button.addEventListener("mousedown", runEvent);
// button.addEventListener("mouseup", runEvent);
// var box = document.getElementById("box");
// box.addEventListener("mouseenter", runEvent);
// box.addEventListener("mouseleave", runEvent);
// box.addEventListener("mouseover", runEvent);
// box.addEventListener("mouseout", runEvent);
// box.addEventListener("mousemove", runEvent);

var itemInput = document.querySelector('input[type = "text"]');
var form = document.querySelector("form");
var select = document.querySelector("select");
// itemInput.addEventListener("keydown", runEvent);
// itemInput.addEventListener("keyup", runEvent);
// itemInput.addEventListener("keypress", runEvent);
// itemInput.addEventListener("focus", runEvent);
// itemInput.addEventListener("blur", runEvent);

// itemInput.addEventListener("cut", runEvent);
// itemInput.addEventListener("paste", runEvent);
// itemInput.addEventListener("input", runEvent);
// select.addEventListener("change", runEvent);
// select.addEventListener("input", runEvent);
form.addEventListener("submit", runEvent);
function runEvent(e) {
  e.preventDefault();
  console.log("TYPE IS " + e.type);
  //   console.log(e.target.value);
  //   document.getElementById("output").innerHTML =
  //     "<h3>" + e.target.value + "</h3>";
  //   output.innerHTML =
  //     "<h3>MouseX :" + e.offsetX + "</h3><h3>MouseY :" + e.offsetY + "</h3>";

  //   box.style.backgroundColor = "rgb(" + e.offsetX + "," + e.offsetY + ",40)";
  //   document.body.style.backgroundColor =
  //     "rgb(" + e.offsetX + "," + e.offsetY + ",40)";
}
