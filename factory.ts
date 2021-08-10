abstract class Pizza {
  name: string;
  public prepare(): void {};
  public bake(): void {};
  public cut(): void {};
  public box(): void {};
}

class CheesePizza extends Pizza {
  name = 'CheesePizza';
  public prepare(): void {
    console.log(`${this.name} - is prepared!`);
  }
  public bake(): void {
    console.log(`${this.name} - is baked!`);
  }
  public cut(): void {
    console.log(`${this.name} - is cut!`);
  }
  public box(): void {
    console.log(`${this.name} - is boxed!`);
  }
}

class PepperoniPizza extends Pizza {
  name = 'PepperoniPizza';
  public prepare(): void {
    console.log(`${this.name} - is prepared!`);
  }
  public bake(): void {
    console.log(`${this.name} - is baked!`);
  }
  public cut(): void {
    console.log(`${this.name} - is cut!`);
  }
  public box(): void {
    console.log(`${this.name} - is boxed!`);
  }
}
class ClamPizza extends Pizza {
  name = 'ClamPizza';
  public prepare(): void {
    console.log(`${this.name} - is prepared!`);
  }
  public bake(): void {
    console.log(`${this.name} - is baked!`);
  }
  public cut(): void {
    console.log(`${this.name} - is cut!`);
  }
  public box(): void {
    console.log(`${this.name} - is boxed!`);
  }
}

class SimplePizzaFactory {
  public createPizza(type: string): Pizza {
    let pizza: Pizza;

    if (type === 'cheese') {
      pizza = new CheesePizza();
    } else if (type === 'pepperoni') {
      pizza = new PepperoniPizza();
    } else if (type === 'clam') {
      pizza = new ClamPizza();
    }

    return  pizza;
  }
}

class PizzaStore {
  factory: SimplePizzaFactory;

  constructor(factory: SimplePizzaFactory) {
    this.factory = factory;
  }

  public orderPizza(type: string) {
    let pizza: Pizza;

    pizza = this.factory.createPizza(type);
    pizza.prepare();
    pizza.bake();
    pizza.cut();
    pizza.box();

    return pizza;
  }
}

function main() {
  const factory = new SimplePizzaFactory();
  const store = new PizzaStore(factory);
  store.orderPizza('pepperoni');
  store.orderPizza('cheese');
}

main();