const grid = document.querySelector('#grid')
const initialize = loop(10);
let divfill = null;
let cursorColor = (document.querySelectorAll('input'))[0].value;
let backcolorConfirmer = (document.querySelectorAll('input'))[1].value;

const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
button.addEventListener('click', buttonprocessor);
})

function loop(val) {
for (let i=0; i<val; i++) {

const divv = document.createElement('div');
divv.classList.add('innergrid');
divv.style.backgroundColor = (document.querySelectorAll('input'))[1].value;

for (let j=0; j<val; j++){
let val = document.createElement('div');
val.classList.add('innergrid2');
val.classList.add('innergrid22');
divv.appendChild(val);
}

grid.appendChild(divv);
}

return 0;
}

const cinputs = document.querySelectorAll('input');
cinputs.forEach((ci) => {
ci.addEventListener('change', (e) => {
switch (ci.id) {
case "pencolor":
cursorColors();
break;
case "backcolor":
backColors(e);
break;
}
});
})


function cursorColors() {

if (document.querySelectorAll('.innergrid2')) {

const curs = document.querySelectorAll('.innergrid2')
curs.forEach((c) => {
c.addEventListener('mouseover', (e) => {
c.style.backgroundColor = (document.querySelectorAll('input'))[0].value;
})
})

}
}

function backColors(e) {
    const bc = document.querySelectorAll('.innergrid22');
    bc.forEach((b) => {
    b.style.backgroundColor = e.target.value;
    })
}



function buttonprocessor() {

switch (this.id) {
case "fill":
fill(); break;
case "grab":
grab(); break;
case "eraser":
eraser(); break;
case "rainbow":
rainbow(); break;
case "gridLines":
gridLines(); break;
case "gridSize":
gridSize(); break;
case "clear":
clear(); break;
}
} 

function fill(){
if (document.querySelectorAll('.innergrid22')) {
divfill = document.querySelectorAll('.innergrid22')
divfill.forEach((fil) => {
fil.style.backgroundColor = (document.querySelectorAll('input'))[0].value;
})

}

}

function grab(){

}

function eraser(val){

if (document.querySelectorAll('.innergrid2')) {
divfill = document.querySelectorAll('.innergrid2')
divfill.forEach((fil) => {
fil.addEventListener('mouseover', (e) => {
fil.style.backgroundColor = (document.querySelectorAll('input'))[1].value;
})
})

}
}

function rainbow(){

if (document.querySelectorAll('.innergrid22')) {
divfill = document.querySelectorAll('.innergrid22')
divfill.forEach((fil) => {
let a = Math.floor(Math.random() * 255) + 3;
let b = Math.floor(Math.random() * 255) + 3;
let c = Math.floor(Math.random() * 255) + 3;
fil.addEventListener('mouseover', (e) => {
fil.style.backgroundColor = `rgb(${a}, ${b}, ${c})`;
})
})
}
}

function gridLines(){

const grs = document.querySelectorAll('.innergrid2');
grs.forEach((gr) => gr.classList.toggle('innergrid22'));
}

function gridSize(){

let val = +(prompt("Enter a value [max 100]:"));
while (grid.firstChild)
grid.removeChild(grid.firstChild);

loop(val);

}

function clear(){
while (grid.firstChild)
grid.removeChild(grid.firstChild);
loop(10);

const bc = document.querySelectorAll('.innergrid22');
bc.forEach((b) => {
b.style.backgroundColor = 'black';
})
}
