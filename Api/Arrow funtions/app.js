// const sayHello =function(){
//     console.log('hello');
// }

// const sayHello = () => {
//     console.log('hello');
// }

//one line does not need braces
// const sayHello = () => console.log('hello');

// const sayHello = () => 'Hello';
//same as above
// const sayHello = function(){
    // return 'Hello'
// }


//return object
// const sayHello = () => ({ msg: 'Hello'})

// single param does not need paranthesis
// const sayHello = name => console.log (`Hello ${name}`);

// const sayHello = ( firstName, lastName) => console.log(`Hello 
// ${firstName} ${lastName}`);

// sayHello('Rgn' , 'Ares');

const users = ['Ares', 'JOhn', 'Xandra'];

// const nameLengths = users.map(function(name){
//     return name.length;
// });

//shorter
// const nameLengths = users.map((name) => {
//     return name.length;
// });

//shortest
const nameLengths = users.map(name => name.length);

console.log(nameLengths);