/*
 * Ludum_Dare_25 
 * @author Ryan Miller (rozifus) <http://www.github.com/rozifus/> 
 * @license This work is licensed under the Creative Commons Attribution-NonCommercial 3.0 Unported License.
 * To view a copy of this license, visit http://creativecommons.org/licenses/by-nc/3.0/.
 */

Crafty.scene('load_sprites', function() {
    Crafty.background('#FFF');
    var tiles = 'resources/tiles/' 
    Crafty.e("2D, DOM, Text").attr({ w: 100, h: 20, x: 180, y: 200 })
                             .text("Loading Sprites")
                             .css({ 'text-align': "center" });
    Crafty.sprite(16, tiles + 'grass_sub.png', { grass_sub: [0,0] } );
    Crafty.sprite(16, tiles + 'grass_surf.png', { grass_surf: [0,0] } );
    Crafty.sprite(16, tiles + 'stone.png', { stone: [0,0] } );
    Crafty.scene('main');
});

