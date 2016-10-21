import * as mainLoop from "mainloop.js";
import * as husl from "husl";
import "./utility.js";
import core from "./core.js";

var context;
var canvas;

function main() {
    canvas = document.getElementById('canvas');
    context = canvas.getContext('2d');
    let width = canvas.clientWidth;
    let height = canvas.clientHeight;
    canvas.width = width;
    canvas.height = height;

    mainLoop.setUpdate(mainUpdate);
    mainLoop.setDraw(mainDraw);
    mainLoop.setEnd(mainEnd);
    mainLoop.start();
}

function mainUpdate(deltaMs) {
}

function mainDraw(interpolationPercentage) {
    let width = canvas.clientWidth;
    let height = canvas.clientHeight;
    if(canvas.width != width || canvas.height != height) {
        canvas.width = width;
        canvas.height = height;
    }
    //context.fillStyle = "#222222";
    //context.fillRect(0, 0, width, height);
    let count = 0;
    let n = 600;
    for(count = 0; count < 100; count++) {
        let x = core.randomInt(0, width);
        let y = core.randomInt(0, height);
        let h = core.randomNumber(0, 360);
        let s = core.randomNumber(20, 100);
        let l = core.randomNumber(45, 75);
        let color = husl.toHex(h, s, l);
        context.circle(x, y, 9, color)
    }
}

function mainEnd(fps, panic) {
    if(panic) {
        var discardedTime = Math.round(mainLoop.resetFrameDelta());
        console.warn('Main loop panicked, probably because the browser tab was put in the background. Discarding ' + discardedTime + 'ms');
    }
}

main();