function fillTable(element) {


  element.sort(function(a,b) {
    console.log("Сортировка...");
    return a.localStorageID - b.localStorageID
  });
  // 1. Узнаем колличество елементов.
  var countElement = element.length;


// Делаем блоки
  createTodoItem(element,countElement);

//Заполняем информацией
  fillTodoItemData(element,countElement);



}

//Создаем блоки в которых будет лежать информация
function createTodoItem(element,countElement) {
  var htmlDocument = document.getElementById("ol");
  var listDiv = "";
  console.log("Вставляем блоки в HTML....");
  for (var i = 0; i < countElement; i++) {
    console.log("Заполняем таблицу значениями : " + element[i].localStorageID);
    listDiv += "<div class=\"todoItem\" " + "id=\"todoItem-" + element[i].localStorageID + "\""   + ">" + "</div>"
  }
  htmlDocument.innerHTML = listDiv;
  console.log("Зершено !");
}

function fillTodoItemData(element,countElement) {

  for (var i = 0; i < countElement; i++) {
    var id = element[i].localStorageID;
    var htmlDocument = document.getElementById("todoItem-" + id);
    if (htmlDocument !== null) {
      var liElement = element[i].labelElement;
      if (liElement !== null) {
        var innerHTMLli = "<li>"+ liElement +"</li>";

        // Проверяем какое состояние у checkbox
        var checked = element[i].complited
        if (checked) {
          var inputHTML =  "<input type=\"checkbox\" class=\"custom-checkbox\"" + "id=\"checked-" + id + "\"" + "onclick=\"checkItem(id)\" checked >";
          htmlDocument.classList.toggle("todoItemComplite");
        }
        else {
          var inputHTML =  "<input type=\"checkbox\" class=\"custom-checkbox\"" + "id=\"checked-" + id + "\"" + "onclick=\"checkItem(id)\">";
        }
        var checkboxHTML = "<label for=\"checked-" + id + "\"" + "></label>";
        var deleteHTML = "<div class=\"deleteItem\"" + "id=\"deleteItem-" + id + "\"" + "onclick=\"deleteItem(id)\"" + "></div>";

        htmlDocument.innerHTML = innerHTMLli + inputHTML + checkboxHTML + deleteHTML;
      }
      else {
        console.log("Ошибка добавления елемента № : " + id + liElement);
      }
    }
  }
}
