/* 
    ২) একটা অ্যারেতে তোমার বন্ধু বা বান্ধুবির পুরা নাম রাখো এবং যাদের নাম md দিয়ে শুরু হয় সেই নামগুলো প্রথমে console log করবে। তারপর পুরা জিনিসটা একটা ফাংশনে রাখো। এবং তোমার কাজ হবে। যার যার নাম md দিয়ে শুরু হয়। সেই নামগুলো রিটার্ন করবে। 

    এক্সট্রা: চেষ্টা করবে কারো নাম যদি MD বা Md বা md হয়। তাদের নাম যেন তোমার রিটার্ন রেজাল্টে যোগ হয়। 
*/


function friendsName(friendList) {
    if(Array.isArray(friendList) == false){
        return 'Please enter an array'
    }
    let list = [];
    for (const friend of friendList) {
        const searching = 'md';
        if (friend.toLowerCase().startsWith(searching.toLowerCase())) {
            list.push(friend);
        }        
    }
    return list;
}
const friendList = ['md kamrul', 'Md Jamil', 'shakil', 'anamul', 'MD hasan', 'babu']
const friends = friendsName(friendList);
console.log(friends);