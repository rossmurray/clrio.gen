import * as utility from "../core/utility.js";
import * as husl from "husl";
import wave from "../core/wave.js";
import * as timeKeeper from "../core/timeKeeper.js";
import SimplexNoise from "../core/simplexNoise.js";
import settings from "../settings.js";
import Panel from "./panel.js";
import PanelLayer1 from "./panelLayer1.js";
import GridLayout from "./gridLayout.js";

const NewPanels = class NewPanels {
    constructor(screen) {
        const width = screen.width;
        const height = screen.height;
        const margin = calculateMargin(width, height);
        const fieldWidth = margin.x2 - margin.x1;
        const fieldHeight = margin.y2 - margin.y1;
        const bounds = {x: margin.x1, y: margin.y1, width: fieldWidth, height: fieldHeight};
        const noiseGen = new SimplexNoise({
            octaves: 1,
            min: 0,
            max: 1,
            frequency: 1/29
        });
        const layer1 = new PanelLayer1(bounds);
        
        this.screen = screen;
        this.margin = margin;
        this.noise = noiseGen;
        this.layers = [layer1];
    }

    update() {
        //const now = timeKeeper.getTotalTimeMs();
        for(let i = 0; i < this.layers.length; i++) {
            const layer = this.layers[i];
            layer.update();
        }
    }

    draw() {
        const panels = this.layers.reduce((a,b) => a.concat(b.getPanelsForDraw()), []);
        this.screen.drawRectangles(panels, 22);
        //this.screen.drawCircles(this.grid.empty.map(x => { return {x: x.x, y: x.y, r: 20, color: "#0ff"}; }));
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

export default NewPanels;