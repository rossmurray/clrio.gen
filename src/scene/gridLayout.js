import wave from "../core/wave.js";
import shuffle from "lodash/shuffle"; 

const GridLayout = class GridLayout {
    constructor(slotCount, width, height) {
        const positions = createPositions(slotCount, width, height);
        const empties = shuffle(positions);
        this.empty = empties;
    }

    getNewPositions(n) {
        const take = this.empty.slice(0, n);
        const rest = this.empty.slice(n);
        this.empty = rest;
        return take;
    }

    //changes parameter in-place to a new position, and returns it
    //could change this to a counter that says which empty is next, instead of modifying the array every time.
    changePosition(oldPosition) {
        const next = this.empty.shift();
        //swap
        const a = oldPosition;
        const b = next;
        [a.x, b.x] = [b.x, a.x];
        [a.y, b.y] = [b.y, a.y];
        this.empty.push(next);
        return oldPosition;
    }
};

function createPositions(slotCount, width, height) {
    const half = Math.sqrt(slotCount);    
    const screenRatio = width / height;
    const columns = Math.ceil(half * screenRatio);
    //const rows = Math.floor((1 / screenRatio) * half);
    const rows = slotCount / columns;
    const result = [];
    const rise = height / rows;
    const run = width / columns;
    for(let i = 0; i < columns; i++) {
        for(let j = 0; j < rows; j++) {
            const x = run * (i + 1);
            const y = rise * (j + 1);
            const newPosition = {x, y};
            result.push(newPosition);
        }
    }
    return result;
}

export default GridLayout;