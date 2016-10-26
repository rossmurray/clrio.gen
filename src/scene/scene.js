import settings from "../settings.js";
import Panels from "./panels.js";

const Scene = class Scene {
    constructor(screen) {
        this.panels = new Panels(settings.numPanels, screen);
        this.screen = screen;
    }

    update() {
        this.panels.update();
    }

    draw() {
        this.panels.draw();
    }
};

export default Scene;