// This file tests to ensure that the SVG and Shapes constructors are both working

// Required files for testing
const SVG = require("./svg");
const { Circle } = require("./shapes");

// tests that the basic header is rendered correctly
test("should render a 300 x 200 svg element", () => {
  // Control for test
  const expectedSvg =
    '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"></svg>';
    // new instance of SVG constructor
  const svg = new SVG();
  // compares the constructor render vs. the hard-coded control
  expect(svg.render()).toEqual(expectedSvg);
});

// Tests the 'svg.setText' method
test("should append text element with specified color", () => {
  // Control for test
  const expectedSvg =
    '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><text x="150" y="125" font-size="60" text-anchor="middle" fill="white">A</text></svg>';
    // new instance of SVG constructor
  const svg = new SVG();
  // 'svg.SetText' being tested
  svg.setText("A", "white");
  // compares the constructor render with setText params vs. the hard-coded control
  expect(svg.render()).toEqual(expectedSvg);
});

// Tests that the constructor is properly throwing an error when too many characters are used
test("should throw if text exceeds 3 characters", () => {
    // Control for test
  const expectedError = new Error("Text not accepted, Must be less than 3 characters.");
      // new instance of SVG constructor
  const svg = new SVG();
  // compares the constructor render with setText params designed to trigger an error vs. the hard-coded control
  expect(() => svg.setText("HELLO", "#333")).toThrow(expectedError);
});

// Tests that the 2 constructors work when all the methods are given params
test("should include a shape", () => {
      // Control for test
  const expectedSvg =
    '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><circle cx="150" cy="100" r="80" fill = "dodgerblue" /><text x="150" y="125" font-size="60" text-anchor="middle" fill="#333">SVG</text></svg>';
      // new instance of SVG constructor
  const svg = new SVG();
    // 'svg.setText' called for testing
  svg.setText("SVG", "#333");
        // new instance of constructor
  const circle = new Circle();
      // 'svg.setColor' called for testing
  circle.setColor("dodgerblue");
  // 'svg.setText' called for testing
  svg.setShape(circle);
  // compares the constructor render with all methods given valid params vs. the hard-coded control
  expect(svg.render()).toEqual(expectedSvg); 
});
