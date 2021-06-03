//Реализуем функционал удаления елементов.
function deleteItem(idElement) {

  console.log("Принята команда удаления елемента от кнопки : "+ idElement);
  let id = idElement.substring(11,idElement.length);

  console.log("Id удаляемого елемента : " + "todoItem-" +id);
  let elementDiv = document.getElementById("todoItem-"+id);
  elementDiv.remove();
  console.log("Компонент удален из списка!");

  // Сохряняем компонент
  var saveElement = saveElenentTodoById(id);

  deleteTodoById(id);
  checkDeleteElement(id,saveElement);

  // Проверяю сколько осталось еще елементов.
  let all = document.getElementsByClassName("todoItem");
  if (all.length == 0) {
    console.log("Список дел пуск выводим сообщение в UI!");
    document.getElementById("todoList").innerHTML = "<h1>Список дел пуст!</h1>";
  }
}

function deleteTodoById(id) {
  localStorage.removeItem(id);
}

function saveElenentTodoById(id) {
  console.log("Элемент сохранен");
  var saveElement = JSON.parse(localStorage.getItem(id));
  console.log(saveElement);
  return saveElement;
}

function checkDeleteElement(id,saveElement) {
  if (localStorage.getItem(id) === null) {
    swal("Элемент \""+ saveElement.labelElement +"\" успешно удален!", "", "success");
  }
  else {
    swal("Ошибка удаления елемента!", "", "error");
  }

}
