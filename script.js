const $ = document.querySelector.bind(document);

const canvas = $('#root canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const context = canvas.getContext('2d');

const line = (x, y, size, angle = 45) => {
  const degreeAngle = (Math.PI * angle) / 180;
  const _x = x + size * Math.sin(degreeAngle);
  const _y = y - size * Math.cos(degreeAngle);

  context.beginPath();
  context.moveTo(x, y);
  context.lineTo(_x, _y);
  // context.strokeStyle = '#fff';
  // context.shadowBlur = 2;
  // context.shadowColor = 'blue';
  context.strokeStyle = '#ff0000';
  context.lineWidth = 2;
  context.shadowColor = '#ff0000';
  context.shadowBlur = 40;
  context.shadowOffsetX = 0;
  context.shadowOffsetY = 0;
  context.stroke();

  return [_x, _y];
};

const initial = {
  x: window.innerWidth / 2,
  y: window.innerHeight,
  size: 100,
  angle: 0,
};

const config = {
  size: {
    decay: 10,
    min: 2,
  },
};

// const masterAngle = Math.random() * 65 + 35;

function drawFractal(x, y, size, angle) {
  if (size < config.size.min) return;
  const [_x, _y] = line(x, y, size, angle);
  const _size = size - config.size.decay;
  const _angle = Math.random() * 90;
  // const _angle = masterAngle;
  drawFractal(_x, _y, _size, _angle);
  drawFractal(_x, _y, _size, -_angle);
}

drawFractal(initial.x, initial.y, initial.size, initial.angle);
