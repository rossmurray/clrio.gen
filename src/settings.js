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