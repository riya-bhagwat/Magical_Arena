class Arena {
    constructor(player1, player2) {
        this.player1 = player1;
        this.player2 = player2;
    }

    fight() {
        let attacker = this.player1.health <= this.player2.health ? this.player1 : this.player2;
        let defender = attacker === this.player1 ? this.player2 : this.player1;

        while (this.player1.isAlive() && this.player2.isAlive()) {
            this.turn(attacker, defender);

            [attacker, defender] = [defender, attacker]; // Switch roles
        }

        const winner = this.player1.isAlive() ? this.player1.name : this.player2.name;
        console.log(`The winner is ${winner}!`);
    }

    turn(attacker, defender) {
        const attackRoll = attacker.rollDice();
        const defenseRoll = defender.rollDice();

        const attackDamage = attacker.calculateDamage(attackRoll);
        const defenseStrength = defender.calculateDefense(defenseRoll);

        const damage = Math.max(0, attackDamage - defenseStrength);

        defender.takeDamage(damage);

        console.log(`${attacker.name} attacks ${defender.name} for ${attackDamage} (Defended: ${defenseStrength}, Damage: ${damage}). ${defender.name} health: ${defender.health}`);
    }
}

module.exports = Arena;
