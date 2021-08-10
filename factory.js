var CheesePizza = /** @class */ (function () {
    function CheesePizza() {
        this.name = 'CheesePizza';
    }
    CheesePizza.prototype.prepare = function () {
        console.log(this.name + " - is prepared!");
    };
    CheesePizza.prototype.bake = function () {
        console.log(this.name + " - is baked!");
    };
    CheesePizza.prototype.cut = function () {
        console.log(this.name + " - is cut!");
    };
    CheesePizza.prototype.box = function () {
        console.log(this.name + " - is boxed!");
    };
    return CheesePizza;
}());
var PepperoniPizza = /** @class */ (function () {
    function PepperoniPizza() {
        this.name = 'PepperoniPizza';
    }
    PepperoniPizza.prototype.prepare = function () {
        console.log(this.name + " - is prepared!");
    };
    PepperoniPizza.prototype.bake = function () {
        console.log(this.name + " - is baked!");
    };
    PepperoniPizza.prototype.cut = function () {
        console.log(this.name + " - is cut!");
    };
    PepperoniPizza.prototype.box = function () {
        console.log(this.name + " - is boxed!");
    };
    return PepperoniPizza;
}());
var ClamPizza = /** @class */ (function () {
    function ClamPizza() {
        this.name = 'ClamPizza';
    }
    ClamPizza.prototype.prepare = function () {
        console.log(this.name + " - is prepared!");
    };
    ClamPizza.prototype.bake = function () {
        console.log(this.name + " - is baked!");
    };
    ClamPizza.prototype.cut = function () {
        console.log(this.name + " - is cut!");
    };
    ClamPizza.prototype.box = function () {
        console.log(this.name + " - is boxed!");
    };
    return ClamPizza;
}());
var SimplePizzaFactory = /** @class */ (function () {
    function SimplePizzaFactory() {
    }
    SimplePizzaFactory.prototype.createPizza = function (type) {
        var pizza;
        if (type === 'cheese') {
            pizza = new CheesePizza();
        }
        else if (type === 'pepperoni') {
            pizza = new PepperoniPizza();
        }
        else if (type === 'clam') {
            pizza = new ClamPizza();
        }
        return pizza;
    };
    return SimplePizzaFactory;
}());
var PizzaStore = /** @class */ (function () {
    function PizzaStore(factory) {
        this.factory = factory;
    }
    PizzaStore.prototype.orderPizza = function (type) {
        var pizza;
        pizza = this.factory.createPizza(type);
        pizza.prepare();
        pizza.bake();
        pizza.cut();
        pizza.box();
        return pizza;
    };
    return PizzaStore;
}());
function main() {
    var factory = new SimplePizzaFactory();
    var store = new PizzaStore(factory);
    store.orderPizza('pepperoni');
    store.orderPizza('cheese');
}
main();
