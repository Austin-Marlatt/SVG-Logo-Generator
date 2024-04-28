// class constructor for the svg files
class SVG {
  constructor() {
    this.textElement = "";
    this.shapeElement = "";
  };

  // header for each svg file
  render() {
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">${this.shapeElement}${this.textElement}</svg>`;
  };

  // sets the text / text color for the svg graphic
  setText(message, color) {
    if (message.length > 3) {
      throw new Error("Text not accepted, Must be less than 3 characters.");
    };
    this.textElement = `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${color}">${message}</text>`;
  };

// sets the svg to specified shape
  setShape(shape) {
    this.shapeElement = shape.render();
  };
};

// exports this file to be called somewhere else
module.exports = SVG;