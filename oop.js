//person constructor

// function person(name,dob){
//     this.name = name;
//     // this.age = age;
//     this.birthday = new Date(dob);
//     this.calculateAge = function(){
//        const diff = Date.now() - this.birthday.getTime();
//        const ageDate = new Date(diff);
//        return Math.abs(ageDate.getUTCFullYear()  - 1970); 
//     }
// }

// // const rocky = new person('Rocky',19);
// // const  mellow = new person('mellow' ,36)

// // console.log()

// const mellow = new person('mellow', '9-10-2014');
// console.log(mellow);
// console.log(mellow.calculateAge());


//prototypes
//Object.protypes
//Person.prototype

// function person(firstName, lastName, dob){
//         this.firstName = firstName;
//         this.lastName = lastName;
//         // this.age = age;
//         this.birthday = new Date(dob);
//         this.calculateAge = function(){
//            const diff = Date.now() - this.birthday.getTime();
//            const ageDate = new Date(diff);
//            return Math.abs(ageDate.getUTCFullYear()  - 1970); 
//         }
//     }

// //get full name

// person.prototype.getFullName = function(){
//     return `${this.firstName} ${this.lastName}`;
// }

// //get married
// person.prototype.getsMarried = function(newLastName){
//     this.lastName = newLastName;
// }

    
// const mellow = new person('Mellow','Smiles','8-12-2007');
// const pinky = new person('Pinky','Katnis','May 20 1999');

// console.log (pinky);

// console.log(mellow.calculateAge());
// console.log(pinky.getFullName());

// pinky.getsMarried('smith');
// console.log(pinky.getFullName());

// console.log(pinky.hasOwnProperty('firstName'));  //outputs either true or false






// //person constructor
// function person (firstName,lastName){
//     this.firstName = firstName;
//     this.lastName = lastName;
// }
// //greeting
// person.prototype.greeting = function(){
//     return `Hello there ${this.firstName} ${this.lastName}
//     `; 
// }

// const person1 = new person('mellow','compy');

// // console.log(person1.greeting());

// function Customer(firstName, lastName, phone, membership ){
//     person.call(this, firstName, lastName);

//     this.phone = phone ;
//     this.membership = membership;
// }

// //inherit the person prototype model
// Customer.prototype = Object.create(person.prototype);

// //make customer.prototype return customer
//  Customer.prototype.constructor = Customer ;

// //create customer
// const customer1 = new Customer ('John', 'Wick', '079395844','Standard');

// console.log(customer1);

// //customer greeting
// Customer.prototype.greeting = function(){
//     return `Hello there ${this.firstName} ${this.lastName}
//     welcome to our company`;
// }


// console.log(customer1.greeting());




// //Object.create


// const personPrototypes = {
//     greeting: function(){
//         return`Hello there ${this.firstName} ${this.lastName}`;
//     },
//     getsMarried: function(newLastName){
//         this.lastName = newLastName;
//     }
// }
// const Alham = Object.create(personPrototypes);
// Alham.firstName = 'Alham';
// Alham.lastName = 'sheikh';
// Alham.age = 25;

// Alham.getsMarried('Asatam');

// console.log(Alham.greeting());

// const George = Object.create(personPrototypes, {
//     firstName:{value:'George'},
//     lastName:{value:'Floyd'},
//     age:{value:27}
// });

// console.log(George);

// console.log(George.greeting());
// console.log(Alham.getsMarried());



// //CLASSES

// class person{
//     constructor(firstName,lastName,dob){
//      this.firstName = firstName;
//      this.lastName = lastName;
//      this.birthday = new Date(dob);
//     }


//     greeting(){
//          return `Hello there ${this.firstName} ${this.lastName}`;
// }
//     calculateAge(){
//         const diff = Date.now() - this.birthday.getTime();
//         const ageDate = new Date(diff);
//         return Math.abs(ageDate.getUTCFullYear() -1970);

//     }
//     getsMarried(newLastName){
//         this.lastName = newLastName;
//     }
//     static addNumbers(x,y){
//         return x+y;
//     }
// }
// const  Milliam = new person('Milliam','Wanjiku','10-13-1991');

// Milliam.getsMarried('Thompson');

// console.log(Milliam.greeting());

// console.log(person.addNumbers(1,2));




// //SUB CLASSES

// class person{
//     constructor(firstName, lastName){
//         this.firstName = firstName;
//         this.lastName = lastName;
//     }


// greeting() {
//     return `Hello there ${this.firstName} ${this.lastName}`;
// }
// }
// class Customer extends person {
//     constructor(firstName, lastName, phone, membership){
//         super(firstName, lastName);

//         this.phone = phone;
//         this.membership = membership;

//     }
//     static getMembershipCost(){
//         return 500;
//         }
//     }


// const Katnis = new Customer('Katnis','misslas','0732985304','Standard');

// console.log(Katnis);
// console.log(Katnis.greeting());
// console.log(Customer.getMembershipCost());