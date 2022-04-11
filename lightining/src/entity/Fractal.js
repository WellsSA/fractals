const DEFAULT = {
  initialValues: {
    initialX: window.innerWidth / 2,
    initialY: window.innerHeight,
    thickness: 2,
    length: 100,
    angle: 0,
  },
  config: {
    length: {
      decay: 10,
      min: 1,
    },
    thickness: {
      decay: 0.1,
      min: 0.2,
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

    console.log({ nextX, nextY });
    const nextThickness = thickness - this.config.thickness.decay;
    const nextLength = length - this.config.length.decay;

    const nextAngle = Math.random() * 90;
    setTimeout(() => {
      this.drawFractal([nextX, nextY], nextThickness, nextLength, nextAngle);
      this.drawFractal([nextX, nextY], nextThickness, nextLength, -nextAngle);
    }, 0);
  }

  startDrawing() {
    const { initialX, initialY, thickness, length, angle } = this.initialValues;

    this.drawFractal([initialX, initialY], thickness, length, angle);
  }
}

export default Fractal;
