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