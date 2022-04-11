class Canvas {
  #canvas;
  #context;
  constructor(canvasElement) {
    const canvas = canvasElement;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const context = canvas.getContext('2d');

    this.#canvas = canvas;
    this.#context = context;
  }

  getContext() {
    return this.#context;
  }

  drawLine(line, theme) {
    const {
      initialCoordinates: [initialX, initialY],
      finalCoordinates: [finalX, finalY],
      thickness,
    } = line;

    const { stroke, shadow } = theme;

    this.#context.beginPath();
    this.#context.moveTo(initialX, initialY);
    this.#context.lineTo(finalX, finalY);

    this.#context.strokeStyle = stroke;
    this.#context.lineWidth = thickness;
    this.#context.shadowColor = shadow;

    this.#context.shadowBlur = 60;
    this.#context.shadowOffsetX = 0;
    this.#context.shadowOffsetY = 0;

    this.#context.stroke();
  }

  clear() {
    this.#context.clearRect(0, 0, this.#canvas.width, this.#canvas.height);
  }

  getWidth() {
    return this.#canvas.width;
  }
}

export default Canvas;
