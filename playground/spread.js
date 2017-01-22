// function add(a, b) {
//     return a + b;
// }
//
// console.log(add(3, 1));
//
// var toAdd = [9, 5];
// console.log(add(...toAdd));
//
// var groupA = ['Princess', 'Diego'];
// var groupB = ['Milo'];
// var final = [3, ...groupA, ...groupB];
//
// console.log(final);

var person = ['wilmer', 25];
var personTwo = ['Princess', 25];
function greeting (name, age) {
    var returnSen = `Hi ${name}, you are ${age}`;
    return console.log(returnSen);
}

greeting(...person);
greeting(...personTwo);

var names = ['Emilo', 'Imelda'];
var final = [...names, 'Wilmer'];
final.forEach((name) => {
    console.log(`Hi ${name}`);
});
