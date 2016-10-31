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
    const imageData = noiseGen.getFilledImageData(screen, (x, y, value) => {
        const h = value * 360 - 90;
        const s = 100;
        const l = value * (85 - 45) + 45;
        const rgb = husl.toRGB(h, s, l);
        const bytes = rgb.map(x => Math.floor(x * 255));
        return bytes;
    });
    screen.context.putImageData(imageData, 0, 0);
}