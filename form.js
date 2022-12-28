function storage(event){
    event.preventDefault();
    const name=event.target.username.value;
    const email=event.target.emailId.value;
    const number=event.target.phoneno.value;
    localStorage.setItem('name',name);
    localStorage.setItem('emailId',email);
    localStorage.setItem('PhoneNo',number);
    }


// function storage(event){
// //Get the input values
// let username = document.getElementById('username').value;
// let email = document.getElementById('email').value;

// //Create a JSON object
// let userDetails = {
//     "username" : username,
//     "email" : email
// };

// //Store the user details in localstorage
// localStorage.setItem('user', JSON.stringify(userDetails));
// }