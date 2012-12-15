/*
 * Ludum_Dare_25 
 * @author Ryan Miller (rozifus) <http://www.github.com/rozifus/> 
 * @license This work is licensed under the Creative Commons Attribution-NonCommercial 3.0 Unported License.
 * To view a copy of this license, visit http://creativecommons.org/licenses/by-nc/3.0/.
 */

var generateGrass = function() {
    for (var y = 0; y < Dare.TILES_Y; y++) {
        for (var x = 0; x < Dare.TILES_X; x++) {
            if (y == Dare.SURFACE_Y) {
                Crafty.e('2D, DOM, grass_surf, SpriteAnimation')
                    .attr({x: x * Dare.TILE_SIZE, y: y * Dare.TILE_SIZE})
                    .animate('wind', 0, 0, 2)
                    .animate('wind', 20, -1)
                    ._frame.currentSlideNumber = Math.floor(Math.random() * 3);
            } else if (y > Dare.SURFACE_Y) {
                Crafty.e('2D, DOM, grass_sub, SpriteAnimation')
                    .attr({x: x * Dare.TILE_SIZE, y: y * Dare.TILE_SIZE})
                    .animate('wind', 0, 0, 2)
                    .animate('wind', 20, -1)
                    ._frame.currentSlideNumber = Math.floor(Math.random() * 3);
            };
        };
    };
};

Crafty.scene('main', function() {
    generateGrass()
});
