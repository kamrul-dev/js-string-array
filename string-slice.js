const anthem = 'Amar Sonar Bangla Ami Tomai Valobashi';
//split()
const words = anthem.split(' ');
const withoutA = anthem.split('a');
// console.log(withoutA);

// slice()
const smallSlice = anthem.slice(5, 13);
// console.log(smallSlice);

//substr()
const anotherPart = anthem.substr(28, 9);
// console.log(anotherPart);

//substring()
const anotherAnotherPart = anthem.substring(11, 15)
// console.log(anotherAnotherPart);

// concat()
const first = 'Amader';
const second = 'City';
// const fullString = first + second;
const fullString = first.concat(second).concat('Dhaka');
console.log(fullString);

const words2 = ['alak', 'balak', 'come', 'dalim'];
// const allJoined = words2.join('');
// const allJoined = words2.join(' ');
// const allJoined = words2.join(',');
// const allJoined = words2.join(', ');
const allJoined = words2.join('-wwww-');
console.log(allJoined);