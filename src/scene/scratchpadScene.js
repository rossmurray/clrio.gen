import settings from "../settings.js";
import * as textureGen from "./textureGen.js";
import Screen from "../core/screen.js";

const ScratchpadScene = class ScratchpadScene {
    constructor(screen) {
        this.screen = screen;
        const canvas = screen.canvas;
        const width = canvas.width;
        const height = canvas.height;
        const context = Screen.virtualContext(300, 300 * (height / width));
        this.buffer = context.canvas;
        const virtualScreen = new Screen(context);
        textureGen.draw(virtualScreen);
    }

    update() {
    }

    draw() {
        this.screen.drawImageStretch(this.buffer);
    }
};

export default ScratchpadScene;