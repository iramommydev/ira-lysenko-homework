class Circle {
  constructor(radius = 1.0) {
    this._radius = radius;
  }
  get radius() {
    return this._radius;
  }
  set radius(value) {
    if (value > 0) {
      this._radius = value;
    } else {
      throw new Error('Enter correct value');
    }
  }
  get diameter() {
    return this._radius * 2;
  }

  area() {
    return Math.PI * this._radius ** 2;
  }

  circumference() {
    return 2 * Math.PI * this._radius;
  }
}

export default Circle;
