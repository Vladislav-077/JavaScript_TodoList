class Todo {
  constructor(labelElement,complited) {
    this.labelElement = labelElement
    this.complited = complited
  }

  getInformation() {
    return this.labelElement + " " + this.complited;
  }
}
