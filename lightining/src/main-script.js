import { Canvas, Line, Fractal } from './entity/index.js';
import THEMES from './config/themes.js';
import { $ } from './util/jquery.js';

const canvasElement = $('#root canvas');

const canvas = new Canvas(canvasElement);

const drawLine = ([initialX, initialY], thickness, length, angle = 45) => {
  const _line = new Line([initialX, initialY], thickness, length, angle);

  canvas.drawLine(_line, THEMES.RED);

  return _line.finalCoordinates;
};

const createLightning = () => {
  const fractal = new Fractal({ drawingInterface: drawLine });

  fractal.startDrawing();

  setTimeout(() => {
    canvas.clear();
    setTimeout(() => {
      createLightning();
    }, 50);
  }, 100);
};

createLightning();
