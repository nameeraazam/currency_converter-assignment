#! usr/bin/env node
import inquirer from "inquirer";
const currency = {
    USD: 1,
    EUR: 0.91,
    GBP: 0.76,
    NIR: 74.57,
    PKR: 280,
};
let user_answer = await inquirer.prompt([
    {
        name: "from",
        message: "Enter from currency",
        type: "list",
        choices: ["USD", "EUR", "GBP", "NIR", "PKR"],
    },
    {
        name: 'to',
        message: 'Enter from currency',
        type: 'list',
        choices: ['USD', 'EUR', 'GBP', 'NIR', 'PKR']
    },
    {
        name: 'amount',
        message: 'Enter your amount',
        type: 'number'
    }
]);
let fromAmount = currency[user_answer.from];
let toAmount = currency[user_answer.tp];
let amount = user_answer.amount;
let baseAmount = amount / fromAmount; //usd base currency
let converterAmount = baseAmount * toAmount;
console.log(converterAmount);
console.log(fromAmount);
console.log(toAmount);
console.log(amount);
