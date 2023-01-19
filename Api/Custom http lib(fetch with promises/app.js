const http = new EasyHTTTP;

// //Get users
// http.get('https://jsonplaceholder.typicode.com/users');

// //assynchronous way
// http.get('https://jsonplaceholder.typicode.com/users');

//     .then(data => console.log(data))
//      .catch(err => console.log(err));



//user data
const data = {
    name: 'Rofessor Kamami',
    username:'Mike Tyson',
    email: 'mellowcompany@gmail.com'
}

// create post

http.post('https://jsonplaceholder.typicode.com/users',data);

     then(data => console.log(data))
     .catch(err => console.log(err));


//update post
// http.post('https://jsonplaceholder.typicode.com/users/2',data);

//      .then(data => console.log(data))
//      .catch(err => console.log(err));

     //delete post

    //  http.delete('https://jsonplaceholder.typicode.com/users/2');

    //  then(data => console.log(data))
    //  .catch(err => console.log(err));
