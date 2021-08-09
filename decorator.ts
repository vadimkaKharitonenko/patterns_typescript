abstract class Beverage {
  sizes: {[index: string]: number} = {TALL: 0, GRANDE: 1, VENTI: 2};
  size: number = this.sizes.TALL;
  description: string = 'Uknown Beverage';

  public getDescription(): string {
    return this.description;
  }

  public abstract cost(): number;

  public setSize(size: number): void {
    this.size = size;
  }

  public getSize(): number {
    return this.size;
  }
}

abstract class CondimentDecorator extends Beverage {
  public beverage: Beverage;
  public abstract getDescription(): string;

  public getSize(): number {
    return this.beverage.getSize();
  }
}

// concrete beverages

class Espresso extends Beverage {
  constructor() {
    super();
    this.description = "Espresso";
  }

  public cost(): number {
    return 1.99;
  }
}

class HouseBlend extends Beverage {
  constructor() {
    super();
    this.description = "House Blend Coffee";
  }

  public cost(): number {
    return .89;
  }
}

class DarkRoast extends Beverage {
  constructor() {
    super();
    this.description = "Dark Roast Coffee";
  }

  public cost(): number {
    return .99;
  }
}

class Decaf extends Beverage {
  constructor() {
    super();
    this.description = "Decaf Coffee";
  }

  public cost(): number {
    return 1.05;
  }
}

// condiments

class Mocha extends CondimentDecorator {
  beverage: Beverage;

  constructor(beverage: Beverage) {
    super();
    this.beverage = beverage;
  }

  public getDescription(): string {
    return this.beverage.getDescription() + ', Mocha';
  }

  public cost(): number {
    return .20 + this.beverage.cost();
  }
}

class Soy extends CondimentDecorator {
  beverage: Beverage;

  constructor(beverage: Beverage) {
    super();
    this.beverage = beverage;
  }

  public getDescription(): string {
    return this.beverage.getDescription() + ', Soy';
  }

  public cost(): number {
    let cost = this.beverage.cost();
    
    if (this.beverage.getSize() === this.sizes.TALL) {
      cost += .10;
    } else if (this.beverage.getSize() === this.sizes.GRANDE) {
      cost += .15;
    } else if (this.beverage.getSize() === this.sizes.VENTI) {
      cost += .20;
    }

    return cost;
  }
}

class Whip extends CondimentDecorator {
  beverage: Beverage;

  constructor(beverage: Beverage) {
    super();
    this.beverage = beverage;
  }

  public getDescription(): string {
    return this.beverage.getDescription() + ', Whip';
  }

  public cost(): number {
    return .10 + this.beverage.cost();
  }
}

function main() {
  let beverage: Beverage = new Espresso();
  console.log(beverage.getDescription() + ' $: ' + beverage.cost());

  let beverage2: Beverage = new DarkRoast();
  beverage2 = new Mocha(beverage2);
  beverage2 = new Mocha(beverage2);
  beverage2 = new Whip(beverage2);
  console.log(beverage2.getDescription() + ' $: ' + beverage2.cost());

  let beverage3: Beverage = new HouseBlend();
  beverage3.setSize(0);
  beverage3 = new Soy(beverage3);
  beverage3 = new Mocha(beverage3);
  beverage3 = new Whip(beverage3);
  console.log(beverage3.getDescription() + ' $: ' + beverage3.cost());

  let beverage4: Beverage = new HouseBlend();
  beverage4.setSize(1);
  beverage4 = new Soy(beverage4);
  beverage4 = new Mocha(beverage4);
  beverage4 = new Whip(beverage4);
  console.log(beverage4.getDescription() + ' $: ' + beverage4.cost());
}

main();