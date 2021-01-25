const words = ['Environmental', 'Systems', 'Research', 'Institute'];

const longest = words.reduce((accumulator, currentValue) => {
    if (accumulator.length > currentValue.length){
        return accumulator
  } else {
        return currentValue
  }
});
 
console.log('longest', longest);