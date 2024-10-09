var Spacecraft = /** @class */ (function () {
    function Spacecraft() {
    }
    Spacecraft.prototype.flyObj = function () {
        console.log("The spacecraft is soaring through space!");
    };
    return Spacecraft;
}());
var Airplane = /** @class */ (function () {
    function Airplane() {
    }
    Airplane.prototype.flyObj = function () {
        console.log("The airplane is flying high in the sky!");
    };
    return Airplane;
}());
var Helicopter = /** @class */ (function () {
    function Helicopter() {
    }
    Helicopter.prototype.flyObj = function () {
        console.log("The helicopter is hovering above the ground!");
    };
    return Helicopter;
}());
var objects = [new Spacecraft(), new Airplane(), new Helicopter()];
(function (obj) { return obj.flyObj(); });
