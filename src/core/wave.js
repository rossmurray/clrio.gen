
/**
 * config options:
 * frequency
 * shift
 * min
 * max
 * frequencyMod
 * phaseMod
 * carrierMin
 * carrierMax
 * carrierFrequency
 */
function build(carrier, config) {
    if(!carrier || typeof carrier !== 'function') {
        return x => carrier;
    }
    if(!config) {
        return carrier;
    }
    const carrierFrequency = config.carrierFrequency || 1;
    const carrierMin = config.carrierMin || 0;
    const carrierMax = config.carrierMax || 1;
    const targetMin = config.min || 0;
    const targetMax = config.max || 1
    const frequency = config.frequency || 1;
    const shift = config.shift || 0;
    const frequencyMod = config.frequencyMod || (x => 1);
    const phaseMod = config.phaseMod || (x => 0);
    const targetDelta = targetMax - targetMin;
    const carrierDelta = carrierMax - carrierMin;

    const A = carrierDelta != 0
        ? targetDelta / carrierDelta
        : 0;
    const B = carrierFrequency != 0
        ? frequency / carrierFrequency
        : 0;
    const C = -shift;
    const D = targetMin - (A - carrierMin);

    const result = x => {
        const a = A;
        const b = B * frequencyMod(x);
        const c = C + phaseMod(x);
        const d = D;
        const func = carrier;
        return a * func(b * (x + c)) + d;
    };
    return result;
}

function linear(x) {
    return x % 1;
}

//todo improve this. generate using fft?
function sawtooth(x) {
    return linear(x);
}

function sine(x) {
    return Math.sin(x * Math.PI * 2) * 0.5 + 0.5;
}

function triangle(x) {
    return Math.abs(((0.5 + x) % 1) - 0.5) * 2;
}

function square(x) {
    Math.sign(sine(x));
}

//todo: make this periodic
function round(x) {
    const rad = Math.PI / 2;
    const down = 3 * rad;
    const turn = x * rad;
    return 1 + Math.sin(down + turn)
}

//linear from 1 (exclusive) down to 0 (inclusive)
function reverse(x) {
    return 1 - Number.EPSILON - x;
}

let wave = build;
expo.linear = linear;
expo.sawtooth = sawtooth;
expo.sine = sine;
expo.triangle = triangle;
expo.square = square;
expo.round = round;
expo.reverse = reverse;

export default wave;