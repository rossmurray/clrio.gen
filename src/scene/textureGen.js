import * as husl from "husl";
import SimplexNoise from "../core/simplexNoise.js";
import * as utility from "../core/utility.js";

export function draw(screen) {
    const width = screen.width;
    const height = screen.height;
    const noiseGen = new SimplexNoise({
        octaves: 1,
        min: 0,
        max: 1,
        frequency: 1/151
    });
    const distance = distanceFromCenter(width, height);
    const imageData = noiseGen.getFilledImageData(screen, (x, y, value) => {
        const h = 180 + ((value * 210) + ((x / width) * 210)) / 2
        const s = 100;
        const l = 
            (
                (value * (85 - 45) + 45)
                + ((1 - distance(x,y)) * (90 - 30) + 30)
            ) / 2;
        const rgb = husl.toRGB(h, s, l);
        const bytes = rgb.map(x => Math.floor(x * 255));
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