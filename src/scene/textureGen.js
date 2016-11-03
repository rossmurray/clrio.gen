import * as husl from "husl";
import SimplexNoise from "../core/simplexNoise.js";
import * as utility from "../core/utility.js";
import wave from "../core/wave.js";

export function draw(screen) {
    const width = screen.width;
    const height = screen.height;
    const noiseGen = new SimplexNoise({
        octaves: 8,
        min: 0,
        max: 1,
        frequency: 1/29
    });
    const distance = distanceFromCenter(width, height);
    const fmod = wave(x => wave.sine(x), {frequency: 5});
    const ripple = wave(x =>
        wave.triangle(wave.sine(x)),
        {frequency: 1/4}
    );
    const imageData = noiseGen.getFilledImageData(screen, (x, y, value) => {
        //const d = distance(x,y);
        const hue = value < 0
            ? value - (value / 2)
            : value;
        const h = ripple(hue) * (103 - 11) + 11;
        const s = 100;
        const light = value < 0
            //? (value * 0.65 + ripple(value) * 0.35)
            ? value - (value / 3)
            : value;
        const l = ripple(light) * (73 - 31) + 31;
        const rgb = husl.toRGB(h, s, l);
        const bytes = rgb;
        return bytes;
    });
    screen.context.putImageData(imageData, 0, 0);
}

function distanceFromCenter(width, height) {
    const centerX = width / 2;
    const centerY = height / 2;
    const radius = Math.hypot(centerX, centerY);
    const distance = (x,y) => {
        return Math.hypot(x - centerX, y - centerY) / radius;
    };
    return distance;
}