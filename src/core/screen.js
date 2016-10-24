const Screen = class Screen {
    constructor(canvas, context) {
        this.canvas = canvas;
        this.context = context;
    }

    clear(color) {
        this.context.fillStyle = color;
        this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);
    }

    resize() {
        const width = this.canvas.clientWidth;
        const height = this.canvas.clientHeight;
        if(this.canvas.width != width || this.canvas.height != height) {
            this.canvas.width = width;
            this.canvas.height = height;
        }
    }

    drawCircles(circles) {
        for(const circle of circles) {
            drawCircle(this.context, circle.x, circle.y, circle.r, circle.color);
        }
    }

    drawLines(lines) {
        for(const line of lines) {
            drawLine(this.context, line.x, line.y, line.radians, line.length);
        }
    }
};

function drawCircle(context, x, y, r, fillStyle) {
    context.beginPath();
    context.arc(x, y, r, 0, 2 * Math.PI, false);
    if (fillStyle) {
        context.fillStyle = fillStyle;
    }
    context.fill();
};

function drawLine(context, x, y, length, radians, strokeStyle, lineWidth) {
    var x2 = x + length * Math.cos(radians);
    var y2 = y + length * Math.sin(radians);
    context.beginPath();
    context.moveTo(x, y);
    context.lineTo(x2, y2);
    if (strokeStyle) {
        context.strokeStyle = strokeStyle;
    }
    if (lineWidth) {
        context.lineWidth = lineWidth;
    }
    context.stroke();
};

export default Screen;