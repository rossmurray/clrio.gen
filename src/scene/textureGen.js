import * as husl from "husl";
import SimplexNoise from "../core/simplexNoise.js";
import * as utility from "../core/utility.js";

export function draw(screen) {
    const width = screen.width;
    const height = screen.height;
    const noiseGen = new SimplexNoise({
        octaves: 8,
        min: 0,
        max: 1,
        frequency: 1/19
    });
    const distance = distanceFromCenter(width, height);
    const imageData = noiseGen.getFilledImageData(screen, (x, y, value) => {
        const d = distance(x,y);
        const h = 3 + ((value * 100) + (d * 100)) / 2;
        const s = 100;
        const l = 
            (
                (value * (70 - 35) + 35)
                + ((1 - d) * (70 - 45) + 45)
            ) / 2;
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