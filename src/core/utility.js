export function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

export function randomNumber(min, max) {
    return Math.random() * (max - min) + min;
}

export function distance(a, b) {
    return Math.hypot(b.x - a.x, b.y - a.y);
}

export function clamp(value, min, max) {
    return Math.min(Math.max(value, min), max);
}