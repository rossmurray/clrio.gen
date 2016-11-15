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
        const maxVelocity = fieldDiameter / 1000 * utility.scale(seedValue, settings.panels.maxSpeed.min, settings.panels.maxSpeed.max);
        const sizeVariation = settings.panels.sizeVariation;
        const sizeMax = midPanelSize * sizeVariation;
        const sizeMin = midPanelSize * (1 / sizeVariation);
        const squareSide = utility.scale(1 - seedValue, sizeMin, sizeMax);
        const halfSkew = settings.panels.maxRatioSkew / 2;
        const skew = 1 + utility.randomNumber(-halfSkew, halfSkew);
        const width = squareSide * skew;
        const height = squareSide * (1 / skew);
        const minIdle = utility.scale(1 - seedValue, settings.panels.minIdle.min, settings.panels.minIdle.max);
        const maxIdle = utility.scale(1 - seedValue, settings.panels.maxIdle.min, settings.panels.maxIdle.max);
        const departAtMs = now + utility.randomInt(0, maxIdle);
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
        
        //const colorLightness = Math.floor(utility.scale(seedValue, 50, 230));
        //this.color = "rgb(" + colorLightness + "," + colorLightness + "," + colorLightness + ")";
        this.color = seedValue < 0.2
            ? settings.panels.color1
            : seedValue < 0.5
            ? settings.panels.color2
            : seedValue < 0.8
            ? settings.panels.color3
            : settings.panels.color4;
    }
};

export default Panel;