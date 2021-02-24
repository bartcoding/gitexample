
console.log('the sum of 1 and 2 equals');
let number1 =10;
let number2 =20;




function custombuttonaction(mathematicalfunction){

    //select the inputelement with id number1
    let num1 = document.querySelector("#number1");
    //select the inputelement with id number2
    let num2 = document.querySelector("#number2");
    //select the p element with id result
    let result = document.querySelector("#result");


    //change the text value of the result element in the DOM
    result.innerText = mathematicalfunction(num1.value,num2.value);

}

function plusbuttonaction(){

    //select the inputelement with id number1
    let num1 = document.querySelector("#number1");
    //select the inputelement with id number2
    let num2 = document.querySelector("#number2");
    //select the p element with id result
    let result = document.querySelector("#result");

    //change the text value of the result element in the DOM
    result.innerText = sum(num1.value,num2.value);

}
function minusbuttonaction(){

    //select the inputelement with id number1
    let num1 = document.querySelector("#number1");
    //select the inputelement with id number2
    let num2 = document.querySelector("#number2");
    //select the p element with id result
    let result = document.querySelector("#result");

    //change the text value of the result element in the DOM
    result.innerText = difference(num1.value,num2.value);

}
function multiplicationbuttonaction(){

    //select the inputelement with id number1
    let num1 = document.querySelector("#number1");
    //select the inputelement with id number2
    let num2 = document.querySelector("#number2");
    //select the p element with id result
    let result = document.querySelector("#result");

    //change the text value of the result element in the DOM
    result.innerText = multiplication(num1.value,num2.value);

}
function divisionbuttonaction(){

    //select the inputelement with id number1
    let num1 = document.querySelector("#number1");
    //select the inputelement with id number2
    let num2 = document.querySelector("#number2");
    //select the p element with id result
    let result = document.querySelector("#result");

    //change the text value of the result element in the DOM
    result.innerText = division(num1.value,num2.value);

}

//this function returns the sum of 2 numbers
let sum = function sum(number1, number2){

    number1 = parseInt(number1);
    number2 = parseInt(number2);
    return number1 + number2;
}

//this function returns the difference of 2 numbers
let difference = function difference(number1, number2){
    
    number1 = parseInt(number1);
    number2 = parseInt(number2);
    return number1 - number2;
}

//this function returns the multiplication of 2 numbers
let multiplication = function multiplication(number1, number2){
    
    number1 = parseInt(number1);
    number2 = parseInt(number2);
    return number1 * number2;
}

//this function returns the division of 2 numbers
let division = function division(number1, number2){
    
    number1 = parseInt(number1);
    number2 = parseInt(number2);
    return number1 / number2;
}