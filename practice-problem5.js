/* 
    5. অনেকগুলা সংখ্যাওয়ালা একটা array নাও। তারপর সেই array কে sort করো। sort হবে ছোট থেকে বড় সংখ্যার সিরিয়াল অনুসারে। 
*/

const number = [12, 100, 60, 50, 4, 3, 300, 150, 500, 7, 1, 13];
console.log(number.sort(function(a, b){
    return a - b;
}));