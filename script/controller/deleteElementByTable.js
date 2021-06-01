//Реализуем функционал удаления елементов.
function deleteItem(idElement) {

  console.log("Принята команда удаления елемента от кнопки : "+ idElement);
  let id = idElement.substring(11,idElement.length);

  console.log("Id удаляемого елемента : " + "todoItem-" +id);
  let elementDiv = document.getElementById("todoItem-"+id);
  elementDiv.remove();
  console.log("Компонент удален из!");

  // Проверяю сколько осталось еще елементов.
  let all = document.getElementsByClassName("todoItem");
  if (all.length == 0) {
    console.log("Список дел пуск выводим сообщение в UI!");
    document.getElementById("todoList").innerHTML = "<h1>Список дел пуст!</h1>";
  }
}
