const posts =[
    {title:'post one' , body: 'This is post one'},
    {title:'post two' , body: 'This is post two'}
    
];


function createPost(post,callback){
    return new Promise(function(resolve,reject)){
        setTimeout(function(){
            posts.push(post);
            let error = true;
            const error = true;

         if(!error) {
            resolve();
         }else {
            reject('Error: Something went wrong  ')
         }


            resolve();
        },2000);
    });
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

createPost({title:'post Three', body: 'This is post three'}, getPosts);



