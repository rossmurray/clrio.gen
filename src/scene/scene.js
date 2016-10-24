import settings from "../settings.js";
import Circles from "./circles.js";

const Scene = class Scene {
    constructor() {
        this.circles = new Circles(settings.numCircles);
    }

    update() {
        this.circles.update();
    }

    draw(screen) {
        this.circles.draw(screen);
    }
}

export default Scene;