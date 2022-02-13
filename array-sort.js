// sort number, lower to upper
const numbers = [4, 7, 1, 3, 9, 2, 5];
const sortNumbers = numbers.sort();
// console.log(sortNumbers);

// sort string, a to z
const friends = ['kamrul', 'hasan', 'babu', 'arafat', 'maysha', 'fahim', 'sumita'];
// const sortedFrinds = friends.sort();
// console.log(sortedFrinds);
// const reversedFriends = friends.reverse(friends);
// console.log(reversedFriends);

const sortedReversedFriends = friends.sort().reverse();
// console.log(sortedReversedFriends);


// number sorting
const bigNumbers = [66, 58, 81, 92, 9, 6, 37, 13, 2];
const sortedBigNumbers = bigNumbers.sort(function(a, b){
    return a - b;
});
console.log(sortedBigNumbers);