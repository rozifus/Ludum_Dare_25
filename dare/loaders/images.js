/*
 * Ludum_Dare_25 
 * @author Ryan Miller (rozifus) <http://www.github.com/rozifus/> 
 * @license This work is licensed under the Creative Commons Attribution-NonCommercial 3.0 Unported License.
 * To view a copy of this license, visit http://creativecommons.org/licenses/by-nc/3.0/.
 */

Crafty.scene('load_images', function() {
    var tiles = 'resources/tiles/'
    Crafty.load([tiles + 'grass_sub.png', 
                 tiles + 'grass_surf.png',
                 tiles + 'stone.png' ]
                , function() {
                    Crafty.scene('load_sprites');
                });
    Crafty.background('#FFF');
    Crafty.e("2D, DOM, Text").attr({ w: 100, h: 20, x: 180, y: 200 })
                             .text("Loading Images")
                             .css({ 'text-align': "center" });
});

