class Department {

  constructor(name) {
    this.name = name
    this.number = this.getNumber(name)
  }

  getName() {
    return this.name;
  }

  getNumber() {
    switch (this.name.toLowerCase()) {
      case "accounting":
        return 1;
      case "marketing":
        return 2;
      case "administration":
        return 3;
      case "finance":
        return 4;
      default:
        return 0;
    }
  }

}


module.exports = Department;
