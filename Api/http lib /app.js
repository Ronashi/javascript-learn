// const http = new easyHTTP;

// //Get post
// const posts = http.get
// ('https://jsonplaceholder.typicode.com/post'); 

// console.log(posts);



// const http = new easyHTTP;

// //Get posts
// http.get('https://jsonplaceholder.typicode.com/post' ,
// function (err,posts){
//     if(err){
//         console.log(err);
//     }else{console.log(posts);
//     }
    
// });


// const http = new easyHTTP;

// //Get single post or response
// http.get('https://jsonplaceholder.typicode.com/post/1' ,
// function (err,post){
    // if(err){
    //     console.log(err);
    // } else {
    //     console.log(post);
    // }
    
// });



//create Data
const data = {
    title:'Custom post',
    body:'This is a custom post'
};

// //Create post
// http.post('https://jsonplaceholder.typicode.com/posts',
// data, function(err, post){
//     if(err){
//         console.log(err);
//     } else {
//         console.log(post);
//     }
// });

//update post
// http.put('https://jsonplaceholder.typicode.com/posts/5',
// data, function(err, post){
//     if(err){
//         console.log(err);
//     } else {
//         console.log(post);
//     }
// });

//Delete post
http.delete('https://jsonplaceholder.typicode.com/posts/5',
data, function(err, posts){
    if(err){
        console.log(err);
    } else {
        console.log(posts);
    }
});