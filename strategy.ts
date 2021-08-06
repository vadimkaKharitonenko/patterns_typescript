// interfaces
interface FlyBehavior {
  fly: () => void,
}

interface QuackBehavior {
  quack: () => void,
}

// concrete classess for behavior
class FlyWithWings implements FlyBehavior {
  public fly() {
    console.log('Flying...');
  }
}

class FlyNoWay implements FlyBehavior {
  public fly() {
    console.log('I can\'t fly!');
  }
}

class FlyRocketPowered implements FlyBehavior {
  public fly() {
    console.log('ROCKET FLYING!!!11');
  }
}

class Quack implements QuackBehavior {
  public quack() {
    console.log('Quack...');
  }
}

class MuteQuack implements QuackBehavior {
  public quack() {
    console.log('Mute...');
  }
}

class Squeck implements QuackBehavior {
  public quack() {
    console.log('Squeck...');
  }
}

// super class Duck
abstract class Duck {
  flyBehavior: FlyBehavior;
  quackBehavior: QuackBehavior;

  public setFlyBehavior(fb: FlyBehavior) {
    this.flyBehavior = fb;
  }

  public setQuackBehavior(qb: QuackBehavior) {
    this.quackBehavior = qb;
  }

  public abstract display(): void;

  public performFly(): void {
    this.flyBehavior.fly();
  }

  public performQuack(): void {
    this.quackBehavior.quack();
  }

  public swim(): void {
    console.log('All ducks float, even decoys!');
  }
}

// concrete clasess of Duck
class MallardDuck extends Duck {
  flyBehavior = new FlyWithWings();
  quackBehavior = new Quack();

  public display() {
    console.log('I am Mallard duck!');
  }
}

class DrakeDuck extends Duck {
  flyBehavior = new FlyNoWay();
  quackBehavior = new Squeck();

  public display() {
    console.log('I am Drake duck!');
  }
}

class ModelDuck extends Duck {
  flyBehavior = new FlyNoWay();
  quackBehavior = new Quack();

  public display() {
    console.log('I am Model duck!');
  }
}

function main () {
  const mallard: Duck = new MallardDuck();
  mallard.performQuack();
  mallard.performFly();
  mallard.display();

  const drake: Duck = new DrakeDuck();
  drake.performQuack();
  drake.performFly();
  drake.display();

  const model: Duck = new ModelDuck();
  model.performQuack();
  model.performFly();
  model.setFlyBehavior(new FlyRocketPowered());
  model.performFly();
  model.display();
}

main();







// TASK
interface WeaponBehavior {
  useWeapon: () => void;
}

class KnifeBehavior {
  useWeapon() {
    console.log('Knife strike!');
  }
}

class BowAndArrowBehavior {
  useWeapon() {
    console.log('Show with bow!');
  }
}

class AxeBehavior {
  useWeapon() {
    console.log('Axe strike!');
  }
}

class SwordBehavior {
  useWeapon() {
    console.log('Sword strike!');
  }
}

abstract class Character {
  weapon: WeaponBehavior;

  public abstract fight(): void;

  public setWeapon(w: WeaponBehavior) {
    this.weapon = w;
  }
}

class Queen extends Character {
  public fight() {
    console.log('Queen is fighting!');
    this.weapon.useWeapon();
  }
}

class King extends Character {
  public fight() {
    console.log('King is fighting!');
    this.weapon.useWeapon();
  }
}

class Troll extends Character {
  public fight() {
    console.log('Troll is fighting!');
    this.weapon.useWeapon();
  }
}

class Knight extends Character {
  public fight() {
    console.log('Knight is fighting!');
    this.weapon.useWeapon();
  }
}

function task(): void {
  const king = new King();
  king.setWeapon(new SwordBehavior());
  king.fight();
  king.setWeapon(new BowAndArrowBehavior());
  king.fight();
}

task();