var form = document.getElementById("addForm");
var itemList = document.getElementById("items");
var filter = document.getElementById("filter");

// From submit event
form.addEventListener("submit", addItem);
//Create delete event
itemList.addEventListener("click", deleteItemList);
//Filter event
filter.addEventListener("keyup", filterItems);
// Add item
function addItem(e) {
  e.preventDefault();
  //   Get input value
  var newItem = document.getElementById("item").value;
  //Create new li element
  var li = document.createElement("li");
  li.className = "list-group-item";

  li.appendChild(document.createTextNode(newItem));

  //Add delete button
  var deleteBtn = document.createElement("button");
  deleteBtn.className = "btn btn-danger btn-sm float-right li-button delete";
  deleteBtn.appendChild(document.createTextNode("X"));

  //Append deletebtn to the li
  li.appendChild(deleteBtn);

  //Append li to the list
  itemList.appendChild(li);
}

//Remove item
function deleteItemList(e) {
  if (e.target.classList.contains("delete")) {
    if (confirm("Are you sure?")) {
      var li = e.target.parentElement;
      itemList.removeChild(li);
    }
  }
}
//Filter items
function filterItems(e) {
  // Convert text to lowercase
  var text = e.target.value.toLowerCase();
  //Get lis
  var items = itemList.getElementsByTagName("li");
  //Conver to an array
  Array.from(items).forEach(function (item) {
    var itemName = item.firstChild.textContent;
    if (itemName.toLowerCase().indexOf(text) != -1) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
}
