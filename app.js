import { rect } from "./rectangle.js";

function solveRect(l, w) {
  console.log(`Solving for rectangle with dimensions of ${l}, ${w}.`);
  rect(l, w, (err, rectangle) => {
    if (err) {
      console.log("ERROR", err.message);
    } else {
      console.log(
        `Area of rectangle with dimensions ${l}, ${w}: ${rectangle.area()}`
      );
      console.log(
        `Perimeter of Rectangle with dimensions ${l}, ${w}: ${rectangle.perimeter()}`
      );
    }
  });
}

solveRect(2, 4);
solveRect(3, 5);
solveRect(0, 5);
solveRect(5, -3);
