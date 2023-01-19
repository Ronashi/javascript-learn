//DOM
let val;

val = document;
val = document.all;
// val = document.all[2];
val = document.URL;

val = document.forms;
val = document.form[2];
val = document.form[1].id;      //.method or .action

val = document.links;
val = document.links[0]
val = document.links[0].id //.className or .classList

val = document.images;
val = document.scripts;


let scripts = document.scripts;

let scriptsArr = Array.from(scripts);

scriptsArr.forEach(function(script){
    console.log(script)
})


console.log(val);