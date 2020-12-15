const {input} = require('./input');

const getValidPasswordsAmount = (list) => {
    return list.filter(line => {
        const [policy, password] = line.split(': ');
        const [range, character] = policy.split(' ');
        const [min, max] = range.split('-');
        const amountOfLetter = password.split('').filter(char => char === character).length;
        return +min <= amountOfLetter && amountOfLetter <= +max;
    });
};

console.log(getValidPasswordsAmount(input).length);