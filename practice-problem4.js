/* 
    4. একটা array এর মধ্যে অনেকগুলা ইংরেজি জাভাস্ক্রিপ্ট রিলেটেড বইয়ের নাম (স্ট্রিং) আছে। জাভাস্ক্রিপ্ট রিলেটেড বইয়ের নাম না জানলে, গুগলে সার্চ দিয়ে বের করো। তারপর একটা লুপ চালিয়ে দেখো কোন কোন বইয়ের নামের মধ্যে "javascript" আছে। তাহলে সেই বইগুলার নাম আরেকটা array এর মধ্যে রাখবে। আর হ্যাঁ, যখন javascript আছে কিনা চেক করবে তখন খেয়াল করবে বড়হাতের নাকি ছোট হাতের অক্ষর সেটা বাদ দিয়ে চেক করতে। অর্থাৎ কেইস ইনসেন্সিটিভ হবে। 
*/

const javascriptBook = [
    'A Smarter Way to Learn JavaScript',
    'JavaScript: The Definitive Guide',
    'Head First JavaScript Programming: A Brain-Friendly Guide',
    'Eloquent JavaScript, 3rd Edition',
    'The Principles of Object-Oriented JavaScript',
    'JavaScript: The Good Parts',
    'JavaScript and JQuery: Interactive Front-End Web Development',
    'Secrets of the JavaScript Ninja',
    'Learn JavaScript VISUALLY with Interactive Exercises',
    'Professional JavaScript for Web Developers'
];

//used indexOf()
/* const searching = "javascript";
let bookList = [];
for(const book of javascriptBook){
    if(book.toLowerCase().indexOf(searching.toLowerCase()) != -1){
        bookList.push(book);
    }   
}
console.log(bookList); */


// used includes
const searching = "javascript";
let bookList = [];
for(const book of javascriptBook){
    if(book.toLowerCase().includes(searching.toLowerCase())){
        bookList.push(book);
    }   
}
console.log(bookList);
