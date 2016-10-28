import * as husl from "husl";
import SimplexNoise from "../core/simplexNoise.js";
import * as utility from "../core/utility.js";

export function draw(screen) {
    const width = screen.width;
    const height = screen.height;
    const hueGen = new SimplexNoise({
        octaves: 3,
        min: 0,
        max: 1,
        frequency: 1/153
    });
    // const satGen = new FastSimplexNoise({
    //     octaves: 3,
    //     min: 40,
    //     max: 100,
    //     frequency: 1/61
    // });
    // const lightGen = new FastSimplexNoise({
    //     octaves: 3,
    //     min: 5,
    //     max: 95,
    //     frequency: 1/81
    // });
    const imageData = screen.context.createImageData(width, height);
    const data = imageData.data;
    for(var i = 0; i < data.length; i += 4) {
        const x = (i / 4) % width;
        const y = Math.floor((i / 4) / width);
        const tone = hueGen.in2D(x, y);
        if(tone >= 0.6) {
            const value = (tone - 0.6) * (1 / 0.6);
            const h = utility.randomNumber(0, 1) * 180 - 90;
            const s = 100;
            const l = value * (80 - 50) + 50;
            const rgb = husl.toRGB(h, s, l);
            const r = rgb[0];
            const g = rgb[1];
            const b = rgb[2];
            data[i] = Math.floor(r * 255);
            data[i + 1] = Math.floor(g * 255);
            data[i + 2] = Math.floor(b * 255);
            data[i + 3] = 255;
        }
        else {
            const value = tone * (1 / 0.6);
            const h = value * (310-292) + 292;
            const s = 100;
            const l = value * (50 - 45) + 45;
            const rgb = husl.toRGB(h, s, l);
            const r = rgb[0];
            const g = rgb[1];
            const b = rgb[2];
            data[i] = Math.floor(r * 255);
            data[i + 1] = Math.floor(g * 255);
            data[i + 2] = Math.floor(b * 255);
            data[i + 3] = 255;
        }
    }
    screen.context.putImageData(imageData, 0, 0);
}