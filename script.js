const grid = document.querySelector('#grid')

for (let i=0; i<10; i++) {

    const divv = document.createElement('div');
    divv.classList.add('innergrid');

    for (let j=0; j<10; j++){
        let val = document.createElement('div');
        val.classList.add('innergrid2')
        divv.appendChild(val);
    }

    grid.appendChild(divv);
}