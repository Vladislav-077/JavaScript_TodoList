function crateTodoItem(labelElement) {
  var label = labelElement.trim();

  console.log("Мы тут = " + (label > 0 && label !== ""));
  if (label.length > 0 && label !== "") {
    console.log("Сохраняем в LocalStorage елемент : " + label);

    var index = localStorage.length+1;
    localStorage.setItem(index,JSON.stringify(new Todo(label,false)));

    if (localStorage.getItem(index) !== null) {
      console.log("Элемент успешно добавлен в хранилище !");
      swal("Элемент успешно добавлен!", "", "success");
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
