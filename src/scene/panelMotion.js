import wave from "../core/wave.js";

const PanelMotion = class PanelMotion {
    constructor() {
        this.target = {x: 0, y: 0};
        this.origin = {x: 0, y: 0};
        this.motion = defaultMotion;
        this.arrivalTotalMs = 0;
        this.embarkTotalMs = 0;
    }
};

function defaultMotion() {
    return wave.time(1/5);
}

export default PanelMotion;