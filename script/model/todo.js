class Todo {
  constructor(localStorageID,labelElement,complited) {
    this.localStorageID = localStorageID;
    this.labelElement = labelElement
    this.complited = complited
  }

  getInformation() {
    return this.localStorageID + " " + this.labelElement + " " + this.complited;
  }
}
