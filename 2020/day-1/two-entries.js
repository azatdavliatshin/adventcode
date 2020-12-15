const {input} = require('./input');

module.exports.entriesOfSum = entriesOfSum = (expenses, sum = 2020) => {
    const diffreneceSet = new Set();

    for (const expense of expenses) {
        if (diffreneceSet.has(expense)) {
            return [expense, sum - expense];
        }
        diffreneceSet.add(sum - expense);
    }
};

const [exp1, exp2] = entriesOfSum(input);

console.log(exp1 * exp2);