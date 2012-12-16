/*
 * Ludum_Dare_25 
 * @author Ryan Miller (rozifus) <http://www.github.com/rozifus/> 
 * @license This work is licensed under the Creative Commons Attribution-NonCommercial 3.0 Unported License.
 * To view a copy of this license, visit http://creativecommons.org/licenses/by-nc/3.0/.
 */

Crafty.c('Health', {
    init: function() {
        this._health = this._health || 30;

        this.bind('eDamage', function(amount) {
            this._health -= amount;
            if (this._health <= 0) {
                this.destroy();
            };
        });
    },

});

Crafty.c('KnightStep', {
    init: function() {
        this.requires('Action, Collision');
        this._stepFrames = 10;
        this._vx = 0; this._destX = 0; this._sourceX = 0;

        this.bind('Step', function() {
            if(!(this._action == null)) { return false; }
            this._action = 'step';

            this._sourceX = this.x;
            this._destX = this.x + Dare.TILE_SIZE / 2;
            this._vx = (Dare.TILE_SIZE / 2) / this._stepFrames;
            this._actionFrame = this._stepFrames;
        });

        this.bind('EnterFrame', function(e) {
            if (!(this._action == 'step')) { return false; };
            this.x += this._vx;
            this._actionFrame--;

            if (this._actionFrame <= 0) {
                this._action = null;
                this.x = this._destX;
            };
            this.trigger('Moved', {x: this.x, y: this.y});
        });

        this.onHit('stone', function() {
            this._action = null;
            this.x = this._sourceX;
            this.trigger('Attack');
        });

        this.onHit('villain', function() {
            this._cation = null;
            this.x = this._sourceX;
            this.trigger('Attack');
        });
    },
});

Crafty.c('Action', {
    init: function() {
        this._action = null;
        this._actionFrame = 0;
    },
});

Crafty.c('KnightAttack', {
    init: function() {
        this.requires('Action');
        this._attacking = false;
        this._attackFrames = 60;

        this.bind('Attack', function() {
            if(!this._action == null) { return false; };
            this._action = 'attack';
            this._actionFrame = this._attackFrames;
        });

        this.bind('EnterFrame', function(e) {
            if (!(this._action == 'attack')) { return false; };
            this._actionFrame--;

            if (this._actionFrame == 30) {
                Crafty.e('2D, DOM, cDamage, knight_slice')
                    .attr({ x: this.x + Dare.TILE_SIZE / 1.5 ,
                            y: this.y + Dare.TILE_SIZE / 4    });
            };

            if (this._actionFrame == 0) {
                this._action = null;
            };
        });
    },
});

Crafty.c('KnightAI', {
    init: function() {
        this.requires('KnightAttack, KnightStep, Collision');
        this._atAttackable = false;

        this.bind('EnterFrame', function(e) {
            if(this._action == null) {
                if (this._atAttackable) {
                    this.trigger('Attack');
                } else {
                    this.trigger('Step')
                };
            };
        });

        this.onHit('stone', function(colls) {

        });
    },

});
    
Crafty.c('Knight', {
    init: function() {
        this.requires('2D, DOM, Gravity, GoodTeam, knight, KnightAttack, KnightStep, KnightAI');
        this.gravity('Solid');
        this._health = 50;
    },

});
    


