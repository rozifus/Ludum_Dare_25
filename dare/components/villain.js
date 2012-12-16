/*
 * Ludum_Dare_25 
 * @author Ryan Miller (rozifus) <http://www.github.com/rozifus/> 
 * @license This work is licensed under the Creative Commons Attribution-NonCommercial 3.0 Unported License.
 * To view a copy of this license, visit http://creativecommons.org/licenses/by-nc/3.0/.
 */

Crafty.c('cVillain', {
    init: function() {
        this.requires('2D, DOM, Gravity, villain, Health');
        this.gravity('Solid');
        this._health = 50;

        this.bind('Remove', function() {
            console.log("Your head asplode 3:(");
        });

        this.bind('PlayerClick', function(data) {
            Crafty.e('cGreenBolt')
                .attr({x: this.x, y: this.y})
                .animate('spin', 0, 0, 1)
                .animate('spin', 15, -1)
                .aimAt(data)
        });
    },

});
    


