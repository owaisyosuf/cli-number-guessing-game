#! /usr/bin/env node
import inquirer from "inquirer";
const randomNo = Math.floor(Math.random() * 6 + 1);
console.log("please select a no between 1 to 6");
const ans = await inquirer.prompt([
    { message: "select your number", type: "number", name: "userGuessNumber" },
]);
if (ans.userGuessNumber === randomNo) {
    console.log("congratulation you win the game");
}
else {
    console.log("you lose the game");
}
;
