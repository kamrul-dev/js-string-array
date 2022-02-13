/*  toLowerCase() method → convert uppercase letter to lower case letter.

    toUpperCase() method → Convert lowercase letter to upper case letter.

    Compare : when we want to compare between two strings that time we have to convert both strings in the same letter case(both string should lowercase or both strings should uppercase) .
 */
const antem = 'Amar Sonar Bangla Ami Tomai Valobashi';
const search = 'valo';

const userInput = 'blACkPinK';
const savedUserName = 'blackPink';
// console.log(userInput.toLowerCase());
// console.log(savedUserName.toLowerCase());
if(userInput.toLowerCase() == savedUserName.toLowerCase()){
    console.log('user exists');
}