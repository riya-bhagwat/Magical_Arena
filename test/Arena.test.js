const Player = require('../src/Player');
const Arena = require('../src/Arena');
const assert = require('assert');
const sinon = require('sinon');

describe('Arena', function () {
    it('should declare the correct winner', function () {
        const playerA = new Player('Player A', 50, 5, 10);
        const playerB = new Player('Player B', 100, 10, 5);

        const arena = new Arena(playerA, playerB);
        
        const rollDiceStub = sinon.stub(playerA, 'rollDice');
        rollDiceStub.onCall(0).returns(5); // Player A attacks first
        rollDiceStub.onCall(1).returns(3); // Player A defends
        rollDiceStub.onCall(2).returns(5); // Player A attacks
        rollDiceStub.onCall(3).returns(3); // Player A defends
        
        const rollDiceStubB = sinon.stub(playerB, 'rollDice');
        rollDiceStubB.onCall(0).returns(2); // Player B defends first
        rollDiceStubB.onCall(1).returns(4); // Player B attacks
        rollDiceStubB.onCall(2).returns(2); // Player B defends
        rollDiceStubB.onCall(3).returns(4); // Player B attacks
        
        arena.fight();

        assert.strictEqual(playerB.isAlive(), false);
        assert.strictEqual(playerA.isAlive(), true);
    });
});
