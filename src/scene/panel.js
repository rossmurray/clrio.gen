import wave from "../core/wave.js";
import settings from "../settings.js";
import * as utility from "../core/utility.js";

const Panel = class Panel {
    //seedValue is from 0 (large, slow panel) to 1 (small, fast panel)
    //position is its starting position according to the pre-computed layout
    //midPanelSize is the length of one side of a square panel with seedValue 0.5
    constructor(seedValue, position, midPanelSize) {
        const maxSpeed = utility.scale(seedValue, settings.panels.maxSpeed.min, settings.panels.maxSpeed.max);
        const sizeVariation = settings.panels.sizeVariation;
        const squareSide = utility.scale(1 - seedValue, 4, midPanelSize * sizeVariation);
        const halfSkew = settings.panels.maxRatioSkew / 2;
        const skew = 1 + utility.randomNumber(-halfSkew, halfSkew);
        const width = squareSide * skew;
        const height = squareSide * (1 / skew);
        const minIdle = utility.scale(1 - seedValue, settings.panels.minIdle.min, settings.panels.minIdle.max);
        const maxIdle = utility.scale(1 - seedValue, settings.panels.maxIdle.min, settings.panels.maxIdle.max);
        const departAtMs = utility.randomInt(minIdle, maxIdle);

        this.x = position.x;
        this.y = position.y;
        this.vx = 0;
        this.vy = 0;
        this.seed = seedValue;
        this.target = position;
        this.maxV = maxSpeed;
        this.minIdle = minIdle;
        this.maxIdle = maxIdle;
        this.width = width;
        this.height = height;
        this.embarkTotalMs = departAtMs;
        this.arrivalTotalMs = 0;
        this.origin = position;
        this.motion = () => 0;
        this.traveling = false;
        // this.texture = undefined;
    }
};

export default Panel;