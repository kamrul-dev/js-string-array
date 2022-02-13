const numbers = [1, 3, 5, 6, 7, 9, 20, 21, 24, 25, 26, 50]
// slice --> array elements but it does not change the array.
const numberSliced = numbers.slice(4, 8);
// console.log(numberSliced); 
// console.log(numbers); 

//splice --> remove the portion of array elements , it changes the array
// const numberSpliced = numbers.splice(4, 2);
// console.log(numberSpliced);
// console.log(numbers);

// remove element and place other elements that removed elements positon
const numberSpliced2 = numbers.splice(4, 2, 99, 111, 888,777);
console.log(numberSpliced2);
console.log(numbers);