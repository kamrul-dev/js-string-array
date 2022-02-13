function meghFriend(friends) {
    if (Array.isArray(friends) == false) {
        return 'Please provide a array!';
    }
    let mega = friends[0];
    for (const friend of friends) {
        if (friend.length > mega.length) {
            mega = friend;
        }
    }
    return mega;
}
const friends = ['kamrul', 'hasan', 'kamrulHasan' ,'babu'];
const myBigBuddy = meghFriend(friends);
// console.log(myBigBuddy);

if(friends.indexOf('babu') != -1){
    // console.log('babu exist using indexOf ');
}

if(friends.includes('babu')){
    console.log('babu exist using inlcudes');
}

// concat

const first = [1, 2, 5, 6];
const second = [7, 8, 9];
const combined = first.concat(second);
console.log(combined)