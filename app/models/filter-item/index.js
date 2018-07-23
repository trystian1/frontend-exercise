export default class {

  constructor(isSelected, name) {
    this.isSelected = isSelected;
    this.name = name;
  }

  getSelectedStatus() {
    return this.isSelected;
  }

}