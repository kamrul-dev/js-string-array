/* 
    ১) একটা অ্যারেতে তোমার পছন্দের খাবার গুলো রাখো এবং যে সব খাবারের নামের মধ্যে m আছে সেসব খাবারের নামগুলো console log করো। 
*/
const favoriteFood = ['rice', 'egg-oMlet', 'Mumlet', 'chicken', 'Bief'];

const searching = 'm';
for(const food of favoriteFood){
    if(food.toLowerCase().indexOf(searching.toLowerCase()) != -1){
        console.log(food);
    }
}