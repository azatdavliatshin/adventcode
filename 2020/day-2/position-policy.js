const {input} = require('./input');

const getValidPasswordsAmount = (list) => {
    return list.filter(line => {
        const [policy, password] = line.split(': ');
        const [range, character] = policy.split(' ');
        const [pos1, pos2] = range.split('-');
        return (password.charAt(pos1 - 1) === character) ^ (password.charAt(pos2 - 1) === character);
    });
};

console.log(getValidPasswordsAmount(input).length);