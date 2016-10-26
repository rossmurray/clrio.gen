import Panel from "./panel.js";
import PanelMotion from "./panelMotion.js";
import * as utility from "../core/utility.js";
import * as husl from "husl";
import wave from "../core/wave.js";
import * as timeKeeper from "../core/timeKeeper.js";
import settings from "../settings.js";

const Panels = class Panels {
    constructor(n, screen) {
        this.boundary = determineBoundary(screen.width, screen.height);
        const initialPanels = randomPanels(n, this.boundary);
        this.panelData = initialPanels.data;
        this.panelMotion = initialPanels.motion;
        //this.panelData = Array.from(Array(n)).map(() => new Panel());
        this.screen = screen;
    }

    update() {
        determineBoundary(this.screen.width, this.screen.height);
        const n = this.panelData.length;
        const now = timeKeeper.getTotalTimeMs();
        for(let i = 0; i < n; i++) {
            const panel = this.panelData[i];
            const motion = this.panelMotion[i];
            if(now >= motion.arrivalTotalMs) {
                const ttl = utility.randomInt(settings.panelMinTTL, settings.panelMaxTTL);
                motion.arrivalTotalMs = now + ttl;
                motion.embarkTotalMs = now;
                motion.motion = t => wave.smooth(wave.smooth((t - motion.embarkTotalMs) / (motion.arrivalTotalMs - motion.embarkTotalMs)));  
                motion.origin.x = panel.x;
                motion.origin.y = panel.y;
                motion.target = randomPosition(this.boundary, panel.height);
            }
            else {
                const percentageToTarget = motion.motion(now);
                panel.x = percentageToTarget * (motion.target.x - motion.origin.x) + motion.origin.x;
                panel.y = percentageToTarget * (motion.target.y - motion.origin.y) + motion.origin.y;
                //panel.color = husl.toHex(percentageToTarget * 360, 100, 55);
            }
            //update color?
            //update dimensions?
        }
    }

    draw() {
        this.screen.drawRectangles(this.panelData, settings.panelShadowSize);
    }
};

function randomPanels(n, boundary) {
    const data = Array.apply(null, Array(n)).map(() => new Panel());
    const motion = Array.apply(null, Array(n)).map(() => new PanelMotion());
    const minWidth = (boundary.x1 + boundary.y1) * settings.panelMinWidthFactorOfMargin;
    const maxWidth = minWidth * settings.panelMaxWidthFactorOfMin;
    const minHeightRatio = settings.panelMinHeightRatio;
    const maxHeightRatio = settings.panelMaxHeightRatio;
    const now = timeKeeper.getTotalTimeMs();
    for(let i = 0; i < n; i++) {
        const d = data[i];
        const m = motion[i];
        d.width = utility.randomNumber(minWidth, maxWidth);
        d.height = d.width * utility.randomNumber(minHeightRatio, maxHeightRatio);
        const position = randomPosition(boundary, d.height);
        d.x = position.x;
        d.y = position.y;
        m.origin = {x: position.x, y: position.y};
        const ttl = utility.randomInt(settings.panelMinTTL, settings.panelMaxTTL);
        m.arrivalTotalMs = now + ttl;
        m.embarkTotalMs = now;
        m.motion = t => wave.smooth(wave.smooth((t - m.embarkTotalMs) / (m.arrivalTotalMs - m.embarkTotalMs)));
        m.target = randomPosition(boundary, d.height);
        const h = utility.randomNumber(70, 90);
        const s = 100;
        const l = utility.randomNumber(70, 90);
        d.color = husl.toHex(h, s, l);
    }
    return {data, motion};
}

function determineBoundary(width, height) {
    const marginX = width * settings.panelXMarginFactor;
    const marginY = height * settings.panelYMarginFactor;
    const maxX = width - marginX;
    const maxY = height - marginY;
    return {
        x1: marginX,
        y1: marginY,
        x2: maxX,
        y2: maxY
    };
}

function randomPosition(boundary, panelHeight) {
    return {
        x: utility.randomInt(boundary.x1, boundary.x2),
        y: utility.randomInt(boundary.y1, boundary.y2 - panelHeight)
    };
}

function makeArrivalTime() {
    return timeKeeper.getTotalTimeMs()
        + utility.randomInt(settings.panelMinTTL, settings.panelMaxTTL);
}

export default Panels;