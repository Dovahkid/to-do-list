var x = 0;
function addItem()
{ // The strange indentation is just for organization. Definetely not standard but...
  x += 1;
  var todoItem = String(document.getElementById("newItem").value);
  console.log(todoItem.length);
  document.getElementById("newItem").value = "";
  var element = document.getElementById("todo");

  var node =  document.createElement("LI");
    node.innerHTML = todoItem;
    node.setAttribute('onclick', 'completed('+x+')');
    node.setAttribute('id', 'li' + x);

  var buttonNode = document.createElement("BUTTON");
    buttonNode.setAttribute('id', 'btn' + x);
    buttonNode.setAttribute('onclick', "removeItem("+ x +")");
    buttonNode.innerHTML = 'X';

  element.appendChild(node);
  element.appendChild(buttonNode);
}

function removeItem(x)
{
  var element = document.getElementById('li' + x).remove();
  var buttonElement = document.getElementById('btn' + x).remove();
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
    element.setAttribute('style', 'background-color:white;');
    element.setAttribute('onclick', 'completed('+x+')');
}
