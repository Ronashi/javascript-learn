document.getElementById('button').addEventListener('click',loadData);

function  loadData(){
    
    //create an XHR object
    const xhr = new XMLHttpRequest();

    //OPEN
    xhr.open('GET','data.txt', true);

    //optional - used for spinners/loaders
    xhr.onprogress = function(){
        console.log('READYSTATE', xhr.readyState);
    }

    xhr.onload = function(){
        if(this.status === 200){
            console.log(this.responseText);
        }

    }

    // xhr.onreadystatechange =function(){
    //     if(this.status ===200 && this.readystate ===4){
    //         console.log(this.responseText)
    //     }
    // }
    xhr.onerror = function(){
        console.log(Request error..)
    }
    xhr.send();
    //200 =ok
    //404 page not found
    //403 forbidden
}