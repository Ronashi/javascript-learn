// function alertme() {
//     alert('this is a string data type in JS')
// }
// //properties
// let name = "Mark Zidane"
// document.write(name.toUpperCase());


// //number data type
// let a = 0.1 + 0.4;
// console.log(a);

// //Number data type
// console.dir(Number)
// Number()
// console.log

// //Null and undefined data
// console.log()
//     //console.log(isNaN(NaN)); 

// //escaping (\n  \t \)
// var person = "i am \"Maxwell\"";
// document.write(person);

// //operator (unary an d binary )

// //coercion(change one data type to another)
// let a = 10;
// let b = "5";
// document.write(a + b)

// document.write(5 < 4 < 3)
//     //IMPLICIT COERCION 
// console.log("50" - 10)
// console.log(4 > 2)

// let a = 4 > '3';
// console.log(a);

// //EXPLICIT COERCION 
// console.log(string(123));
// console.log(string(true));

// let b = '123'
// console.log(Number(b))

// //try and catch
// const NUMBER = 10;

// try {
//     NUMBER = 5; //..'try' your code
// } catch (error) {
//     console.log(error); //...deal with error here 
// }
// //CONST
// const person = {
//     name: 'John',
//     age: '24'
// }
// person.name = 'Sara';
// person.age = '34'
// console.log(person);



// //template literals
// const name = 'John';
// const age = 30;
// const job = 'web Developer';
// const city = 'Miami';
// let html;
  
// //without template
// html = '<ul>'
// '<li>Name: ' + name + '</li>'
// '<li>Age: ' + age + '</li>'
// '<li>Job: '+ job + '</li>'
// '<li>City: ' + city + '</li>'
// '</ul>';
// with template strings
// html = `
//   <ul>
//   <li>Name: ${name}</li>
//   <li>Age: ${age}</li>
//   <li>Job: ${job}</li>
//   <li>City: ${city}</li>
//   <li>$</li>
//   </ul>
// `


// document.body.innerHTML = html



// //CREATE ARRAYS

// const numbers = [32,34,45,65,67,67] ;
// const fruit = ['APple','pine','kiwi','pear'];
// const mixed = [22,'heft',true,undefined,{a:1 ,b:1},new Date()];
// let val;
 
// val = numbers.length;


// //MUTATING ARRAYS
// //add on to end
// numbers.push(300);
// //add to front
// numbers.unshift(120);
// //Take off from end
// numbers.pop();
// //Take off from front
// numbers.shift();
// //splice values 
// numbers.splice(1,3);
// //reverse <-->
// numbers.reverse();

// //CONCANATE arrays
// val = numbers.sort(funtion(x,y){
//     return x - y;          //reverse sort (return y-x; )
// });

// //find 
// function under50(num){
//      return num < 50 ;
// }
// val = numbers.find(under50);

// console.log(numbers);
// console.log(val);


// const person = {
//     Firstname: 'Steve',
//     LastName:'Smith',
//     age:30,
//     email:'mimi@gmail.com',
//     hobbies:['music,'hockey'],
//     address:{
//         city:'miami'
//         state:'FL'
//     },
//   geBirthYear: function(){
//     return 1983;
//   }
// }

// let val;

// val = person ;
// //specific value(get)
// val = person.Firstname;
// val = person['lastname'];
// val = person.age;
// val = person.hobbies[1];
// val = person.address['city'];
// val = person.getBirthYear();


// console.log(val);
// const people = [
//     {name:'John', age: 30},
//     {name: 'Mike',age: 23},
//     {name:'pius',age:46}
// ];

// for(let i = 0; i< people.length;i++){
//   console.log(people[i].name)
// } 




// //Date and times

// let val;

// const today = new Date();
// let birthday = new Date('9-10-1990 11:25:00');
// birthday = new Date('9/10/1990);

// val = today.getMonth();
// val = today.getHours();
// val = today.getTime();

// birthday.setMonth(2);
// birthday.setDate(12);
// birthday.setMinutes(30);

// console.log(typeof val)
// console.log(birthday);





//if statements and comparison operators

// const id = 100;

// //EQUAL TO
// if (id ==100){
//     console.log('CORRECT');
// }else{
//     console.log('INCORRECT');
// }

// //NOT EQUAL TO
// if(id != 101){
//     console.log('CORRECT');
// }else{
//     console.log('INCORRECT');
// }

// //EQUAL TO Value &type
// if (id ==100){
//     console.log('CORRECT');
// }else{
//     console.log('INCORRECT');
// }

// //Test if undefined
// if(typeof id !== 'undefined'){
//     console.log(`The ID is ${id}`)
// }else{
//     console.log('NO ID')
// }

// //greater or less than
// same as the testing method .(>=   or <= )
 


// //LOGICAL OPERATORS

// const name = 'steve';
// const age = 30;

// if (age  > 0 && age < 12){
//     console.log(`${name} is a child`);

// }else if (age >= 13 && age <=19){
//     console.log(`${name} is a teenager`)
// }else{
//     console.log(`${name} is an adult`)
// }

// //OR ||
// if(age < 16 || age > 65){
//     console.log(`${name} can not run in the race`);
// } else {
//     console.log(`${name} is registered for the race` )
// }

// // TERNARY operator
// console.log(id === 100 ? 'correct' : 'incorrect');

// //WITHOUT BRACES

// if(id === 100)
//     console.log('correct');
// else
//     console.log('incorrect');


// //switches

// const color = 'red'

// switch(color){
//    case 'red':
//        console.log('COlor is red');
//        break;
//     case 'blue':
//         console.log(COlor is blue);
//         break;
//     default:
//         console.log('COlor is neither red or blue');
//         break;
// }


// //function declaration and expression 


// function greet(){
//     console.log('hello there');  //return 'hello there';
// }

// greet();   //console.log(greet());

// function grem(firstName =='sir or', lastName =='madam'){
//     // if(typeof firstName === 'undefined'){firstName ='Sir or'}
//     // if(typeof lastName === 'undefined'){lastName ='Madam '}

//     return 'Welcome ' + firstName +' '+ lastName;
// }

// console.log(grem('John','Draper'));


//function exppresion
// const square = function (x ){
//     return x*x;
// };
// console.log(square();



// //Immediately invokable expression -IIFEs
// (function(){
//     console.log('IIFE Ran..');
// })();

// (function (name){
//     console.log('Hello' + name)
// })('Mellow')


// //PROPERTY METHODS

// const todo ={
//     add: function(){
//         console.log('Add todo ..');
//     }
//     edit:function(id){
//         console.log(`Edit todo ${id}`);
//     }
// }
// todo.delete = function(){
//     console.log('Delete todo...')
// }
// todo.add();
// todo.edit(22);
// todo.delete()



//looping

// //FOR LOOP

// for(let i = 0; i < 10; i++){
//     if(i === 2){
//         console.log('2 is my favourite');
//         continue;
//     }
//     if (i === 5){
//         console.log('stopping the loop');
//         break;
//     }
//     console.log('Number'+ i);
// }


//WHILE LOOP

// let i = 0;

// while(i<10){
//     console.log('Number' +i);
//     i++;
// }


//DO WHILE

// let i = 0;

// do {console.log('NUmber '+i);
// i++;
// }
// while(i<10);


// //LOOP THROUGH THE ARRAY
// const cars = ['ford', ' chevy' , 'Honda' ,'toyota'];

// for (let i = 0; i < cars.length; i++){
//     console.log(cars[i]);
// }

// //FOR EACH
// cars.forEach(function(car,index, array){
//     console.log(`${index}:${car}`);
//     console.log(array);
// });

//MAP

// const users = [
//     {id:1,name:'john'},
//     {id:2,name:'karen'},
//     {id:3,name:'ronashi'}
// ];

// const ids = users.map(function(user){
//     return user.id;
// });

// console.log(ids);



//FOR IN LOOP
// const user = {
//     firstName: 'John',
//     Lastname:'peter',
//     age:35
// }
// for (let x in user){
//     console.log(`${x} : ${user[x]}`);
// }



//WINDOW METHODS/OBJECT /PROPERTIES

// console.log(123);

//alert
//alert('Hello World');

//prompt
// const input = prompt();
// alert(input);


//CONFIRM
// if(confirm('Are you sure')){
//     console.log('YES');
// }else {
//     console.log('NO');
// }


// let val;
// //outer height and width
// val = window.outerHeight;
// val = window.outerWidth;
// //inner height and width
// val = window.innerHeight;
// val = window.innerWidth;

// //scroll points
// val = window.scrollY;
// val = window.scrollY;

// //location object
// val = window.location;
// val = window.location.hostname;
// val = window.location.port;
// val = window.location.href;

// // //redirect 
// // window.location.href = 'http://google.com';
// // //reload
// // window.location.reload();

// //history object
// // window.history.go(-2);

// // val = window.history.length;


// //Navigator Object
// val = window.navigator;
// val = window.navigator.appName;
// val = window.navigator.appVersion;
// val = window.navigator.userAgent;
// val = window.navigator.vendor;



// console.log(val);



//scope

//GLOBAL SCOPE

// var a = 1;
// let b = 2;
// const c = 3;

// // function test(){   //function scope
// //     var a = 4;
// //     let b = 5;
// //     const c = 6;
// //     console.log('Function Scope: ' ,a,b,c);
// // }

// // test();

// // if(true){
// //     //block scope
// //     var a = 4               //overwrites the global scope var
// //     let b = 5;
// //     const  c = 6;
// //     console.log('If sccope: ',a,b,c );
// // }


// for(var a = 0; a<10; a++){              //'let' overwrites everything on the global scope
//    console.log(`loop: ${a}`) ;
// }

// console.log('Global Scope: ',a,b,c );



