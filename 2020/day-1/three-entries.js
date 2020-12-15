const {entriesOfSum: entries2OfSum} = require('./two-entries.js');
const {input} = require('./input');

const entriesOfSum = (expenses, sum = 2020) => {
    for (let index = 0; index < expenses.length; index++) {
        const element = expenses[index];
        const entries = entries2OfSum(expenses.slice(index + 1), sum - element);
        if (entries) {
            return [element, ...entries];
        }
    }
};

const [exp1, exp2, exp3] = entriesOfSum(input);

console.log(exp1 * exp2 * exp3);