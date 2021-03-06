console.log('---------- classes.js ----------');
// 1. Copy and paste your prototype in here and refactor into class syntax.

class CuboidMakerClass {
  constructor(cuboidAttribs) {
    this.length = cuboidAttribs.length;
    this.width = cuboidAttribs.width;
    this.height = cuboidAttribs.height;
  }
  volume() {
    return this.length * this.width * this.height;
  }
  surfaceArea() {
    return (
      2 *
      (this.length * this.width +
        this.length * this.height +
        this.width * this.height)
    );
  }
}

const cuboid2 = new CuboidMakerClass({
  length: 4,
  width: 5,
  height: 5
});

// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboid2.volume()); // 100
console.log(cuboid2.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.

class CubeMaker extends CuboidMakerClass {
  constructor(a) {
    super(a);
    this.length = a;
    this.width = a;
    this.height = a;
  }
  volume() {
    // return this.length * this.length * this.length;
    return Math.pow(this.length, 3);
  }
  surfaceArea() {
    // return 6 * this.length * this.length;
    return 6 * Math.pow(this.length, 2);
  }
}

const cube = new CubeMaker(4);
console.log('== Cube Stretch ==');
console.log(cube.volume()); // 64
console.log(cube.surfaceArea()); //96
