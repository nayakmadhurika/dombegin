var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var li = document.getElementsByTagName('li');
var filter = document.getElementById('filter');

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
//Filter event
filter.addEventListener('keyup', filterItems);

//add item
function addItem(e){
    e.preventDefault();

    //get input value
    var newItem = document.getElementById('item').value;
    var description = document.getElementById('description').value;

    //create new li element
    var li = document.createElement('li');
    //add class name
    li.className = 'list-group-item';
    //add text node with input value
    li.appendChild(document.createTextNode(newItem + " " + description));
    // li.appendChild(document.createTextNode(" " + description));
    console.log(newItem,description);

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

//filter items
function filterItems(e){
    //convert to lowercase
    var text = e.target.value.toLowerCase();
    //get lis
    var items = itemList.getElementsByTagName('li');
    console.log(items);
    // convert to an array
    Array.from(items).forEach(function(item){
        var itemName = item.firstChild.textContent;
        console.log(item);
        if(itemName.toLowerCase().indexOf(text) != -1){
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}

