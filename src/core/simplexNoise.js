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
};

export default SimplexNoise;