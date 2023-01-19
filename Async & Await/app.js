// async function myfunc(){
//     return 'Hello ';
//     const promise = new promise((resolve,reject) => {
//         setTimeout(() => resolve('Hello'),1000);
//     });

//     const error  = true;

//     if(!error){
//         const res = await promise; ///wait till promise is resolved
//     return res;

//     } else {
//         await Promise.reject(new Error('something went wrong '))
  
//     }


    
// };
// myfunc()
//    .then(res => console.log(res));
//    .catch(err => console.log(err));


 async function  getUsers(){
    //await  response of the fetch call
    const  response = await fetch
    ('https://jsonplaceholder.typicode.com/users');

    //only proceed once its resolved
    const data = await response.json();

    //only proceed once second  promise is resolved
    return data;
 }

 getUsers().then(users => console.log(users));