import Circle from "./circle.js";
import core from "../core/core.js";
import * as husl from "husl";

const Circles = class Circles {
    constructor(n) {
        this.circleData = Array.from(Array(n)).map(x => new Circle());
    }

    update() {
        for(const circle of this.circleData) {
            circle.x = core.randomInt(0, 1000);
            circle.y = core.randomInt(0, 800);
            const h = core.randomNumber(0, 360);
            const s = core.randomNumber(40, 100);
            const l = core.randomNumber(45, 85);
            const color = husl.toHex(h, s, l);
            circle.color = color;
            circle.r = 5;
        }
    }

    draw(screen) {
        screen.drawCircles(this.circleData);
    }
};

export default Circles;