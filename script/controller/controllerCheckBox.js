// Реализуем функциб реагирующую на checkbox
function checkItem(idElement) {
  let id = idElement.substring(8,idElement.length);
  let elementDiv = document.getElementById("todoItem-"+id);

  var taskComplited = elementDiv.getElementsByTagName("li")[0].textContent;
  console.log("Задача : " + taskComplited + " выполнена");


  // FIXME: Елемент не зачеркиватеся при ошибке изменения состояния по checkbox активен
  if (complitedTodoByIDForLocalStorage(id,taskComplited)) {
    // Зачеркивает елемент визуально!!!
    elementDiv.classList.toggle("todoItemComplite");
  }
}


function complitedTodoByIDForLocalStorage(id,taskComplited) {
  console.log("Получен id :" + id + " для изменения поля complited в localStorage, todo : " + taskComplited);
  // var key = localStorage.key(id);
  // console.log("Получили ключ : " + key + " по id : " + id);

  console.log("Получаем елемент из localStorage по id " + id + " ...");
  var todoItem = localStorage.getItem(id);
  var jsonObject = JSON.parse(todoItem);
  console.log("Объект получен : " + "{ id :" + jsonObject.localStorageID + ", labelElement : " +  jsonObject.labelElement + ", complited : " + jsonObject.complited + " }");

  if (todoItem !== null) {
    console.log("Сетим изменения в localStorage....");
    var updateTodo = new Todo(id,jsonObject.labelElement,!jsonObject.complited);
    localStorage.setItem(id,JSON.stringify(updateTodo));
    console.log("Елемент : " + JSON.stringify(updateTodo));
    console.log("Изменения добавлены в localStorage....");
    return true;
  }
  else {
    swal("Ошибка изменения состояния елемента "+ taskComplited +" !!", "", "error");
    return false;
  }




}

function checkChangeComplitedTodoItem(id) {

}
