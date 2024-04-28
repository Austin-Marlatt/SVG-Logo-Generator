// Required modules and files
const inquirer = require("inquirer");
const SVG = require("./svg");
const { Circle, Triangle, Square } = require("./shapes");
const { writeFile } = require("fs/promises");

// Class constructor For the command line interface
class CLI {
  run() {
    // prompts user for text content/color and shape type/color to generate svg
    return inquirer
      .prompt([
        {
          name: "text",
          type: "input",
          message: "Enter text, no longer than 3 characters, for the logo.",
          validate: (text) =>
            text.length <= 3 || "The text must be shorter than 3 characters",
        },
        {
          name: "textColor",
          type: "input",
          message: "Enter the text color",
        },
        {
          name: "shapeType",
          type: "list",
          message: "Select a shape for the logo",
          choices: ["Triangle", "Square", "Circle"],
          default: "square",
        },
        {
          name: "shapeColor",
          type: "input",
          message: "Enter the shape color",
        },
      ])
      // user's answers are then passed into the importred modules as variables
      .then(({ text, textColor, shapeType, shapeColor }) => {
        // Users shape choice is matched with approrite constructor and asingned as this variable
        let shape;
        switch (shapeType) {
          case "Triangle":
            shape = new Triangle();
            break;

          case "Circle":
            shape = new Circle();
            break;

          default:
            shape = new Square();
            break;
        }

        // .setcolor method defined in shapes constructor used to assign chosen color
        shape.setColor(shapeColor);

        // svg constructor takes in user's text, text color and shape inputs, then writes the returned svg to a new file
        const svg = new SVG();
        svg.setText(text, textColor);
        svg.setShape(shape);
        return writeFile("logo.svg", svg.render());
      })
      .then(() => {
        console.log("Generated logo.svg");
      })
      .catch((error) => {
        console.log(error);
        console.log("Logo not generated, See error log.");
      });
  }
}

// exports this file to be called somewhere else
module.exports = CLI;