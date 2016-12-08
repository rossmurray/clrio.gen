import settings from "../settings.js";
import * as timeKeeper from "../core/timeKeeper.js";
import wave from "../core/wave.js";
import * as husl from "husl";
import * as utility from "../core/utility.js";

const Scene = class Scene {
    constructor(screen) {
        timeKeeper.updateTime(0);
        const boundary = makeBoundary(screen);
        const n = settings.numSliders;
        const sliders = makeSliders(n, boundary);
        updateSliders(sliders, boundary);

        this.boundary = boundary;
        this.sliders = sliders;
        this.screen = screen;
    }

    update() {
        updateSliders(this.sliders, this.boundary);
    }

    draw() {
        drawSliders(this.screen, this.sliders);
        //this.screen.drawText(Math.ceil(timeKeeper.getTotalTimeMs()), 50, 50);
    }
};

function updateSliders(sliders, boundary) {
    //const maxX = boundary.width + boundary.x - boundary.width * settings.sliderWidth;
    //const hueF = wave(x => wave.linear(x), {min: 0, max: 360, frequency: 1});
    const hueMod = wave(x => wave.sine(wave.time(1/3)));
    //const hueF = wave(x => (wave.smooth(wave.time(1/2) + x) % 1), {min: 0, max: 360, frequencyMod: hueMod, frequency: 2});
    const hueF = wave(x => (wave.reverse(x - wave.time(1/2))), {min: 0, max: 360, frequency: 1});
    const widthF = wave(x => (wave.sine(x)), {min: settings.sliderWidthMin, max: settings.sliderWidthMax});
    const widthAt1 = boundary.width * widthF(1 - Number.EPSILON);
    const widthAt0 = boundary.width * widthF(0);
    const maxX = boundary.width + boundary.x - (boundary.width * widthAt1);
    //const xPosF = wave(x => wave.linear(x), {min: boundary.x, max: maxX});
    const xMargin = boundary.x * 2;
    const xPosF = wave(x => wave.sine(x), {min: 0 - widthAt0, max: boundary.width + xMargin});
    for(var i = 0; i < sliders.length; i++) {
        const slider = sliders[i];
        const motionValue = slider.motion();
        const hue = hueF(utility.scaleFrom(slider.y, boundary.y, boundary.y + boundary.height, 0, 1));
        const widthPercent = widthF(motionValue);
        slider.color = husl.toHex(hue, 100, 60);
        slider.width = boundary.width * widthPercent;
        const x = xPosF(motionValue);
        slider.x = x;
        //slider.x = boundary.x + boundary.width / 2 - slider.width / 2;
    }
}

function makeSliders(count, boundary) {
    const result = [];
    const heightMin = boundary.height * settings.sliderHeightMin / count;
    const heightMax = boundary.height * settings.sliderHeightMax / count;
    const frequencyFunction = x => utility.scale(x, 1000 / settings.slowestSliderPeriodMs, 1000 / settings.fastestSliderPeriodMs);
    const heightFunction = wave(x => wave.reverse(wave.smooth(x / count)), {min: heightMin, max: heightMax});
    for(var i = 0; i < count; i++) {
        const frequency = frequencyFunction(i / count);
        const motion = wave(x => wave.time(frequency));
        const y = boundary.y + boundary.height / count * (count - i - 1) + (boundary.height / count / 2);
        const slider = {
            x: 0,
            y: y,
            motion,
            height: heightFunction(i)
        };
        result.push(slider);
    }
    return result;
}

function drawSliders(screen, sliders) {
    screen.drawRectangles(sliders);
}

function makeBoundary(screen) {
    const marginPercent = settings.screenMargin;
    const xMin = screen.width * marginPercent;
    const yMin = screen.height * marginPercent;
    const xMax = screen.width - xMin;
    const yMax = screen.height - yMin;
    const boundary = {
        x: xMin,
        y: yMin,
        width: xMax - xMin,
        height: yMax - yMin
    };
    return boundary;
}

export default Scene;