class Player {
    constructor(name, health, strength, attack) {
        this.name = name;
        this.health = health;
        this.strength = strength;
        this.attack = attack;
    }

    isAlive() {
        return this.health > 0;
    }

    rollDice() {
        return Math.floor(Math.random() * 6) + 1;
    }

    calculateDamage(roll) {
        return this.attack * roll;
    }

    calculateDefense(roll) {
        return this.strength * roll;
    }

    takeDamage(damage) {
        this.health = Math.max(0, this.health - damage);
    }
}

module.exports = Player;
