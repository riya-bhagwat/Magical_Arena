const Player = require('../src/Player');
const assert = require('assert');

describe('Player', function () {
    it('should correctly initialize player attributes', function () {
        const player = new Player('Test', 50, 5, 10);
        assert.strictEqual(player.health, 50);
        assert.strictEqual(player.strength, 5);
        assert.strictEqual(player.attack, 10);
    });

    it('should return true if player is alive', function () {
        const player = new Player('Test', 50, 5, 10);
        assert.strictEqual(player.isAlive(), true);
    });

    it('should return false if player is dead', function () {
        const player = new Player('Test', 0, 5, 10);
        assert.strictEqual(player.isAlive(), false);
    });

    it('should correctly roll a dice', function () {
        const player = new Player('Test', 50, 5, 10);
        const roll = player.rollDice();
        assert.strictEqual(roll >= 1 && roll <= 6, true);
    });

    it('should correctly calculate damage', function () {
        const player = new Player('Test', 50, 5, 10);
        const damage = player.calculateDamage(5);
        assert.strictEqual(damage, 50);
    });

    it('should correctly calculate defense', function () {
        const player = new Player('Test', 50, 5, 10);
        const defense = player.calculateDefense(2);
        assert.strictEqual(defense, 10);
    });

    it('should correctly take damage', function () {
        const player = new Player('Test', 50, 5, 10);
        player.takeDamage(20);
        assert.strictEqual(player.health, 30);
    });
});
