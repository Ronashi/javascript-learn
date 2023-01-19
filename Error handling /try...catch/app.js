const user = { email: 'jdoe@gmail.com'};



try{

    //produce a ReferenceError
//   myFunction();

//produce a typeError
// null.myFunction();

//Will produce syntaxError

// eval('Hello World ');

//will produce an URIError
// decodeURIComponent('%');
if(!user.name)  {
   // throw 'User has no name';
   throw new SyntaxError('User has no name');
}

}  catch(err) {
    console.log(`User `)
  console.log(err);
//   console.log(err.message);
//   console.log(err.name)
//   console.log(err instanceof ReferenceError)

} finally {
    console.log('Finally runs regardless of the result...');
}

console.log('Program continues...');