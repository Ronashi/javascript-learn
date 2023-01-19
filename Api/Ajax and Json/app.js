document.getElementById('button1').addEventListener
('click', loadCustomer);

document.getElementById('button2').addEventListener
('click', loadCustomers);

 //load single customer


function loadCustomer(e){
    const xhr = new XMLHttpRequest();

    xhr.open('GET','customer.json' ,true);

    xhr.onload = function(){
        if(this.status === 200){
        //    console.log(this.responseText);      
                   
        //parse as object
        const customers = JSON.parse(this.responseText);
         
        let output = '';
        
        customers.forEach(function(customers)) 

        });


        const output= `
        <ul>
        <li>ID: ${customer.id}</li>
        <li>Name: ${customer.name}</li>
        <li>Company: ${customer.company}</li>
        <li>Phone: ${customer.phone}</li>
        </ul>
        `;
        document.getElementById('customer').innerHTML = output;
        }
    }
    xhr.send();
}

//load customers
function loadCustomers(e) {
    const xhr = new XMLHttpRequest();

    xhr.open('GET','customer.json' ,true);

    xhr.onload = function(){
        if(this.status === 200){
        //    console.log(this.responseText);      
                   
        //parse as object
        const customer = JSON.parse(this.responseText);

        const output += `
        <ul>
        <li>ID: ${customer.id}</li>
        <li>Name: ${customer.name}</li>
        <li>Company: ${customer.company}</li>
        <li>Phone: ${customer.phone}</li>
        </ul>
        `;
        document.getElementById('customer').innerHTML = output;
        }
    }
    xhr.send();
}