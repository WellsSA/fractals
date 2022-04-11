import { Canvas, Line, Fractal } from './entity/index.js';
import THEMES from './config/themes.js';
import { $ } from './util/jquery.js';
import { getRandomNumberInRange } from './util/random.js';

const canvasElement = $('#root canvas');

const canvas = new Canvas(canvasElement);

const drawLine = ([initialX, initialY], thickness, length, angle = 45) => {
  const _line = new Line([initialX, initialY], thickness, length, angle);

  canvas.drawLine(_line, THEMES.RED);

  return _line.finalCoordinates;
};

const createLightning = () => {
  const boundaries = canvas.getWidth() / 4;
  const fractal = new Fractal({
    initialValues: {
      initialX: getRandomNumberInRange(
        boundaries,
        canvas.getWidth() - boundaries
      ),
    },
    drawingInterface: drawLine,
  });

  fractal.startDrawing();

  setTimeout(() => {
    canvas.clear();
    setTimeout(() => {
      createLightning();
    }, 50);
  }, 100);
};

createLightning();
