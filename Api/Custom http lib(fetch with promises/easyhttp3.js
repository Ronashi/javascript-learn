/**
 * EasyHTTTP Library
 * Library for making HTTP requests
 * 
 * @version 3.0.0
 * @authorname Ronald Reagan 
 * @github  Ronashi
 */

// class EasyHTTTP{
//     //make an HTTP GET Request
//     get(url) {
//      fetch(url)
//      .then(res => res.json)
//      .then(data => console.log(data))
//      .catch(err => console.log(err)); 
//     }
// }

//make a http get request
class EasyHTTTP{
    async get(url) {

        //http2
    //     return new Promise((resolve,reject) =>{
    //  fetch(url)
    //  .then(res => res.json)
    //  .then(data => resolve(data))
    //  .catch(err => reject(err));
//  });


    const response = await fetch(url);

    const resData = await  response.json();
    return resData;
    
}


//Make an HTTP POST Request

   async post(url,data) {
        
     const response fetch = await fetch(url,{
        method:'POST',
        headers:{
            'content-type': 'application/json'
        },
        body:JSON.stringify(data)
     });
     
     const resData = await  response.json();
     return resData;

}



//make a HTTP put  | update

    async put(url,data) {
     
        const response = await fetch(url,{
            method:'PUT',
            headers:{
             'content-type': 'application/json'
        },
        body:JSON.stringify(data)
     });
     const resData = await response.json();
     return resData;
     
}


//make HTTP DELETE Request

async delete(url) {
    
 const response = await fetch(url,{
    method:'DELETE',
    headers:{
        'content-type': 'application/json'
    },
    body:JSON.stringify(data)
 });
 const resData = await response.json();
     return resData;
}
}