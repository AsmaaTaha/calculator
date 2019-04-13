// console.log(process.argv)
const operations = require('./Operations');
const validation = require('./Validation');
const params = process.argv.slice(2);

const currentOperationIndex = params.findIndex(item => item.startsWith('--'))

const currentOperationName = params.splice(currentOperationIndex, 1).map(e => e.substring(2))[0];

const operands = params.map(e => Number(e));
let mathematicalOperation = operations[currentOperationName];
if (validation(currentOperationName, ...operands))
    console.log(mathematicalOperation(...operands));

else {
    console.log("can't complete these operation")
}
