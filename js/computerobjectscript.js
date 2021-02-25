console.log('computerobjectscript is running');

let computerobject = {
    ramMemory : '8 GB DDR3',
    processor : 'Snapdragon 888',
    colour : 'green',
    weightingrams: 500,
    computerIsTurnedOn: false,
    boot: function(){
        this.computerIsTurnedOn = true;
        this.showBootMessageInConsoleLog();
    },
    showBootMessageInConsoleLog: function(){
        console.log('computer is booting...');
        console.log('welcome, user');
        console.log('ram memory: ' + this.ramMemory);
        console.log('processor: ' + this.processor);
        console.log('weight: ' + 'please dont ask a tablet about its weight, I\'m very sensitive');
    }
}

let computerdiv = document.querySelector("#computer");

//we create new elements in our dom, that will be shown on the web page.
computerdiv.appendChild(createComputerItem(computerobject.ramMemory));
computerdiv.appendChild(createComputerItem(computerobject.processor));
computerdiv.appendChild(createComputerItem(computerobject.weightingrams));
computerdiv.appendChild(createTurnOnComputerButton("turn on"));

//function creates a p element with the content given by name
function createComputerItem(name) {
    let p = document.createElement('p');
    p.textContent = name;
    return p;
}
//create a button with an event listener that turns the computer on
function createTurnOnComputerButton(name) {
    let button = document.createElement('button');
    button.addEventListener("click", turnOnComputer);
    button.textContent = name;
    return button;
}

function turnOnComputer(){

    computerobject.boot();


}