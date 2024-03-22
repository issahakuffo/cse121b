/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */

function add(number1,number2){
    return number1 + number2;
}
/* Function Definition - Add Numbers */

function addNumbers(){
    let addNumber1 = Number(document.querySelector("#add1").value);
    let addNumber2 = Number(document.querySelector("#add2").value);

    const sum = add(addNumber1,addNumber2);

    document.querySelector("#sum").value = sum;
}

document.querySelector("#addNumbers").addEventListener("click", addNumbers);


/* Function Expression - Subtract Numbers */

function subtract(number1,number2){
    return number1 - number2;
}

function subtractNumbers(){
    let subtractNumber1 = Number(document.querySelector("#subtract1").value);
    let subtractNumber2 = Number(document.querySelector("#subtract2").value);

    const difference = subtract(subtractNumber1,subtractNumber2);

    document.querySelector("#difference").value = difference;
}

document.querySelector("#subtractNumbers").addEventListener("click", subtractNumbers);

/* Arrow Function - Multiply Numbers */

function multiply(number1,number2){
    return number1 * number2;
}

function multiplyNumbers(){
    let multiplyNumber1 = Number(document.querySelector("#factor1").value);
    let multiplyNumber2 = Number(document.querySelector("#factor2").value);

    const product = multiply(multiplyNumber1,multiplyNumber2);

    document.querySelector("#product").value = product;
}

document.querySelector("#multiplyNumbers").addEventListener("click", multiplyNumbers);


/* Open Function Use - Divide Numbers */

function divide(number1,number2){
    return number1 / number2;
}

function divideNumbers(){
    let divideNumber1 = Number(document.querySelector("#dividend").value);
    let divideNumber2 = Number(document.querySelector("#divisor").value);

    const quotient = divide(divideNumber1,divideNumber2);

    document.querySelector("#quotient").value = quotient;
}

document.querySelector("#divideNumbers").addEventListener("click", divideNumbers);

/* Decision Structure */


    // Add event listener to the "Get Total Due" button
document.querySelector("#getTotal").addEventListener("click",function() {
    // Get the numeric value entered by the user in the subtotal 
    const subtotal = parseFloat(document.querySelector("#subtotal").value);

     //Check if the box for memebership ahs been ticked 
    const cMember = document.querySelector("#member").checked;

    const total = cMember ? subtotal * 0.8 : subtotal;

    document.querySelector("#total").textContent = `$ ${total.toFixed(2)}`;

});     


/* ARRAY METHODS - Functional Programming */

let Numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13];

/* Output Source Array */

document.querySelector("#array").textContent = Numbers.join(", ");

/* Output Odds Only Array */

const oddNumbers = Numbers.filter(number => number % 2 !== 0);

document.querySelector("#odds").innerHTML = oddNumbers.join(", ");

/* Output Evens Only Array */

const evenNumbers = Numbers.filter(number => number % 2 === 0);

document.querySelector("#evens").innerHTML = evenNumbers.join(", ");


/* Output Sum of Org. Array */
const aSum = Numbers.reduce((sum,number) => sum + number, 0);

document.querySelector("#sumOfArray").innerHTML = aSum;

/* Output Multiplied by 2 Array */

const aMultiply = Numbers.map(number =>number * 2);

document.querySelector("#multiplied").innerHTML = aMultiply.join(",");

/* Output Sum of Multiplied by 2 Array */

const multiplySum = aMultiply.reduce((sum,number) => sum + number, 0);

document.querySelector("#sumOfMultiplied").innerHTML = multiplySum;