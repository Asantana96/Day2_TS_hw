/* Design a flexible OOP system to describe characters in a RPG game

There are 4 Unique Characters which use Different Types of Attacking mechanisms and Defending mechanisms.

- Orges - fights with club and defends with shield
- Peons - fights with club and defends with shield
- Knights - fights with a Sword and defends with Armor
- Archer - fights with Bow and Arrow and has only is tunic to protect them

- All Characters can collect gold and this will always be the same for every new type of character

At the end of this each character should be able to attack and defend and collect gold. If needed any character should be able to change his fighting style, say if a knight losing his sword, but finds a club he should be able to change his fighting mechanism to use the club

<b>Hint: </b> To complete this assignment you will need multiple classes and interfaces and an Abstract class

You can use our [Final Rubber Ducky Walkthrough](#rubber) example as a guide 
*/

//Answer

abstract class Character {
    protected gold: number;

    constructor(gold: number) {
        this.gold = gold;
    }

    abstract attack(): void;
    abstract defend(): void;

    collectGold(amount: number): void {
        this.gold += amount;
    }
}

interface ClubAttack {
    attack(): void;
}


interface ShieldDefense {
    defend(): void;
}

interface SwordAttack {
    attack(): void;
}

interface ArmorDefense {
    defend(): void;
}

interface BowAttack {
    attack(): void;
}


class Ogre extends Character implements ClubAttack, ShieldDefense {
    constructor(gold: number) {
        super(gold);
    }

    attack(): void {
        console.log('Attacking with a club!');
    }

    defend(): void {
        console.log('Defending with a shield!');
    }
}


class Peon extends Character implements ClubAttack, ShieldDefense {
    constructor(gold: number) {
        super(gold);
    }

    attack(): void {
        console.log('Attacking with a club!');
    }

    defend(): void {
        console.log('Defending with a shield!');
    }
}

class Knight extends Character implements SwordAttack, ArmorDefense {
    constructor(gold: number) {
        super(gold);
    }

    attack(): void {
        console.log('Attacking with a sword!');
    }

    defend(): void {
        console.log('Defending with armor!');
    }
}


class Archer extends Character implements BowAttack {
    constructor(gold: number) {
        super(gold);
    }

    attack(): void {
        console.log('Attacking with a bow and arrow!');
    }

    defend(): void {
        console.log('No defense mechanism!');
    }
}


const ogre = new Ogre(100);
ogre.attack();
ogre.defend();
ogre.collectGold(50);
console.log(ogre.gold);

const knight = new Knight(200);
knight.attack();
knight.defend();
knight.collectGold(25);
console.log(knight.gold);

const archer = new Archer(50);
archer.attack();
archer.collectGold(10);
console.log(archer.gold);

