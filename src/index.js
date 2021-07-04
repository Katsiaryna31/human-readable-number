let numbers = [['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'],
               ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'],
               ['zero', 'ten', 'twenty', 'thirty', 'forty','fifty', 'sixty', 'seventy', 'eighty', 'ninety'],
               ['hundred']];



module.exports = function toReadable (number) {
  let str = number.toString();
  let array = Array.from(str).reverse();
  switch(array.length) {
    case 1: 
    return numbers[0][Number(array[0])];
  
    case 2:
      if (number < 20) {
        return numbers[1][number - 10];
      } else if (number % 10 === 0 && number >= 20) {
        return numbers[2][number/10];
      } else {
        return `${numbers[2][array[1]]} ${numbers[0][array[0]]}`;
      }
      
      case 3:
        if (number % 100 === 0) {
            return `${numbers[0][array[2]]} ${numbers[3][0]}`;
          } else if (number%100 < 10){
            return `${numbers[0][array[2]]} ${numbers[3][0]} ${numbers[0][array[0]]}`;
          } else if (number%100 < 20 && number%100 >= 10){
            return `${numbers[0][array[2]]} ${numbers[3][0]} ${numbers[1][number%100 - 10]}`;
          } else if (number % 100 !== 0 && number % 10 === 0) {
              return `${numbers[0][array[2]]} ${numbers[3][0]} ${numbers[2][array[1]]}`;
            } else {
            return `${numbers[0][array[2]]} ${numbers[3][0]} ${numbers[2][array[1]]} ${numbers[0][array[0]]}`;
          }
  }
}
