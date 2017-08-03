function getPatterns() {
    "use strict";
    var patterns = '{"bg":[' +
        '{"name":"Ahoy","author":"Lorena G", "url":"url(assets/images/backgrounds/ahoy.jpg)" },' +
        '{"name":"Alchemy","author":"Anton Repponen", "url":"url(assets/images/backgrounds/alchemy.gif)" },' +
        '{"name":"Asteroids","author":"Sanja Kusturica", "url":"url(assets/images/backgrounds/asteroids.jpg)" },' +
        '{"name":"Brijan","author":"Brijan Powell", "url":"url(assets/images/backgrounds/brijan.gif)" },' +
        '{"name":"Bunting Flag","author":"Raul Varela", "url":"url(assets/images/backgrounds/bunting-flag.png)" },' +
        '{"name":"Memphis Colorful","author":"Raul Gaitan", "url":"url(assets/images/backgrounds/memphis-colorful.png)" },' +
        '{"name":"Random Grey Variations","author":"Stefan Aleksić", "url":"url(assets/images/backgrounds/random_grey_variations.png)" },' +
        '{"name":"Bicycles","author":"Shaun Fox", "url":"url(assets/images/backgrounds/bicycles.png)" }]}';
    return patterns;
}

function populateGrid() {
    "use strict";
    var grid, patternsObject, i, tile;
    grid = document.getElementById("grid");
    patternsObject = JSON.parse(getPatterns());
    i = 0;
    for (i; i < patternsObject.bg.length; i += 1) {
        tile = document.createElement("div");
        tile.className = "tile";
        tile.style.backgroundImage = patternsObject.bg[i].url;
        tile.innerHTML = "<div><h1>" + patternsObject.bg[i].name + "</h1><h2>" + patternsObject.bg[i].author + "</h2></div>";
        grid.appendChild(tile);
    }
}

function main() {
    "use strict";
    populateGrid();
}
main();