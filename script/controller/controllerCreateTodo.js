function crateTodoItem(labelElement) {
  var label = labelElement.trim();

  if (label.length > 0 && label !== "") {
    console.log("Сохраняем в LocalStorage елемент : " + label);

    var index = getMaxID() + 1;
    localStorage.setItem(index,JSON.stringify(new Todo(index,label,false)));

    if (localStorage.getItem(index) !== null) {
      console.log("Элемент успешно добавлен в хранилище !");
      swal("Элемент \""+ label +"\" успешно добавлен!", "", "success");

      var list = getTodoList(false);
      fillTable(list);
    }
    else {
      console.log("Ошибка элемент не добавлен в хранилище !!");
      swal("Ошибка элемент не добавлен в хранилище !!", "", "error");
    }
  }
  else {
    console.log("Ошибка элемент не добавлен в хранилище !!");
    swal("Ошибка элемент не добавлен в хранилище !!", "", "error");
  }

}

function getMaxID() {
  var max = 0;
  for (var i = 0; i < localStorage.length; i++) {
    var localStorageMaxIndex =  JSON.parse(localStorage.getItem(localStorage.key(i))).localStorageID
    if  (localStorageMaxIndex > max) {
      max = localStorageMaxIndex;
    }
  }
  console.log("Максимальный индекс числа :" + max);
  return max;
}
