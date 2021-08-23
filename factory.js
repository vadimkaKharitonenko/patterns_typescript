var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Pizza = /** @class */ (function () {
    function Pizza() {
        this.toppings = [];
    }
    Pizza.prototype.prepare = function () {
        console.log('Preparing ' + this.name);
        console.log('Tossing dough...');
        console.log('Adding souce...');
        console.log('Adding toppings: ');
        for (var i = 0; i < this.toppings.length; i++) {
            console.log('  ' + this.toppings[i]);
        }
    };
    ;
    Pizza.prototype.bake = function () {
        console.log('Bake for 25 minutes at 350');
    };
    ;
    Pizza.prototype.cut = function () {
        console.log('Cutting the pizza into diagonal slices');
    };
    ;
    Pizza.prototype.box = function () {
        console.log('Place pizza in official PizzaStore box');
    };
    ;
    Pizza.prototype.getName = function () {
        return this.name;
    };
    return Pizza;
}());
var PizzaStore = /** @class */ (function () {
    function PizzaStore() {
    }
    PizzaStore.prototype.orderPizza = function (type) {
        var pizza;
        pizza = this.createPizza(type);
        pizza.prepare();
        pizza.bake();
        pizza.cut();
        pizza.box();
        return pizza;
    };
    return PizzaStore;
}());
var NYStyleStore = /** @class */ (function (_super) {
    __extends(NYStyleStore, _super);
    function NYStyleStore() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NYStyleStore.prototype.createPizza = function (type) {
        var pizza;
        if (type === 'cheese') {
            pizza = new NYStyleCheesePizza();
        }
        else if (type === 'pepperoni') {
            pizza = new NYStylePepperoniPizza();
        }
        else if (type === 'clam') {
            pizza = new NYStyleClamPizza();
        }
        return pizza;
    };
    return NYStyleStore;
}(PizzaStore));
var ChicagoStyleStore = /** @class */ (function (_super) {
    __extends(ChicagoStyleStore, _super);
    function ChicagoStyleStore() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ChicagoStyleStore.prototype.createPizza = function (type) {
        var pizza;
        if (type === 'cheese') {
            pizza = new ChicagoStyleCheesePizza();
        }
        else if (type === 'pepperoni') {
            pizza = new ChicagoStylePepperoniPizza();
        }
        else if (type === 'clam') {
            pizza = new ChicagoStyleClamPizza();
        }
        return pizza;
    };
    return ChicagoStyleStore;
}(PizzaStore));
var CheesePizza = /** @class */ (function (_super) {
    __extends(CheesePizza, _super);
    function CheesePizza() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = 'CheesePizza';
        return _this;
    }
    return CheesePizza;
}(Pizza));
var PepperoniPizza = /** @class */ (function (_super) {
    __extends(PepperoniPizza, _super);
    function PepperoniPizza() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = 'PepperoniPizza';
        return _this;
    }
    return PepperoniPizza;
}(Pizza));
var ClamPizza = /** @class */ (function (_super) {
    __extends(ClamPizza, _super);
    function ClamPizza() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = 'ClamPizza';
        return _this;
    }
    return ClamPizza;
}(Pizza));
var NYStyleCheesePizza = /** @class */ (function (_super) {
    __extends(NYStyleCheesePizza, _super);
    function NYStyleCheesePizza() {
        var _this = _super.call(this) || this;
        _this.name = 'NYStyleCheesePizza';
        _this.dough = 'Thin Crust Dough';
        _this.sauce = 'Marinara Sauce';
        _this.toppings.push('Grated Reggiano Cheese');
        return _this;
    }
    return NYStyleCheesePizza;
}(Pizza));
var NYStylePepperoniPizza = /** @class */ (function (_super) {
    __extends(NYStylePepperoniPizza, _super);
    function NYStylePepperoniPizza() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = 'NYStylePepperoniPizza';
        return _this;
    }
    return NYStylePepperoniPizza;
}(Pizza));
var NYStyleClamPizza = /** @class */ (function (_super) {
    __extends(NYStyleClamPizza, _super);
    function NYStyleClamPizza() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = 'NYStyleClamPizza';
        return _this;
    }
    return NYStyleClamPizza;
}(Pizza));
var ChicagoStyleCheesePizza = /** @class */ (function (_super) {
    __extends(ChicagoStyleCheesePizza, _super);
    function ChicagoStyleCheesePizza() {
        var _this = _super.call(this) || this;
        _this.name = 'ChicagoStyleCheesePizza';
        _this.dough = 'Extra Thick Crust Dough';
        _this.sauce = 'Plum Tomato Sauce';
        _this.toppings.push('Sgredded Mozzarella Cheese');
        return _this;
    }
    ChicagoStyleCheesePizza.prototype.cut = function () {
        console.log('Cutting the pizza into square slices');
    };
    return ChicagoStyleCheesePizza;
}(Pizza));
var ChicagoStylePepperoniPizza = /** @class */ (function (_super) {
    __extends(ChicagoStylePepperoniPizza, _super);
    function ChicagoStylePepperoniPizza() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = 'ChicagoStylePepperoniPizza';
        return _this;
    }
    return ChicagoStylePepperoniPizza;
}(Pizza));
var ChicagoStyleClamPizza = /** @class */ (function (_super) {
    __extends(ChicagoStyleClamPizza, _super);
    function ChicagoStyleClamPizza() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = 'ChicagoStyleClamPizza';
        return _this;
    }
    return ChicagoStyleClamPizza;
}(Pizza));
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
function main() {
    var nyStore = new NYStyleStore();
    var chicagoStore = new ChicagoStyleStore();
    var pizza = nyStore.orderPizza('cheese');
    console.log('Ethan ordered a ' + pizza.getName());
    pizza = chicagoStore.orderPizza('cheese');
    console.log('Joel ordered a ' + pizza.getName());
}
main();
