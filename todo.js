// todo.js

function addItem() {
  // Get the input value
  var inputValue = document.getElementById("input").value;

  // Create a new list item
  var li = document.createElement("li");

  // Set the text of the list item to the input value
  li.appendChild(document.createTextNode(inputValue));

  // Create Update button with an icon
  var updateButton = document.createElement("button");
  updateButton.innerHTML = '<i class="fas fa-pencil-alt fa-inverse fa-xl"></i>';
  updateButton.style.width = "50px";
  updateButton.style.height = "50px";
  updateButton.style.backgroundColor = "green";
  updateButton.style.borderTopLeftRadius = "5px";
  updateButton.style.borderTopRightRadius = "5px";
  updateButton.style.borderBottomLeftRadius = "5px";
  updateButton.style.borderBottomRightRadius = "5px";
  updateButton.onclick = function () {
    updateItem(li);
  };
  li.appendChild(updateButton);
  updateButton.style.marginLeft = "600px";

  // Create Delete button with an icon
  var deleteButton = document.createElement("button");
  deleteButton.innerHTML = '<i class="fas fa-trash-alt fa-inverse fa-xl" ></i>';
  deleteButton.style.marginLeft = "10px";
  deleteButton.style.width = "50px";
  deleteButton.style.height = "50px";
  deleteButton.style.backgroundColor = "red";
  deleteButton.style.borderTopLeftRadius = "5px";
  deleteButton.style.borderTopRightRadius = "5px";
  deleteButton.style.borderBottomLeftRadius = "5px";
  deleteButton.style.borderBottomRightRadius = "5px";
  deleteButton.onclick = function () {
    deleteItem(li);
  };
  li.appendChild(deleteButton);

  // Append the new list item to the ul
  document.getElementById("itemlist").appendChild(li);

  // Clear the input field after adding the item
  document.getElementById("input").value = "";

  // Add some margin between items
  li.style.marginBottom = "50px";

  // Adjust the height of .bawah based on the input field height
  updateBawahHeight();
}

function updateItem(item) {
  // Get new text through prompt or any other means
  var updatedText = prompt("Enter updated text:", item.firstChild.nodeValue);

  // Update the text content of the list item
  if (updatedText !== null) {
    item.firstChild.nodeValue = updatedText;
  }
}

function deleteItem(item) {
  // Remove the list item
  item.remove();

  // Adjust the height of .bawah after removing an item
  updateBawahHeight();
}

function updateBawahHeight() {
  var itemList = document.getElementById("itemlist");
  var totalHeight = itemList.offsetHeight;
  document.querySelector(".bawah").style.height =
    totalHeight + parseInt(70) + "px";
}
z;
