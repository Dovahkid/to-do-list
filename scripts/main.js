var x = 0;
function addItem()
{
  x += 1;
  var todoItem = document.getElementById("newItem").value;
  document.getElementById("newItem").value = "";

  var element = document.getElementById("todo");

  var node =  document.createElement("LI");
    node.setAttribute('id', 'li' + x);
    node.setAttribute('onclick', 'completed('+x+')');
    node.innerHTML = todoItem +"<button onclick='removeItem("+ x +")'>X</button>";
  element.appendChild(node);
}

function removeItem(x)
{
  var element = document.getElementById('li' + x).remove();
}

function completed(x)
{
  var element = document.getElementById('li' + x);
    element.setAttribute('style', 'background-color:lightgreen;');
    element.setAttribute('onclick', 'unComplete('+x+')');
}

function unComplete(x)
{
  var element = document.getElementById('li' + x);
    element.setAttribute('style', 'background-color:transparent;');
    element.setAttribute('onclick', 'completed('+x+')');
}
