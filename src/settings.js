const settings = {
    bgColor: "#bdad9e",
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
        sizeVariation: 1.7, //higher = smallest and largest panels are more different. 2 = the largest panel will be double the smallest.
        maxRatioSkew: 0, //maximum difference in ratio between widest and tallest panels. ex: 0.2 means ratios can range from 0.9 to 1.1
        maxSpeed: {min: 0.08, max: 0.65}, //fastest a panel can move, varying on panel value. 0 = cannot move. 1 = can travel the screen in 1 second.
        acceleration: {min: 0, max: 0}, //something
        minIdle: {min: 9000, max: 15000}, //shortest idle time (ms) before moving again, varying with panel value.
        maxIdle: {min: 24000, max: 135000}, //longest idle time (ms) before moving again, varying with panel value.
        //sway?
        marginPercent: 0.05,
        count: 68,
        visualDensityPercent: 1.05, //percentage of total area matched by area of panels (assuming no overlap)
        emptyGridPercent: 0.012, //what percentage of slots are not occupied by panels at any given time
        color1: "#c20a02", //red
        color2: "#f48102", //orange
        color3: "#eccc07", //yellow
        color4: "#e7d9ac" //light pale yellow
    }
};

export default settings;