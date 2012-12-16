/*
 * Ludum_Dare_25 
 * @author Ryan Miller (rozifus) <http://www.github.com/rozifus/> 
 * @license This work is licensed under the Creative Commons Attribution-NonCommercial 3.0 Unported License.
 * To view a copy of this license, visit http://creativecommons.org/licenses/by-nc/3.0/.
 */

Crafty.c('cGreenBolt', {
    init: function() {
        console.log(this);
        this.requires('2D, DOM, SpriteAnimation, green_bolt, cProjectile, cDamage');
        this._framesRemaining = -1;
        this._damagePerFrame = 2;
        this._target = 'GoodTeam';
        this.speed = 3;
        console.log(this);
    },

});


Crafty.c('cProjectile', {
    init: function() {
        this.requires('2D');
        this.speed = this.speed || 1;
        this._vector = this._vector || new Crafty.math.Vector2D(1,2);

        this.bind('EnterFrame', function(e) {
            this.x += this._vector.x;
            this.y += this._vector.y;
        });

        this.setSpeed = function( speed ) {
            this.speed = speed;
            this._vector.scaleToMagnitude(this.speed);
        };

        this.aimAt = function(obj) {
            var targetVector = new Crafty.math.Vector2D( obj.x, obj.y );
            var thisVector = new Crafty.math.Vector2D( this.x, this.y );
            this._vector = targetVector.subtract(thisVector);
            this._vector.scaleToMagnitude( this.speed );
            return this;
        };
    },
});


