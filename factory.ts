abstract class Pizza {
  name: string;
  dough: string;
  sauce: string;
  toppings: Array<string> = [];

  public prepare(): void {
    console.log('Preparing ' + this.name);
    console.log('Tossing dough...');
    console.log('Adding souce...');
    console.log('Adding toppings: ');
    for(let i = 0; i < this.toppings.length; i++) {
      console.log('  ' + this.toppings[i]);
    }
  };
  public bake(): void {
    console.log('Bake for 25 minutes at 350');
  };
  public cut(): void {
    console.log('Cutting the pizza into diagonal slices');
  };
  public box(): void {
    console.log('Place pizza in official PizzaStore box');
  };
  public getName(): string {
    return this.name;
  }
}

abstract class PizzaStore {
  public orderPizza(type: string): Pizza {
    let pizza: Pizza;

    pizza = this.createPizza(type);
    pizza.prepare();
    pizza.bake();
    pizza.cut();
    pizza.box();

    return pizza;
  }

  abstract createPizza(type: string): Pizza;
}

class NYStyleStore extends PizzaStore {
  createPizza(type: string): Pizza {
    let pizza: Pizza;

    if (type === 'cheese') {
      pizza = new NYStyleCheesePizza();
    } else if (type === 'pepperoni') {
      pizza = new NYStylePepperoniPizza();
    } else if (type === 'clam') {
      pizza = new NYStyleClamPizza();
    }

    return pizza;
  }
}

class ChicagoStyleStore extends PizzaStore {
  createPizza(type: string): Pizza {
    let pizza: Pizza;

    if (type === 'cheese') {
      pizza = new ChicagoStyleCheesePizza();
    } else if (type === 'pepperoni') {
      pizza = new ChicagoStylePepperoniPizza();
    } else if (type === 'clam') {
      pizza = new ChicagoStyleClamPizza();
    }

    return pizza;
  }
}

class CheesePizza extends Pizza {
  name = 'CheesePizza';
}

class PepperoniPizza extends Pizza {
  name = 'PepperoniPizza';
}
class ClamPizza extends Pizza {
  name = 'ClamPizza';
}

class NYStyleCheesePizza extends Pizza {
  name = 'NYStyleCheesePizza';
  dough = 'Thin Crust Dough';
  sauce = 'Marinara Sauce';

  constructor() {
    super();
    this.toppings.push('Grated Reggiano Cheese');
  }
}

class NYStylePepperoniPizza extends Pizza {
  name = 'NYStylePepperoniPizza';
}
class NYStyleClamPizza extends Pizza {
  name = 'NYStyleClamPizza';
}

class ChicagoStyleCheesePizza extends Pizza {
  name = 'ChicagoStyleCheesePizza';
  dough = 'Extra Thick Crust Dough';
  sauce = 'Plum Tomato Sauce';

  constructor() {
    super();

    this.toppings.push('Sgredded Mozzarella Cheese');
  }

  cut(): void {
    console.log('Cutting the pizza into square slices');
  }
}

class ChicagoStylePepperoniPizza extends Pizza {
  name = 'ChicagoStylePepperoniPizza';
}
class ChicagoStyleClamPizza extends Pizza {
  name = 'ChicagoStyleClamPizza';
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



function main() {
  const nyStore = new NYStyleStore();
  const chicagoStore = new ChicagoStyleStore();

  let pizza: Pizza = nyStore.orderPizza('cheese');
  console.log('Ethan ordered a ' + pizza.getName());

  pizza = chicagoStore.orderPizza('cheese');
  console.log('Joel ordered a ' + pizza.getName());
}

main();