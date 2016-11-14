import settings from "../settings.js";
import NewPanels from "./newPanels.js";

const Scene = class Scene {
    constructor(screen) {
        this.panels = new NewPanels(screen);
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