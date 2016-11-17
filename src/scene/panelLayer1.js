import * as utility from "../core/utility.js";
import wave from "../core/wave.js";
import * as timeKeeper from "../core/timeKeeper.js";
import settings from "../settings.js";
import Panel from "./panel.js";
import GridLayout from "./gridLayout.js";

const PanelLayer1 = class PanelLayer1 {
    constructor(bounds) {
        const panelCount = settings.panels.count;
        const width = bounds.width;
        const height = bounds.height;
        //grid positions are relative to bounds x and y
        const grid = makeGrid(panelCount, bounds);
        const area = width * height;
        const fauxDiameter = (width + height) / 2;
        const panels = makePanels(panelCount, grid, area, fauxDiameter);
        
        this.bounds = bounds;
        this.grid = grid;
        this.panels = panels;
    }

    update() {
        const screenSize = (this.bounds.width + this.bounds.height) / 2;
        const now = timeKeeper.getTotalTimeMs();
        const swayPauseMs = utility.randomInt(500, 5000);
        for(let i = 0; i < this.panels.length; i++) {
            const panel = this.panels[i];
            if(!panel.motion.moving) {
                if(panel.changeAtTotalMs <= now) {
                    const nodeSpot = panel.layoutNode;
                    this.grid.changePosition(nodeSpot);
                    const distanceToTarget = utility.distance(nodeSpot, {x: panel.x, y: panel.y});
                    const tripLengthMs = distanceToTarget / panel.motion.maxVelocity;
                    const idleAfter = utility.randomNumber(panel.minIdle, panel.maxIdle);
                    panel.changeAtTotalMs = now + tripLengthMs + idleAfter;
                    panel.motion.fixedAnimateToward(nodeSpot, tripLengthMs, wave.smooth);
                }
                else if(now - panel.motion.idleSince > swayPauseMs){
                    const xscale = panel.width / 12;
                    const yscale = panel.height / 20;
                    // const xShift = utility.randomNumber(-xscale, xscale);
                    // const yShift = utility.randomNumber(-yscale, yscale);
                    const xShift = utility.randomNumber(-12, 12);
                    const yShift = utility.randomNumber(-6, 6);
                    const destination = {x: panel.layoutNode.x + xShift, y: panel.layoutNode.y + yShift};
                    const timeScale = utility.scale(panel.seed, 4500, 2000);
                    const tripLengthMs = utility.randomNumber(timeScale - timeScale / 4, timeScale + timeScale / 4);
                    panel.motion.fixedAnimateToward(destination, tripLengthMs, wave.smooth);
                }
            }
            panel.motion.update();
            panel.x = Math.round(panel.motion.xpos + this.bounds.x - panel.width / 2);
            panel.y = Math.round(panel.motion.ypos + this.bounds.y - panel.height / 2);
        }
    }

    getPanelsForDraw() {
        return this.panels;
    }
};

function calculateMargin(width, height) {
    const marginX = width * settings.panels.marginPercent;
    const marginY = height * settings.panels.marginPercent;
    const maxX = width - marginX;
    const maxY = height - marginY;
    return {
        x1: marginX,
        y1: marginY,
        x2: maxX,
        y2: maxY
    };
}

function makeGrid(panelCount, bounds) {
    const emptyGridPercent = settings.panels.emptyGridPercent;
    const totalSlots = Math.ceil(panelCount * (1 + emptyGridPercent));
    const result = new GridLayout(totalSlots, bounds.width, bounds.height);
    return result;
}

function makePanels(count, grid, fieldArea, fieldDiameter) {
    const positions = grid.getNewPositions(count);
    //let's make 1/4 of the panel values uniformly distributed, and the rest random.
    const uniformPortion = Math.floor(count / 4);
    const slice = 1 / uniformPortion;
    const offset = slice / 2;
    const midPanelSize = calculateMidPanelSize(count, fieldArea);
    const result = Array.from({length: count}, (v, k) => {
        const position = positions[k];
        if(k < uniformPortion) {
            const value = offset + slice * k; //uniform values
            return new Panel(value, position, midPanelSize, fieldDiameter);
        }
        const value = utility.randomNumber(0.1, 0.99); //random values
        return new Panel(value, position, midPanelSize, fieldDiameter);
    });
    result.sort((a,b) => a.seed - b.seed);
    calculatePanelTextures(result); //todo: move this to inside map also
    return result;
}

function calculateMidPanelSize(panelCount, fieldArea) {
    const midSize = Math.sqrt(fieldArea * settings.panels.visualDensityPercent / panelCount);
    return midSize;
}

function calculatePanelTextures(panels) {

}

export default PanelLayer1;