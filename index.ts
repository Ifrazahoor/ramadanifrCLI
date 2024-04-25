#! /usr/bin/env node

import inquirer from "inquirer";
// 1) computer will generate a random number - Done
// 2)user input for guessing number - Done
//3)compare user inputwith computer generate number and show result - Done

const randomNumber = Math.floor(Math.random() * 6 + 1);
console.log(randomNumber);

const answers = await inquirer.prompt([
    {
        name: "userguessedNumber",
        type: "number" ,
        message: "please guess a number between 1-6: ",
    },
]);

if(answers.userGuessedNumber === randomNumber ){
    console.log("congratulations! you guessed right number.")
    }else {
console.log("you guessed wrong number");
    } 
 