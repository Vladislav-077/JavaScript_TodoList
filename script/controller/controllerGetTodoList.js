//Реализуем функционал заполнение элементов, для начала проверяем LocalStorage если хранилище не заполненно заполняем.
// Далее заполняем таблицу в соотвутсвии с LocalStorage

function getTodoList(flag) {
  if (getLengthLocalStorage() == 0) {
    todoListAddedObjectToLocalStorage();
    return getLocalStorageTodo();
  }
  else {
    // Предупреждение
    if (flag) {
      swal({
        title : "Список нельзя заполнить данным !",
        text: "Список нельзя заполнить данными когда в нем больше 1 елемента, для заполнения списка удалите все елементы",
        icon: "warning",
      });
    }

    return getLocalStorageTodo();
  }

}

function todoListAddedObjectToLocalStorage() {
  console.log("Заполняем данными LocalStorage....");

  var list = [
  new Todo(0,"Купить хлеб",false),
  new Todo(1,"Купить молоко",false),
  new Todo(2,"Продать хлеб",false),
  new Todo(3,"Продать молоко",false),
  new Todo(4,"Купить диплом",false),
  new Todo(5,"Пропить диплом",false),
  new Todo(6,"Найти работу",false),
  new Todo(7,"Уволиться с работы",false),
  new Todo(8,"Жить на всю катушку!",false)
  ];

  // Сохраняем в LocalStorage
  for (var i = 0; i < list.length; i++) {
    console.log("Сохраняем в LocalStorage елемент : " + i + " : " +   list[i].getInformation());
    localStorage.setItem(i,JSON.stringify(list[i]));
  }
  console.log("LocalStorage заполнен данными !!");
}

// Колличество объектов в хранилище
function getLengthLocalStorage() {
  return localStorage.length;
}

// Вернет список объектов Todo из LocalStorage
function getLocalStorageTodo() {
  console.log("Получаем данные из LocalStorage....");
  var localStorageContent = localStorage;
  var localStorageList = [];

  for (var i = 0; i < localStorageContent.length; i++) {
    var todoJson = JSON.parse(localStorage.getItem(localStorage.key(i)));
    if (todoJson !== null) {
      var todoItem = new Todo(localStorage.key(i),todoJson.labelElement,todoJson.complited);
      localStorageList.push(todoItem);
    }
  }
  console.log(localStorageList);
  console.log("Данные из LocalStorage полечены и записаны в массив!");
  return localStorageList;
}
