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
// another example
var Notifier = /** @class */ (function () {
    function Notifier() {
    }
    Notifier.prototype.send = function (message) {
        console.log('Email: ' + message);
    };
    return Notifier;
}());
var BaseDecorator = /** @class */ (function (_super) {
    __extends(BaseDecorator, _super);
    function BaseDecorator(n) {
        var _this = _super.call(this) || this;
        _this.wrappee = n;
        return _this;
    }
    BaseDecorator.prototype.send = function (message) {
        this.wrappee.send(message);
    };
    return BaseDecorator;
}(Notifier));
var SMSDecorator = /** @class */ (function (_super) {
    __extends(SMSDecorator, _super);
    function SMSDecorator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SMSDecorator.prototype.send = function (message) {
        _super.prototype.send.call(this, message);
        this.sendSMS(message);
    };
    SMSDecorator.prototype.sendSMS = function (message) {
        console.log('SMS: ' + message);
    };
    return SMSDecorator;
}(BaseDecorator));
var FacebookDecorator = /** @class */ (function (_super) {
    __extends(FacebookDecorator, _super);
    function FacebookDecorator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FacebookDecorator.prototype.send = function (message) {
        _super.prototype.send.call(this, message);
        this.sendToFB(message);
    };
    FacebookDecorator.prototype.sendToFB = function (message) {
        console.log('Facebook: ' + message);
    };
    return FacebookDecorator;
}(BaseDecorator));
var SlackDecorator = /** @class */ (function (_super) {
    __extends(SlackDecorator, _super);
    function SlackDecorator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SlackDecorator.prototype.send = function (message) {
        _super.prototype.send.call(this, message);
        this.sendToSlack(message);
    };
    SlackDecorator.prototype.sendToSlack = function (message) {
        console.log('Slack: ' + message);
    };
    return SlackDecorator;
}(BaseDecorator));
var App = /** @class */ (function () {
    function App() {
    }
    App.prototype.setNotifier = function (n) {
        this.notifier = n;
    };
    App.prototype.send = function (message) {
        var n = this.notifier;
        if (this.fb)
            n = new FacebookDecorator(n);
        if (this.sms)
            n = new SMSDecorator(n);
        if (this.slack)
            n = new SlackDecorator(n);
        n.send(message);
    };
    App.prototype.setFB = function (b) {
        this.fb = b;
    };
    App.prototype.setSlack = function (b) {
        this.slack = b;
    };
    App.prototype.setSMS = function (b) {
        this.sms = b;
    };
    return App;
}());
function main2() {
    var n = new Notifier();
    var app = new App();
    app.setNotifier(n);
    app.send('Hello!');
    console.log('--------------');
    app.setFB(true);
    app.send('Hello!');
    console.log('--------------');
    app.setSlack(true);
    app.send('Hello!');
    console.log('--------------');
    app.setSMS(true);
    app.send('Hello!');
    console.log('--------------');
}
main2();
