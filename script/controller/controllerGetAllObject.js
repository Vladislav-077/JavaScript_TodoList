//Реализуем функционал заполнение элементов, для начала проверяем LocalStorage если хранилище не заполненно заполняем.
// Далее заполняем таблицу в соотвутсвии с LocalStorage

function todoListFill() {
  if (getLengthLocalStorage() == 0) {
    todoListAddedObjectToLocalStorage();
  }
  else {
    getLocalStorageTodo();
  }

}

function todoListAddedObjectToLocalStorage() {
  console.log("Заполняем данными таблицу....");

  var list = [
  new Todo("Купить хлеб",false),
  new Todo("Купить молоко",false),
  new Todo("Продать хлеб",false),
  new Todo("Продать молоко",false),
  new Todo("Купить диплом",false),
  new Todo("Пропить диплом",false),
  new Todo("Найти работу",false),
  new Todo("Уволиться с работы",false),
  new Todo("Жить на всю катушку!",false)
  ];

  // Сохраняем в LocalStorage
  for (var i = 0; i < list.length; i++) {
    console.log("Сохраняем в LocalStorage елемент : " + i + " : " +   list[i].getInformation());
    localStorage.setItem(i,JSON.stringify(list[i]));
  }
  console.log("Таблица заполненна данными !!");
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
    var todoJson = JSON.parse(localStorage.getItem(i));
    var todoItem = new Todo(todoJson.labelElement,todoJson.complited);
    console.log("");
    localStorageList.push(todoItem);
  }
  console.log(localStorageList);
  console.log("Данные из LocalStorage полечены и записаны в массив!");
  return localStorageList;
}
