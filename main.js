function addNewList() {
    alert('hello world!');
}

function addListItem() {
    const groceryList = document.getElementById("grocery-list");
    const itemInput = document.getElementById("new-list-item");
    const newItem = document.createElement("li");
    newItem.appendChild(document.createTextNode(itemInput.value));
    groceryList.appendChild(newItem);
}

function deleteListItem(item) {
    item.parentNode.removeChild(item);
}

function completeListItem(item) {
    if (item.checked){
        item.parentNode.style.textDecoration = "line-through";
    } else {
        item.parentNode.style.textDecoration = "none";
    }
}