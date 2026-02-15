
elements.gteam_asteroid = {
    color: "#7d6556",
    behavior: behaviors.POWDER,
    category: "GTeam Stuff",
    state: "solid",
    density: 1600,
    temp: 1000,
   
    tick: function(pixel) {
        // check pixel below
        var below = pixelMap[pixel.x]?.[pixel.y + 1];

        if (below && below.element !== "air") {
            explodeAt(pixel.x, pixel.y, 12);
            deletePixel(pixel.x, pixel.y);
        }
    }
};
