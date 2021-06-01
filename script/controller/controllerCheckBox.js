// Реализуем функциб реагирующую на checkbox
function checkItem(idElement) {
  let id = idElement.substring(8,idElement.length);
  let elementDiv = document.getElementById("todoItem-"+id);
  elementDiv.classList.toggle("todoItemComplite");
}
