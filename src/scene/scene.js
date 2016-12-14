import settings from "../settings.js";
import * as husl from "husl";

const Scene = class Scene {
    constructor(screen) {
        this.circles = makeCircles();
        this.screen = screen;
    }

    update() {
        updateCircles(this.circles);
    }

    draw() {
        drawCircles(this.screen, this.circles);
    }
};

function makeCircles() {
    const rad = 100;
    const colors = [
        husl.toHex(70, 100, 88),
        husl.toHex(280, 100, 28),
        husl.toHex(175, 100, 58)
    ];
    const a = {x: 200, y: 175, r: rad, color: colors[0]};
    const b = {x: 125, y: 300, r: rad, color: colors[1]};
    const c = {x: 270, y: 300, r: rad, color: colors[2]};
    const circles = [a, b, c];
    return circles;
}

function updateCircles(circles) {

}

function drawCircles(screen, circles) {
    screen.context.globalCompositeOperation = "darken";
    screen.drawCircles(circles);
}

export default Scene;