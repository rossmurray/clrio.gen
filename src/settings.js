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
        sizeVariation: 3.5, //higher = smallest and largest panels are more different. 2 = the largest panel could be double the average.
        maxRatioSkew: 0.6, //maximum difference in ratio between widest and tallest panels. ex: 0.2 means ratios can range from 0.9 to 1.1
        maxSpeed: {min: 0.3, max: 1.2}, //fastest a panel can move, varying on panel value. 0 = cannot move. 1 = can travel the screen in 1 second.
        acceleration: {min: 0, max: 0}, //something
        minIdle: {min: 10000, max: 50000}, //shortest idle time (ms) before moving again, varying with panel value.
        maxIdle: {min: 100000, max: 200000}, //longest idle time (ms) before moving again, varying with panel value.
        //sway?
        marginPercent: 0.05,
        count: 5030,
        visualDensityPercent: 0.35, //percentage of total area matched by area of panels (assuming no overlap)
        emptyGridPercent: 0.25, //what percentage of slots are not occupied by panels at any given time
        color1: "#c20a02", //red
        color2: "#f48102", //orange
        color3: "#eccc07", //yellow
        color4: "#e7d9ac" //light pale yellow
    }
};

export default settings;