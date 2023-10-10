// todo.js

function addItem() {
    // Get the input value
    var inputValue = document.getElementById('input').value;

    // Create a new list item
    var li = document.createElement('li');

    // Set the text of the list item to the input value
    li.appendChild(document.createTextNode(inputValue));

    // Create Update button
    var updateButton = document.createElement('button');
    updateButton.appendChild(document.createTextNode('Update'));
    updateButton.onclick = function () {
        updateItem(li);
    };
    li.appendChild(updateButton);

    // Create Delete button
    var deleteButton = document.createElement('button');
    deleteButton.appendChild(document.createTextNode('Delete'));
    deleteButton.onclick = function () {
        deleteItem(li);
    };
    li.appendChild(deleteButton);

    // Append the new list item to the ul
    document.getElementById('itemlist').appendChild(li);

    // Clear the input field after adding the item
    document.getElementById('input').value = '';

    // Adjust the position of .bawah based on the total height of items
    updateBawahPosition();
}

function updateItem(item) {
    // Get new text through prompt or any other means
    var updatedText = prompt('Enter updated text:', item.firstChild.nodeValue);

    // Update the text content of the list item
    if (updatedText !== null) {
        item.firstChild.nodeValue = updatedText;
    }
}

function deleteItem(item) {
    // Remove the list item
    item.remove();

    // Adjust the position of .bawah after removing an item
    updateBawahPosition();
}

function updateBawahPosition() {
    var itemList = document.getElementById('itemlist');
    var totalHeight = itemList.offsetHeight;
    
    // Get the height of the input box
    var inputHeight = document.getElementById('input').offsetHeight;
    
    // Set the top margin of .bawah based on the total height and input height
    document.querySelector('.bawah').style.marginTop = totalHeight + inputHeight + 'px';
}
