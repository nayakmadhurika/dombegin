//Examine the document object

// console.log(document.domain);
// console.log(document.URL);
// console.log(document.title);
// console.log(document.doctype);
// console.log(document.head);
// console.log(document.body);
// console.log(document.all);
//console.log(document.all[10]);
//document.all[10].textContent = 'Hello';
//console.log(document.images);

//Get element by id
//console.log(document.getElementById('header-title'));
var headerTitle = document.getElementById('header-title');
var header = document.getElementById('main-header');
//console.log(headerTitle);
// headerTitle.textContent = 'Hello';
// headerTitle.innerText = 'goodbye';
 //headerTitle.innerHTML = '<h3>hello</h3>'
 headerTitle.style.borderBottom = 'solid 3px black';
 header.style.borderBottom = 'solid 3px black';

 var addItem = document.getElementById('addItems');
 addItem.style.fontWeight = 'bold';
 addItem.style.color = 'green';


//get element by class name
var items = document.getElementsByClassName('list-group-item');
items[1].textContent = 'hello 2';
items[1].style.fontWeight = 'bold';
items[1].style.backgroundColor = 'yellow';


for(var i = 0; i < items.length; i++){
    items[i].style.backgroundColor = '#f4f4f4';
}