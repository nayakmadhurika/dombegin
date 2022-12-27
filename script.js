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


