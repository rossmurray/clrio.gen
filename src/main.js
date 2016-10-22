import * as mainLoop from "mainloop.js";
import * as husl from "husl";
import "./core/utility.js";
import core from "./core/core.js";
import settings from "./settings.js";
import Circles from "./content/circles.js";
import Screen from "./core/screen.js";

var circles;
var screen;

function main() {
    const canvas = document.getElementById('canvas');
    const context = canvas.getContext('2d');
    const width = canvas.clientWidth;
    const height = canvas.clientHeight;
    canvas.width = width;
    canvas.height = height;

    screen = new Screen(canvas, context);
    circles = new Circles(settings.numCircles);
    mainLoop.setUpdate(mainUpdate);
    mainLoop.setDraw(mainDraw);
    mainLoop.setEnd(mainEnd);
    mainLoop.start();
}

function mainUpdate(deltaMs) {
    circles.update();
}

function mainDraw(interpolationPercentage) {
    screen.resize();
    screen.clear(settings.bgColor);

    circles.draw(screen);
}

function mainEnd(fps, panic) {
    if(panic) {
        var discardedTime = Math.round(mainLoop.resetFrameDelta());
        console.warn('Main loop panicked, probably because the browser tab was put in the background. Discarding ' + discardedTime + 'ms');
    }
}

main();