import FastSimplexNoise from "fast-simplex-noise";

const SimplexNoise = class SimplexNoise {
    constructor(config) {
        const min = config.min || 0;
        const max = config.max || 1;
        const octaves = config.octaves || 1;
        const frequency = config.frequency || 1;
        const gen = new FastSimplexNoise({
            octaves,
            min,
            max,
            frequency
        });
        this.generator = gen;
    }

    in2D(x, y) {
        return this.generator.in2D(x, y);
    }

    /**
     * pixelFunc is function(x, y, value) and should return an array of 3 integers (0-255) (rgb)
     */
    getFilledImageData(screen, pixelFunc) {
        const imageData = screen.makeImageData();
        const data = imageData.data;
        const width = screen.width;
        for(var i = 0; i < data.length; i += 4) {
            const x = (i / 4) % width;
            const y = Math.floor((i / 4) / width);
            const tone = this.generator.in2D(x, y);
            const userPixel = pixelFunc(x, y, tone);
            data[i] = userPixel[0];
            data[i + 1] = userPixel[1];
            data[i + 2] = userPixel[2];
            data[i + 3] = 255; //alpha
        }
        return imageData;
    }
};

export default SimplexNoise;