/*
 * Ludum_Dare_25 
 * @author Ryan Miller (rozifus) <http://www.github.com/rozifus/> 
 * @license This work is licensed under the Creative Commons Attribution-NonCommercial 3.0 Unported License.
 * To view a copy of this license, visit http://creativecommons.org/licenses/by-nc/3.0/.
 */

Crafty.c('cDamage', {
    init: function() {
        this.requires('Collision');
        this._damagePerFrame = this._damagerPerFrame || 1;
        this._framesRemaining = this._framesRemaining || 10;
        this._target = this._target || 'Health';

        this.onHit(this._target, function(colls) {
            for (var i=0; i<colls.length; i++) {
                colls[i].obj.trigger('eDamage', this._damagePerFrame);
            };
        });

        this.bind('EnterFrame', function(e) {
            if (this._framesRemaining === -1) { return; };
            this._framesRemaining--;
            if (this._framesRemaining === 0) {
                this.destroy();
            };
        });
    },
});



