class Canvas {
  #context;
  constructor(canvasElement) {
    const canvas = canvasElement;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const context = canvas.getContext('2d');

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

    this.#context.shadowBlur = 40;
    this.#context.shadowOffsetX = 0;
    this.#context.shadowOffsetY = 0;

    this.#context.stroke();
  }
}

export default Canvas;
