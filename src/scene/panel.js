import wave from "../core/wave.js";

const PanelMotion = class PanelMotion {
    constructor() {
        this.target = {x: 0, y: 0};
        this.origin = {x: 0, y: 0};
        this.motion = wave.time(1/5);
        this.arrivalTotalMs = 0;
        this.embarkTotalMs = 0;
    }
};

const Panel = class Panel {
    constructor() {
        this.x = 0;
        this.y = 0;
        this.width = 70;
        this.height = 135;
        this.motion = new PanelMotion();
        this.texture = undefined;
        this.seedValue = 0;
    }
};

export default Panel;