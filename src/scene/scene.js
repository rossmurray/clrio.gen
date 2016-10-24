import settings from "../settings.js";
import Circles from "./circles.js";

const Scene = class Scene {
    constructor(screen) {
        this.circles = new Circles(settings.numCircles, screen);
        this.screen = screen;
    }

    update() {
        this.circles.update();
    }

    draw() {
        this.circles.draw();
    }
}

export default Scene;