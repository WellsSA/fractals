import { getRandomNumberInRange } from '../util/random.js';

const DEFAULT = {
  initialValues: {
    initialX: window.innerWidth / 4,
    initialY: 0,
    thickness: 4,
    length: 124,
    angle: 0,
  },
  config: {
    length: {
      decay: 10,
      min: 50,
    },
    thickness: {
      decay: 0.45,
      min: 0.1,
    },
  },
};

class Fractal {
  constructor({
    initialValues = {},
    config = {},
    drawingInterface = () => {},
  }) {
    this.initialValues = {
      ...DEFAULT.initialValues,
      ...initialValues,
    };
    this.config = {
      ...DEFAULT.config,
      ...config,
    };
    this.drawingInterface = drawingInterface;
  }

  drawFractal([initialX, initialY], thickness, length, angle) {
    if (length < this.config.length.min) return;

    const [nextX, nextY] = this.drawingInterface(
      [initialX, initialY],
      thickness,
      length,
      angle
    );

    const nextThickness = thickness - this.config.thickness.decay;
    const nextLength = length - this.config.length.decay;

    const nextAngle = getRandomNumberInRange(1, 60);
    const branches = getRandomNumberInRange(1, 3);

    Array.from({ length: branches }).forEach(() => {
      setTimeout((_, i) => {
        const multiplier = getRandomNumberInRange(1, 10) < 5 ? 1 : -1;
        this.drawFractal(
          [nextX, nextY],
          nextThickness,
          nextLength,
          multiplier * nextAngle
        );
      }, 0);
    });
  }

  startDrawing() {
    const { initialX, initialY, thickness, length } = this.initialValues;

    const angle = getRandomNumberInRange(-90, 90);
    this.drawFractal([initialX, initialY], thickness, length, angle);
  }
}

export default Fractal;
