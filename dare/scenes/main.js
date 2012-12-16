/*
 * Ludum_Dare_25 
 * @author Ryan Miller (rozifus) <http://www.github.com/rozifus/> 
 * @license This work is licensed under the Creative Commons Attribution-NonCommercial 3.0 Unported License.
 * To view a copy of this license, visit http://creativecommons.org/licenses/by-nc/3.0/.
 */

var castle = [
/*
 0         1         2         3         4
 01234567890123456789012345678901234567890123456789 */
"                                                  ",  // 00
"                                                  ",  // 01
"                                                  ",  // 02
"                                                  ",  // 03
"                                                  ",  // 04
"                                                  ",  // 05
"                                                  ",  // 06
"                                                  ",  // 07
"                                                  ",  // 08
"                                                  ",  // 09
"                                                  ",  // 10
"                                                  ",  // 11
"                                                  ",  // 12
"                                                  ",  // 13
"                                                  ",  // 14
"                                                  ",  // 15
"                                                  ",  // 16
"                                                  ",  // 17
"                                      ********    ",  // 18
"                                      ********    ",  // 19
"                                      ********    ",  // 20
"          *               *           ********    ",  // 21
"          *    *         **           ********    ",  // 22
"                                                  ",  // 23
"                                                  ",  // 24
"                                                  ",  // 25
"                                                  ",  // 26
"                                                  ",  // 27
"                                                  ",  // 28
"                                                  ",  // 29
/*
 0         1         2         3         4
 01234567890123456789012345678901234567890123456789 */
]

var buildCastle = function() {
    for (var y = 0; y < Dare.TILES_Y; y++) {
        for (var x = 0; x < Dare.TILES_X; x++) {
            if (castle[y].substr(x, 1) == '*') {
                var coords = Dare.getCoordsFromGrid( x,y );
                coords.y -= 2;
                Crafty.e('2D, DOM, Gravity, SpriteAnimation, stone, Health, Solid')
                    .attr( coords )
                    .animate('light', 0, 0, 1)
                    .gravity('Solid')
                    .animate('light', 20, -1)
                    ._frame.currentSlideNumber = Math.floor(Math.random() * 3);
            };
        };
    };
};



var generateGrass = function() {
    for (var y = 0; y < Dare.TILES_Y; y++) {
        for (var x = 0; x < Dare.TILES_X; x++) {
            if (y == Dare.SURFACE_Y) {
                Crafty.e('2D, DOM, grass_surf, SpriteAnimation')
                    .attr({x: x * Dare.TILE_SIZE, y: y * Dare.TILE_SIZE})
                    .animate('wind', 0, 0, 2)
                    .animate('wind', 30, -1)
                    ._frame.currentSlideNumber = Math.floor(Math.random() * 3);
            } else if (y > Dare.SURFACE_Y) {
                var grass = Crafty.e('2D, DOM, grass_sub, SpriteAnimation, Grass, Solid')
                        .attr({x: x * Dare.TILE_SIZE, y: y * Dare.TILE_SIZE})
                        .animate('wind', 0, 0, 2)
                        .animate('wind', 300, -1);
                    grass._frame.currentSlideNumber = Math.floor(Math.random() * 3);
                    grass._frame.frameNumberBetweenSlides = Math.floor(Math.random() * 100)
            };
        };
    };
};

var placeUnits = function() {
    Crafty.e('cVillain')
        .attr( Dare.getCoordsFromGrid(44, 16) )
    Crafty.e('Knight')
        .attr( Dare.getCoordsFromGrid(4, 20) )
    Crafty.e('Knight')
        .attr( Dare.getCoordsFromGrid(9, 20) )
    Crafty.e('Knight')
        .attr( Dare.getCoordsFromGrid(6, 20) )
};

Crafty.scene('main', function() {
    generateGrass();
    buildCastle();
    placeUnits();
    Crafty.addEvent(this, Crafty.stage.elem, "mousedown", function(e) {
        Crafty.trigger('PlayerClick', {x: e.layerX, y: e.layerY});
    });

});
