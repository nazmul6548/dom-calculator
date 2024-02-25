// const f=document.querySelectorAll(".n");
// const result =document.querySelector('result');
// for (let i = 0; i < f.length; i++) {
//     f[i].addEventListener("click",() => {
// const t =f[i].textContent;
// const p =document.getElementById('display');
// p.innerText = t;
// console.log(p.value);
//     });
    
// }

// document.querySelectorAll(".a").forEach(element => {
//     element.addEventListener("click", () => {
//         console.log(element);
//     });
// });


// const u =document.getElementById("btns");
//     // const name = u.addEventListener('click',() => {
//     // const t = name.parentNode;
//     // console.log(t);
//     // })

// console.log(u.parentNode.parentNode.childNodes[1].innerText);


// function clickme() {
//     // document.write("amk click kora hoyce");
//     document.getElementById('btn').innerText =Date()
// }

// const person ={
//     name:"nazmul",
//     adress:{
//         thana:"mirsarai",
//         zilla :"chittagong"
//     }
// }
// const  {adress:{zilla:upozilla}} =person;
// // const {zilla} = adress;
// console.log(upozilla);
const myId = document.getElementById('newdiv');
const newclass = document.createElement("div");
newclass.className ="newMe";
const p =document.createElement('p');
p.textContent="insha Allah ";
newclass.appendChild(p);
myId.appendChild(newclass);

const a = document.createElement('div');
a.id ="aid";
const ul = document.createElement('ul');
const li1 =document.createElement('li');
const li2 =document.createElement('li');
const li3 =document.createElement('li');
li1.innerText="about ";
li2.textContent="skill";
li3.innerText = "contact";
ul.appendChild(li1);
ul.appendChild(li2);
ul.appendChild(li3);
a.appendChild(ul);


document.body.appendChild(a);