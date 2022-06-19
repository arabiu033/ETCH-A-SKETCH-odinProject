const grid = document.querySelector('#grid')
const initialize = loop(10);
let divfill = null;

function loop(val) {
    for (let i=0; i<val; i++) {

    const divv = document.createElement('div');
    divv.classList.add('innergrid');

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
                break;
            case "backcolor":
                const bc = document.querySelectorAll('.innergrid');
                bc.forEach((b) => {
                   b.style.backgroundColor = e.target.value;
                });
                break;
        }
    })
})


const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', buttonprocessor);
})

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
            fil.addEventListener('mouseover', (e) => {
                fil.style.backgroundColor = 'red';
            })
        })

    }
    
}

function grab(){
    
}

function eraser(){
    
}

function rainbow(){

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
    
}

