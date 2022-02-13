//Unlimited parameters to a function using arguments

function addNumbers() {
    // console.log(arguments[1]);
    let result = 0;
    for(const num of arguments){
        result = result + num;
    }
    // const result = num1 + num2;
    return result;
}
const sum = addNumbers(23, 13, 50, 10, 4);
// console.log(sum);


function getFullName(firstName, lastName){
    // const fullName = firstName + ' ' + lastName;
    let fullName = '';
    for(const part of arguments){
        fullName = fullName + part + ' ';
    }
    return fullName;
}
const name = getFullName('kamrul', 'hasan', 'bin', 'Shamsul', 'Alam');
console.log(name);