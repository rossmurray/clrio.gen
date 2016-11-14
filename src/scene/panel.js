import wave from "../core/wave.js";
import settings from "../settings.js";
import * as utility from "../core/utility.js";
import MotionComponent from "../core/motionComponent.js";
import * as timeKeeper from "../core/timeKeeper.js";

const Panel = class Panel {
    //seedValue is from 0 (large, slow panel) to 1 (small, fast panel)
    //position is its starting position according to the pre-computed layout
    //midPanelSize is the length of one side of a square panel with seedValue 0.5
    constructor(seedValue, position, midPanelSize, fieldDiameter) {
        const now = timeKeeper.getTotalTimeMs();
        const maxVelocity = fieldDiameter * utility.scale(seedValue, settings.panels.maxSpeed.min, settings.panels.maxSpeed.max);
        const sizeVariation = settings.panels.sizeVariation;
        const squareSide = utility.scale(1 - seedValue, 4, midPanelSize * sizeVariation);
        const halfSkew = settings.panels.maxRatioSkew / 2;
        const skew = 1 + utility.randomNumber(-halfSkew, halfSkew);
        const width = squareSide * skew;
        const height = squareSide * (1 / skew);
        const minIdle = utility.scale(1 - seedValue, settings.panels.minIdle.min, settings.panels.minIdle.max);
        const maxIdle = utility.scale(1 - seedValue, settings.panels.maxIdle.min, settings.panels.maxIdle.max);
        const departAtMs = now + utility.randomInt(minIdle, maxIdle);
        const motion = new MotionComponent({position, maxVelocity});
        //todo: also needs mass, and acceleration

        this.x = position.x;
        this.y = position.y;
        this.width = width;
        this.height = height;
        this.layoutNode = position;
        this.seed = seedValue;
        this.minIdle = minIdle;
        this.maxIdle = maxIdle;
        this.changeAtTotalMs = departAtMs;
        this.motion = motion;
        // this.texture = undefined;
        const colorRandom = utility.randomNumber(0, 1);
        this.color = colorRandom < 0.35
            ? settings.panels.color1
            : colorRandom < 0.5
            ? settings.panels.color2
            : colorRandom < 0.65
            ? settings.panels.color3
            : settings.panels.color4;
    }
};

export default Panel;