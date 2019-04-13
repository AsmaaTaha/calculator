const operationsNotPermittingZeros = ['div', 'mod'];

module.exports = (nameOdOperation, ...operands) => {

  const wrongInput = operands.some(e => isNaN(e));
  debugger

  const divisionByZero = operationsNotPermittingZeros.includes(nameOdOperation) && operands.slice(1).includes(0);

  return !(wrongInput || divisionByZero);


  // for (let index = 0; index < operands.length; index++) {
  //   if ((isNaN(operands[index])) || (nameOdOperation == "div" && operands[1] == 0)) {
  //     return false
  //   }

  // }
  // return true;
};