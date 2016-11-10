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
        const panels = makePanels(panelCount, grid, fieldArea);
        
        this.screen = screen;
        this.margin = margin;
        this.grid = grid;
        this.panels = panels;
    }

    update() {

    }

    draw() {

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
    const approxCount = panelCount * (1 / (1 - emptyGridPercent));
    const result = new GridLayout(approxCount, width, height);
    return result;
}

function makePanels(count, grid, fieldArea) {
    const positions = grid.getNewPositions(count);
    const uniformPortion = Math.floor(count / 3);
    const slice = 1 / uniformPortion;
    const offset = slice / 2;
    const midPanelSize = calculateMidPanelSize(count, fieldArea);
    const result = Array.from({length: count}, (v, k) => {
        const position = positions[k];
        if(k < uniformPortion) {
            const value = offset + slice * k;
            return new Panel(value, position, midPanelSize);
        }
        const value = utility.randomNumber(0.01, 0.99);
        return new Panel(value, position, midPanelSize);
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