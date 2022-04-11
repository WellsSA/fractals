import { getFinalCoordinates } from '../util/math.js';

class Canvas {
  constructor(initialCoordinates, thickness, length, angle) {
    this.initialCoordinates = initialCoordinates;
    this.thickness = thickness;
    this.length = length;
    this.angle = angle;
    this.finalCoordinates = getFinalCoordinates(
      initialCoordinates,
      length,
      angle
    );
  }
}

export default Canvas;
