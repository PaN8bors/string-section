// ESM syntax is supported.
const myStr = "hello class";

console.log(myStr.replace('c', 'C'));
console.log(myStr.replace('h', 'H'));
console.log(myStr.concat('!'));
console.log(myStr.toUpperCase());
console.log('hello class');
console.log(myStr.repeat(5));
console.log(myStr.replaceAll('hello class', 'Hello Class'));
for (const value of myStr) {
    console.log(value);
}