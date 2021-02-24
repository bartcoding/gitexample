let cats = ['fred', 'brutus'];

cats.push('freddie');

cats.push('coco');

cats.push('garfield');

//print the first cat from the array on the console
cats[0] = 'Fred';
console.log(cats[0]);

printCatsToDiv();
function printCatsToDiv(){
    let catdiv = document.querySelector("#cats");
    //simplest way, but most tedious and non future proof way to print array values
    //catdiv.innerText = cats[0] + ', ' + cats[1] + ', '+ cats[2] + ', '+ cats[3];
    console.log('before the for loop');
    for(let i = 0; i<cats.length ; i++){
        console.log('the ' + (i +1) +'st time we go through this loop.');
        catdiv.innerText = catdiv.innerText + ', ' + cats[i];
    }
    console.log('after the for loop');


}