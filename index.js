const words = "I am a teacher and I love teaching. There is nothing as more rewarding as educating and empowering people. I found teaching more interesting than any other jobs. Does this motivate you to be a teacher?";
function WordCount(str) {
    return str.split(" ").length;
}
console.log("The number of words in the paragraph are:");
console.log(WordCount(words));


const sentence = `%I $am@% a %tea@cher%, &and& I lo%#ve %tea@ching%;. There $is nothing; &as& mo@re rewarding as educa@ting &and& @emp%o@wering peo@ple. ;I found tea@ching m%o@re interesting tha@n any other %jo@bs. %Do@es thi%s mo@tivate yo@u to be a tea@cher!?`;
function cleanText(str) {
    return str.replace(/[^a-zA-Z ]/g, "");
}
console.log('clean text is:')
console.log(cleanText(sentence));

//to display random number between 0-9, and 
var arr = [];
const unique = {}
while (arr.length < 7) {
    var r = Math.floor(Math.random() * 9) + 1;
    if (arr.indexOf(r) === -1)
        arr.push(r);
}
console.log('The seven unique random numbers')
console.log(arr);

