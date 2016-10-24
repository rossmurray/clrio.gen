import Circle from "./circle.js";
import * as utility from "../core/utility.js";
import * as husl from "husl";
import wave from "../core/wave.js";

const Circles = class Circles {
    constructor(n, screen) {
        this.circleData = Array.from(Array(n)).map(x => new Circle());
        this.screen = screen;
    }

    update() {
        const hx = wave(x => wave.time(1/3) + wave.triangle(x), {frequency: 1.5, min: 0, max: 360});
        for(const circle of this.circleData) {
            circle.x = utility.randomInt(0, this.screen.width);
            circle.y = utility.randomInt(0, this.screen.height);
            const xpercent = circle.x / screen.width;
            const ypercent = circle.y / screen.height; 
            const h = hx((xpercent + ypercent) / 2);
            const s = utility.randomNumber(90, 100);
            const l = utility.randomNumber(60, 65);
            const color = husl.toHex(h, s, 55);
            circle.color = color;
            circle.r = 10;
        }
    }

    draw() {
        this.screen.drawCircles(this.circleData);
    }
};

export default Circles;