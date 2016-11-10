const settings = {
    bgColor: "#222222",
    numPanels: 55,
    panelXMarginFactor: 0.05,
    panelYMarginFactor: 0.05,
    panelMinWidthFactorOfMargin: 0.4,
    panelMaxWidthFactorOfMin: 2.4,
    panelMinHeightRatio: 0.9,
    panelMaxHeightRatio: 2.6,
    panelMinTTL: 4700,
    panelMaxTTL: 8133,
    panelShadowSize: 10,
    //---------------
    marginPercent: 0.05,
    panels: {
        sizeVariation: 2, //higher = smallest and largest panels are more different. 2 = the largest panel could be double the average.
        maxRatioSkew: 0.3, //maximum difference in ratio between widest and tallest panels. ex: 0.2 means ratios can range from 0.9 to 1.1
        maxSpeed: {min: 0.1, max: 0.75}, //fastest a panel can move, varying on panel value. 0 = cannot move. 1 = can travel the screen in 1 second.
        acceleration: {min: 0, max: 0}, //something
        minIdle: {min: 100, max: 8000}, //shortest idle time (ms) before moving again, varying with panel value.
        maxIdle: {min: 4000, max: 25000}, //longest idle time (ms) before moving again, varying with panel value.
        //sway?
        marginPercent: 0.05,
        count: 70,
        visualDensityPercent: 0.8, //percentage of total area matched by area of panels (assuming no overlap)
        emptyGridPercent: 0.2, //what percentage of slots are not occupied by panels at any given time
        color1: "#c20a02", //red
        color2: "#f48102", //orange
        color3: "#eccc07", //yellow
        color4: "#e7d9ac" //light pale yellow
    }
};

export default settings;