const posts =[
    {title:'post one' , body: 'This is post one'},
    {title:'post two' , body: 'This is post two'}
    
];

// function createpost(post){
//     setTimeout(function(){
//         posts.push(post);
//     },2000);


// }

// function getpost(){

//     setTimeout(function(){
//         let output='';
//         posts.forEach(function(){
//          output += `<li>${post.title}</li>`
//         });
//         document.body.innerHTML = output;
//     },1000);
// }

// createpost({thitle:'post Three', body: 'This is post three'});

// getPosts();


function createPost(post,callback){
    setTimeout(function(){
        posts.push(post);
        let error = true

        resolve();
    },2000);


}

function getPosts(){

    setTimeout(function(){
        let output='';
        posts.forEach(function(post){
         output += `<li>${post.title}</li>`
        });
        document.body.innerHTML = output;
    },1000);
}

createPost({title:'post Three', body: 'This is post three'}).then(getPosts)



