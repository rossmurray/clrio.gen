const screen = class screen {
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
            this.context.circle(circle.x, circle.y, circle.r, circle.color);
        }
    }

    drawLines(lines) {
        for(const line of lines) {
            this.context.drawLine(line.x, line.y, line.radians, line.length)
        }
    }
};

export default screen;