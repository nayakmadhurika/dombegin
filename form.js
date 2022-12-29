function storage(event){
    event.preventDefault();
//Get the input values
let username = document.getElementById('username').value;
let email = document.getElementById('email').value;

//Create a JSON object
let obj = {
    "username" : username,
    "email" : email
};

//Store the user details in localstorage
localStorage.setItem(obj.email, JSON.stringify(obj));
localStorage.getItem(obj.email);

let list = document.querySelector('.list-group');

var li = document.createElement('li');
JSON.parse(localStorage.getItem(obj.email));
li.className = 'list-group-item';

li.appendChild(document.createTextNode(username + " " + email));
list.appendChild(li);
console.log(list);

}

