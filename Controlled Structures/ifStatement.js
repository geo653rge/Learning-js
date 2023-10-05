// const num = 6;
// if (num => 6){


// console.log( ' This number is greater than 6 or equal to six') ;

// }
// If else statements 
// checking if a number is positive or negative
const no = -9;
if (no > 0){


console.log( ' This number is positive') ;

}



else

{
    console.log( ' This number is negative') ;
}


//Switch Statements

let value = 5 ;
switch (value){
case 0 :

    console.log( 'Number is false') ;
    break;
case 1:
     console.log( 'Number is less than 5') ;
     break ;
     case 2:
        console.log(' Number is great than 5') ;
        break ;
        default:
        console.log('Number is 5');

}

//Ternary Operator 
//The Ternary operator is the only javascript operator that takes three operands
//The condition is evaluated as true or false .
//A question mark(?) separates our conditional from our true expression.
//A colon (:) separates our true expression from false expression .

let numero = 0 ;

let result = numero >= 0 ? "Positive" : "Negative" ;

console.log(`The number is ${result}`);

//using For loop to iterate for even numbers from 0 to 10

for (let i = 0; i <= 10 ; i++) {

    if (i % 2===0)
    {
        console.log(i);
    }
}

//Using Break to Exit a loop
//The Break statement terminate the current loop , switch , or label statement and 
//transfer program control to the statement following the terminted statement.
//The break statement includes an optional label that allows the program to break out of a labeled statement.


let collection = ["x","y",3,5,"a"];
let containsNumber = false;
for(i = 0; i < collection.length; i++){

if (typeof collection[i] === "number") {
    containsNumber = true;
    console.log("The number found is:" + collection[i]);
    break;
}
}


