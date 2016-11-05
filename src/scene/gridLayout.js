import wave from "../core/wave.js";
import shuffle from "lodash/shuffle";

const GridLayout = class GridLayout {
    constructor(approxPositionCount, width, height) {
        const positions = createPositions(approxPositionCount, width, height);
        this.positions = positions;
        const empties = shuffle(positions);
        this.empty = empties;
    }

    takeNewPosition() {
        const next = this.empty.shift();
        return next;
    }

    //changes parameter in-place to a new position, and returns it
    changePosition(oldPosition) {
        const next = this.empty.shift();
        //swap
        [a.x, b.x] = [b.x, a.x];
        [a.y, b.y] = [b.y, a.y];
        this.empty.push(next);
        return oldPosition;
    }
};

function createPositions(approxNumber, width, height) {
    const half = Math.sqrt(approxNumber);    
    const screenRatio = width / height;
    const columns = 1 + Math.floor(screenRatio * half);
    const rows = Math.floor((1 / screenRatio) * half);
    const result = [];
    const rise = height / rows;
    const run = width / columns;
    for(let i = 0; i < columns; i++) {
        for(let j = 0; j < rows; j++) {
            const x = run * (i + 1);
            const y = rise * (i + 1);
            const newPosition = {x, y};
            result.push(newPosition);
        }
    }
    return result;
}

export default GridLayout;