import * as utility from "../core/utility.js";
import * as husl from "husl";
import wave from "../core/wave.js";
import * as timeKeeper from "../core/timeKeeper.js";
import SimplexNoise from "../core/simplexNoise.js";
import settings from "../settings.js";
import Panel from "./panel.js";
import GridLayout from "./gridLayout.js";

const NewPanels = class NewPanels {
    constructor(screen) {
        const panelCount = settings.panels.count;
        const width = screen.width;
        const height = screen.height;
        const margin = calculateMargin(width, height);
        const fieldWidth = margin.x2 - margin.x1;
        const fieldHeight = margin.y2 - margin.y1;
        //grid positions are relative to margin
        const grid = makeGrid(panelCount, fieldWidth, fieldHeight);
        const fieldArea = fieldWidth * fieldHeight;
        const fieldDiameter = (fieldWidth + fieldHeight) / 2;
        const panels = makePanels(panelCount, grid, fieldArea, fieldDiameter);
        
        this.screen = screen;
        this.margin = margin;
        this.grid = grid;
        this.panels = panels;
    }

    update() {
        const screenSize = (this.screen.width + this.screen.height) / 2;
        const now = timeKeeper.getTotalTimeMs();
        for(let i = 0; i < this.panels.length; i++) {
            const panel = this.panels[i];
            if(!panel.moving && panel.changeAtTotalMs <= now) {
                const nodeSpot = panel.layoutNode;
                this.grid.changePosition(nodeSpot);
                const distanceToTarget = utility.distance(nodeSpot, {x: panel.x, y: panel.y});
                const tripLengthMs = distanceToTarget / panel.motion.maxVelocity * 1000;
                const idleAfter = utility.randomNumber(panel.minIdle, panel.maxIdle);
                panel.changeAtTotalMs = now + tripLengthMs + idleAfter;
                panel.motion.fixedAnimateToward(nodeSpot, tripLengthMs, wave.smooth);
            }
            panel.motion.update();
            panel.x = panel.motion.xpos - panel.width / 2;
            panel.y = panel.motion.ypos - panel.height / 2;
        }
    }

    draw() {
        this.screen.drawRectangles(this.panels);
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

function makeGrid(panelCount, width, height) {
    const emptyGridPercent = settings.panels.emptyGridPercent;
    const totalSlots = panelCount * (1 / (1 - emptyGridPercent));
    const result = new GridLayout(totalSlots, width, height);
    return result;
}

function makePanels(count, grid, fieldArea, fieldDiameter) {
    const positions = grid.getNewPositions(count);
    //let's make 1/3 of the panel values uniformly distributed, and the rest random.
    const uniformPortion = Math.floor(count / 3);
    const slice = 1 / uniformPortion;
    const offset = slice / 2;
    const midPanelSize = calculateMidPanelSize(count, fieldArea);
    const result = Array.from({length: count}, (v, k) => {
        const position = positions[k];
        if(k < uniformPortion) {
            const value = offset + slice * k; //uniform values
            return new Panel(value, position, midPanelSize, fieldDiameter);
        }
        const value = utility.randomNumber(0.01, 0.99); //random values
        return new Panel(value, position, midPanelSize, fieldDiameter);
    });
    result.sort((a,b) => b.seed - a.seed);
    calculatePanelTextures(result); //todo: move this to inside map also
    return result;
}

function calculateMidPanelSize(panelCount, fieldArea) {
    const midSize = Math.sqrt(fieldArea * settings.panels.visualDensityPercent / panelCount);
    return midSize;
}

function calculatePanelTextures(panels) {

}

export default NewPanels;