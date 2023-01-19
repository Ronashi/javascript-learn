//document.getElementById('button1').addEventListener('click', getText);
document.getElementById('button1').addEventListener
('click', getJson);
document.getElementById('button2').addEventListener
('click', getJson);
document.getElementById('button3').addEventListener
('click', getExternal);

//Get local text file data
// function getText(){
//     fetch('test.txt')
//     .then(function(res){
//         //console.log(res)  
//         return  res.text();
//     })
//     .then(function(data){
//         console.log(data);
//         document.getElementById('output').innerHTML = data;
//     })
//     .catch(function(err){
//         console.log(err)
//     });
// }

 ////using the arrow function(same as above)
function getText(){
    fetch('res.text')
    .then( res => res.text())
    .then(function(data){
        console.log(data);
        document.getElementById('output').innerHTML = data;
    })
    .catch(err => console.log(err));
}





//get local json data
function getJson(){
    fetch('posts.json')
    .then( res => res.json)
    .then(data => {
        console.log(data);
        let output  = '';
        data.forEach(function(post){
         output += `<li>${post.title}</li>`;
        });
       document.getElementById('output').innerHTML =  data;
    })
    .catch(err =>  'err');
}





//get from external API
function getExternal(){
    fetch('https://api.github.com/users')
    .then( res => res.json())
    .then(data =>  {
        console.log(data);
        let output  = '';
        data.forEach(function(post){
        output += `<li>${post.title}</li>`;
        });
       document.getElementById('output').innerHTML =  data;
    })
    .catch(function(err){
        console.log(err)
    });
}
