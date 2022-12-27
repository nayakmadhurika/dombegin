// // //Examine the document object

// // // console.log(document.domain);
// // // console.log(document.URL);
// // // console.log(document.title);
// // // console.log(document.doctype);
// // // console.log(document.head);
// // // console.log(document.body);
// // // console.log(document.all);
// // //console.log(document.all[10]);
// // //document.all[10].textContent = 'Hello';
// // //console.log(document.images);

// // //Get element by id
// // //console.log(document.getElementById('header-title'));
// // var headerTitle = document.getElementById('header-title');
// // var header = document.getElementById('main-header');
// // //console.log(headerTitle);
// // // headerTitle.textContent = 'Hello';
// // // headerTitle.innerText = 'goodbye';
// //  //headerTitle.innerHTML = '<h3>hello</h3>'
// //  headerTitle.style.borderBottom = 'solid 3px black';
// //  header.style.borderBottom = 'solid 3px black';

// //  var addItem = document.getElementById('addItems');
// //  addItem.style.fontWeight = 'bold';
// //  addItem.style.color = 'green';


// // //get element by class name
// // // var items = document.getElementsByClassName('list-group-item');
// // // items[1].textContent = 'hello 2';
// // // items[1].style.fontWeight = 'bold';
// // // items[1].style.backgroundColor = 'yellow';
// // // items[2].style.backgroundColor = 'green';


// // // for(var i = 0; i < items.length; i++){
// // //     items[i].style.fontWeight = 'bold';
// // // }

// // // //get element by tagname //
// // // var li = document.getElementsByTagName('li');
// // // li[1].textContent = 'hello 2';
// // // li[1].style.fontWeight = 'bold';
// // // li[1].style.backgroundColor = 'yellow';
// // // li[2].style.backgroundColor = 'green';


// // // for(var i = 0; i < li.length; i++){
// // //     li[i].style.fontWeight = 'bold';
// // // }

// // //QUERYSELECTOR
// // var secondItem = document.querySelector('.list-group-item:nth-child(2)');
// // secondItem.style.backgroundColor = 'green';

// // var thirdItem = document.querySelector('.list-group-item:nth-child(3)');
// // thirdItem.style.display = 'none';

// // //QUERYSELECTORALL
// // var secItem = document.querySelectorAll('.list-group-item');
// // secItem[1].style.color = 'green'; 

// // var odd = document.querySelectorAll('li:nth-child(odd)');

// // for(var i = 0; i < odd.length; i++){
// //     odd[i].style.backgroundColor = 'green'; 
// // }

// //TRAVERSING THE DOM
// var itemList = document.querySelector('#items');

// //parentElement
// console.log(itemList.parentElement);
// itemList.parentElement.style.backgroundColor = '#f4f4f4';
// console.log(itemList.parentElement.parentElement);

// //childNodes
// console.log(itemList.children);
// console.log(itemList.children[1]);
// itemList.children[1].style.backgroundColor = 'yellow';

// //FirstChild
// console.log(itemList.firstChild);
// //FirstElementChild
// console.log(itemList.firstElementChild);
// itemList.firstElementChild.textContent = 'hello1';

// //lastChild
// console.log(itemList.lastChild);
// //lastElementChild
// console.log(itemList.lastElementChild);
// itemList.lastElementChild.textContent = 'hello4'

// //NEXTSIBLING
// console.log(itemList.nextSibling);
// //NEXTELEMENT SIBLING
// console.log(itemList.nextElementSibling);

// //PREVIOUS SIBLING
// console.log(itemList.previousSibling);
// //previous element sibling
// console.log(itemList.previousElementSibling);
// itemList.previousElementSibling.style.color = 'green';

// //CREATE ELEMENT
// //create a div
// var newDiv = document.createElement('div');

// //add class
// newDiv.className = 'hello';

// // add ID
//  newDiv.id = 'hello1';

// //set attribute
//  newDiv.setAttribute('title', 'hello Div');

// //create a text node
// var newDivText = document.createTextNode('hello world');

// //add text to div
// newDiv.appendChild(newDivText);

// var container = document.querySelector('header .container');
// var h1 = document.querySelector('header h1');


// console.log(newDiv);

// container.insertBefore(newDiv, h1);

// var newLi = document.createElement('li');
// newLi.className = 'list-group-item';


// var newLiText = document.createTextNode('hello world');

// newLi.appendChild(newLiText);

// var cont = document.querySelector('div .list-group')
// var ul = document.querySelector('div li');

// console.log(newLi);

// cont.insertBefore(newLi, ul);


var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var li = document.getElementsByTagName('li');

//create edit button for existing li
for(var i = 0; i < li.length; i++){
    var editBtn = document.createElement('button');
    editBtn.className = 'btn btn-danger btn-sm float-end edit';
    editBtn.appendChild(document.createTextNode('Edit'));
    li[i].appendChild(editBtn);
}

//form submit event
form.addEventListener('submit', addItem);
//Delete event
itemList.addEventListener('click', removeItem);

//add item
function addItem(e){
    e.preventDefault();

    //get input value
    var newItem = document.getElementById('item').value;
    //create new li element
    var li = document.createElement('li');
    //add class name
    li.className = 'list-group-item';
    //add text node with input value
    li.appendChild(document.createTextNode(newItem));

    //create delete button element
    var deleteBtn = document.createElement('button');
    //add classes to delete button
    deleteBtn.className = 'btn btn-danger btn-sm float-end delete';
    //append text node
    deleteBtn.appendChild(document.createTextNode('X'));
    //append btn to li
    li.appendChild(deleteBtn);

    //create edit button.
    var editBtn = document.createElement('button');
    editBtn.className = 'btn btn-danger btn-sm float-end edit';
    editBtn.appendChild(document.createTextNode('Edit'));

    li.appendChild(editBtn);

    itemList.appendChild(li);
}

//Remove item
function removeItem(e){
    if(e.target.classList.contains('delete')){
        if(confirm('Are you sure')){
            var li = e.target.parentElement;
            itemList.removeChild(li);
        }
    }
}
