// class constructor for shapes
class Shape {
  constructor() {
    this.color = "";
  }
  // sets color based on passed param
  setColor(color) {
    this.color = color;
  }
}

// following shapes extend the basic shape constructor to build specific shapes
class Triangle extends Shape {
  // Method that creates the exported shape, with color param
  render() {
    return `<polygon points="150, 18 244, 182 56, 182" fill = "${this.color}" />`;
  };
};

class Circle extends Shape {
  render() {
      // Method that creates the exported shape, with color param
    return `<circle cx="150" cy="100" r="80" fill = "${this.color}" />`;
  };
};

class Square extends Shape {
    // Method that creates the exported shape, with color param
  render() {
    return `<rect x="90" y="40" width="120" height = "120" fill="${this.color}" />`;
  };
};

// exports this file to be called somewhere else
module.exports = { Triangle, Circle, Square };