const products = [
    'Dell hardcore i29 200GB laptop',
    'iphone 1TB camera flashlight Phone',
    'Dell yellow laptop with black camera',
    '1X59 Lenovo commercial yoga laptop',
    'LG supernova laptop',
    'HTC low price phone',
    'Dell purple color phone with Laptop'
];

const searching = 'camera';
// indexOf() Method
/* The indexOf() method returns the first index at which a given element can be found in the array, or -1 if it is not present. */
const output = [];
for (const product of products) {
    if (product.toLowerCase().indexOf(searching.toLowerCase()) != -1) {
        // output.push(product);
    }
}
// console.log(output)

// includes() Method
/* The includes() method performs a case-sensitive search to determine    whether one string may be found within another string, returning true or false as appropriate. */
for (const product of products) {
    if (product.toLowerCase().includes(searching.toLowerCase())) {
        // output.push(product);
    }
}
// console.log(output);

// startsWith() Method
/* The startsWith() method determines whether a string begins with the characters of a specified string, returning true or false as appropriate */
for (const product of products) {
    if (product.toLowerCase().startsWith(searching.toLowerCase())) {
        // output.push(product);
    }
}
// console.log(output);

// endsWith() Method
/* The endsWith() method determines whether a string ends with the characters of a specified string, returning true or false as appropriate. */
for (const product of products) {
    if (product.toLowerCase().endsWith(searching.toLowerCase())) {
        output.push(product);
    }
}
console.log(output);