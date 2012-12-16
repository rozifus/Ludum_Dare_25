/*
 * Ludum_Dare_25 
 * @author Ryan Miller (rozifus) <http://www.github.com/rozifus/> 
 * @license This work is licensed under the Creative Commons Attribution-NonCommercial 3.0 Unported License.
 * To view a copy of this license, visit http://creativecommons.org/licenses/by-nc/3.0/.
 */

var Dare = Dare || {}
Dare.TILE_SIZE = 16;
Dare.TILES_X = 50;
Dare.TILES_Y = 30;
Dare.SURFACE_Y = 22;
Dare.getWidth = function() { return this.TILES_X * this.TILE_SIZE; };
Dare.getHeight = function() { return this.TILES_Y * this.TILE_SIZE; };
Dare.getSize = function() { return [this.getWidth(), this.getHeight()]; };
Dare.getCoordsFromGrid = function(x,y) { 
    return { x: x*this.TILE_SIZE, y: y*this.TILE_SIZE}
};

$(document).ready(function() {
    Crafty.init(Dare.getWidth() , Dare.getHeight());
    //Crafty.canvas.init();
    Crafty.scene('load_images');
});

