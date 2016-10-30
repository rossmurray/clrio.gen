import * as husl from "husl";
import SimplexNoise from "../core/simplexNoise.js";
import * as utility from "../core/utility.js";

export function draw(screen) {
    const width = screen.width;
    const height = screen.height;
    const hueGen = new SimplexNoise({
        octaves: 1,
        min: 0,
        max: 1,
        frequency: 1/151
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
        if(tone < 0.35) {
            const value = tone * (1 / 0.35);
            const h = value * (265 - 257) + 257;
            const s = 95;
            const l = value * (65 - 23) + 23;
            const rgb = husl.toRGB(h, s, l);
            const r = rgb[0];
            const g = rgb[1];
            const b = rgb[2];
            data[i] = Math.floor(r * 255);
            data[i + 1] = Math.floor(g * 255);
            data[i + 2] = Math.floor(b * 255);
            data[i + 3] = 255;
        }
        else if(tone < 0.7){
            const value = (tone - 0.35) * (1 / (0.7 - 0.35));
            const h = value * (13-11) + 11;
            const s = 100;
            const l = value * (70 - 29) + 29;
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
            const value = (tone - 0.7) * (1 / (1 - 0.7));
            //const h = value * (280-0) + 0;
            const h = 200;
            const s = 0;
            const l = value * (100 - 85) + 85;
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