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
var Beverage = /** @class */ (function () {
    function Beverage() {
        this.sizes = { TALL: 0, GRANDE: 1, VENTI: 2 };
        this.size = this.sizes.TALL;
        this.description = 'Uknown Beverage';
    }
    Beverage.prototype.getDescription = function () {
        return this.description;
    };
    Beverage.prototype.setSize = function (size) {
        this.size = size;
    };
    Beverage.prototype.getSize = function () {
        return this.size;
    };
    return Beverage;
}());
var CondimentDecorator = /** @class */ (function (_super) {
    __extends(CondimentDecorator, _super);
    function CondimentDecorator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CondimentDecorator.prototype.getSize = function () {
        return this.beverage.getSize();
    };
    return CondimentDecorator;
}(Beverage));
// concrete beverages
var Espresso = /** @class */ (function (_super) {
    __extends(Espresso, _super);
    function Espresso() {
        var _this = _super.call(this) || this;
        _this.description = "Espresso";
        return _this;
    }
    Espresso.prototype.cost = function () {
        return 1.99;
    };
    return Espresso;
}(Beverage));
var HouseBlend = /** @class */ (function (_super) {
    __extends(HouseBlend, _super);
    function HouseBlend() {
        var _this = _super.call(this) || this;
        _this.description = "House Blend Coffee";
        return _this;
    }
    HouseBlend.prototype.cost = function () {
        return .89;
    };
    return HouseBlend;
}(Beverage));
var DarkRoast = /** @class */ (function (_super) {
    __extends(DarkRoast, _super);
    function DarkRoast() {
        var _this = _super.call(this) || this;
        _this.description = "Dark Roast Coffee";
        return _this;
    }
    DarkRoast.prototype.cost = function () {
        return .99;
    };
    return DarkRoast;
}(Beverage));
var Decaf = /** @class */ (function (_super) {
    __extends(Decaf, _super);
    function Decaf() {
        var _this = _super.call(this) || this;
        _this.description = "Decaf Coffee";
        return _this;
    }
    Decaf.prototype.cost = function () {
        return 1.05;
    };
    return Decaf;
}(Beverage));
// condiments
var Mocha = /** @class */ (function (_super) {
    __extends(Mocha, _super);
    function Mocha(beverage) {
        var _this = _super.call(this) || this;
        _this.beverage = beverage;
        return _this;
    }
    Mocha.prototype.getDescription = function () {
        return this.beverage.getDescription() + ', Mocha';
    };
    Mocha.prototype.cost = function () {
        return .20 + this.beverage.cost();
    };
    return Mocha;
}(CondimentDecorator));
var Soy = /** @class */ (function (_super) {
    __extends(Soy, _super);
    function Soy(beverage) {
        var _this = _super.call(this) || this;
        _this.beverage = beverage;
        return _this;
    }
    Soy.prototype.getDescription = function () {
        return this.beverage.getDescription() + ', Soy';
    };
    Soy.prototype.cost = function () {
        var cost = this.beverage.cost();
        if (this.beverage.getSize() === this.sizes.TALL) {
            cost += .10;
        }
        else if (this.beverage.getSize() === this.sizes.GRANDE) {
            cost += .15;
        }
        else if (this.beverage.getSize() === this.sizes.VENTI) {
            cost += .20;
        }
        return cost;
    };
    return Soy;
}(CondimentDecorator));
var Whip = /** @class */ (function (_super) {
    __extends(Whip, _super);
    function Whip(beverage) {
        var _this = _super.call(this) || this;
        _this.beverage = beverage;
        return _this;
    }
    Whip.prototype.getDescription = function () {
        return this.beverage.getDescription() + ', Whip';
    };
    Whip.prototype.cost = function () {
        return .10 + this.beverage.cost();
    };
    return Whip;
}(CondimentDecorator));
function main() {
    var beverage = new Espresso();
    console.log(beverage.getDescription() + ' $: ' + beverage.cost());
    var beverage2 = new DarkRoast();
    beverage2 = new Mocha(beverage2);
    beverage2 = new Mocha(beverage2);
    beverage2 = new Whip(beverage2);
    console.log(beverage2.getDescription() + ' $: ' + beverage2.cost());
    var beverage3 = new HouseBlend();
    beverage3.setSize(0);
    beverage3 = new Soy(beverage3);
    beverage3 = new Mocha(beverage3);
    beverage3 = new Whip(beverage3);
    console.log(beverage3.getDescription() + ' $: ' + beverage3.cost());
    var beverage4 = new HouseBlend();
    beverage4.setSize(1);
    beverage4 = new Soy(beverage4);
    beverage4 = new Mocha(beverage4);
    beverage4 = new Whip(beverage4);
    console.log(beverage4.getDescription() + ' $: ' + beverage4.cost());
}
main();
