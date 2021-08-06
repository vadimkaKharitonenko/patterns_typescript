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
// concrete classess for behavior
var FlyWithWings = /** @class */ (function () {
    function FlyWithWings() {
    }
    FlyWithWings.prototype.fly = function () {
        console.log('Flying...');
    };
    return FlyWithWings;
}());
var FlyNoWay = /** @class */ (function () {
    function FlyNoWay() {
    }
    FlyNoWay.prototype.fly = function () {
        console.log('I can\'t fly!');
    };
    return FlyNoWay;
}());
var FlyRocketPowered = /** @class */ (function () {
    function FlyRocketPowered() {
    }
    FlyRocketPowered.prototype.fly = function () {
        console.log('ROCKET FLYING!!!11');
    };
    return FlyRocketPowered;
}());
var Quack = /** @class */ (function () {
    function Quack() {
    }
    Quack.prototype.quack = function () {
        console.log('Quack...');
    };
    return Quack;
}());
var MuteQuack = /** @class */ (function () {
    function MuteQuack() {
    }
    MuteQuack.prototype.quack = function () {
        console.log('Mute...');
    };
    return MuteQuack;
}());
var Squeck = /** @class */ (function () {
    function Squeck() {
    }
    Squeck.prototype.quack = function () {
        console.log('Squeck...');
    };
    return Squeck;
}());
// super class Duck
var Duck = /** @class */ (function () {
    function Duck() {
    }
    Duck.prototype.setFlyBehavior = function (fb) {
        this.flyBehavior = fb;
    };
    Duck.prototype.setQuackBehavior = function (qb) {
        this.quackBehavior = qb;
    };
    Duck.prototype.performFly = function () {
        this.flyBehavior.fly();
    };
    Duck.prototype.performQuack = function () {
        this.quackBehavior.quack();
    };
    Duck.prototype.swim = function () {
        console.log('All ducks float, even decoys!');
    };
    return Duck;
}());
// concrete clasess of Duck
var MallardDuck = /** @class */ (function (_super) {
    __extends(MallardDuck, _super);
    function MallardDuck() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.flyBehavior = new FlyWithWings();
        _this.quackBehavior = new Quack();
        return _this;
    }
    MallardDuck.prototype.display = function () {
        console.log('I am Mallard duck!');
    };
    return MallardDuck;
}(Duck));
var DrakeDuck = /** @class */ (function (_super) {
    __extends(DrakeDuck, _super);
    function DrakeDuck() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.flyBehavior = new FlyNoWay();
        _this.quackBehavior = new Squeck();
        return _this;
    }
    DrakeDuck.prototype.display = function () {
        console.log('I am Drake duck!');
    };
    return DrakeDuck;
}(Duck));
var ModelDuck = /** @class */ (function (_super) {
    __extends(ModelDuck, _super);
    function ModelDuck() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.flyBehavior = new FlyNoWay();
        _this.quackBehavior = new Quack();
        return _this;
    }
    ModelDuck.prototype.display = function () {
        console.log('I am Model duck!');
    };
    return ModelDuck;
}(Duck));
function main() {
    var mallard = new MallardDuck();
    mallard.performQuack();
    mallard.performFly();
    mallard.display();
    var drake = new DrakeDuck();
    drake.performQuack();
    drake.performFly();
    drake.display();
    var model = new ModelDuck();
    model.performQuack();
    model.performFly();
    model.setFlyBehavior(new FlyRocketPowered());
    model.performFly();
    model.display();
}
main();
var KnifeBehavior = /** @class */ (function () {
    function KnifeBehavior() {
    }
    KnifeBehavior.prototype.useWeapon = function () {
        console.log('Knife strike!');
    };
    return KnifeBehavior;
}());
var BowAndArrowBehavior = /** @class */ (function () {
    function BowAndArrowBehavior() {
    }
    BowAndArrowBehavior.prototype.useWeapon = function () {
        console.log('Show with bow!');
    };
    return BowAndArrowBehavior;
}());
var AxeBehavior = /** @class */ (function () {
    function AxeBehavior() {
    }
    AxeBehavior.prototype.useWeapon = function () {
        console.log('Axe strike!');
    };
    return AxeBehavior;
}());
var SwordBehavior = /** @class */ (function () {
    function SwordBehavior() {
    }
    SwordBehavior.prototype.useWeapon = function () {
        console.log('Sword strike!');
    };
    return SwordBehavior;
}());
var Character = /** @class */ (function () {
    function Character() {
    }
    Character.prototype.setWeapon = function (w) {
        this.weapon = w;
    };
    return Character;
}());
var Queen = /** @class */ (function (_super) {
    __extends(Queen, _super);
    function Queen() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Queen.prototype.fight = function () {
        console.log('Queen is fighting!');
        this.weapon.useWeapon();
    };
    return Queen;
}(Character));
var King = /** @class */ (function (_super) {
    __extends(King, _super);
    function King() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    King.prototype.fight = function () {
        console.log('King is fighting!');
        this.weapon.useWeapon();
    };
    return King;
}(Character));
var Troll = /** @class */ (function (_super) {
    __extends(Troll, _super);
    function Troll() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Troll.prototype.fight = function () {
        console.log('Troll is fighting!');
        this.weapon.useWeapon();
    };
    return Troll;
}(Character));
var Knight = /** @class */ (function (_super) {
    __extends(Knight, _super);
    function Knight() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Knight.prototype.fight = function () {
        console.log('Knight is fighting!');
        this.weapon.useWeapon();
    };
    return Knight;
}(Character));
function task() {
    var king = new King();
    king.setWeapon(new SwordBehavior());
    king.fight();
    king.setWeapon(new BowAndArrowBehavior());
    king.fight();
}
task();
