"use strict";
exports.__esModule = true;
exports.car = void 0;
var car = /** @class */ (function () {
    function car(carColour, engineCapacity, noOfCyllinders) {
        this.carColour = carColour;
        this.engineCapacity = engineCapacity;
        this.noOfCyllinders = noOfCyllinders;
    }
    car.prototype.startCar = function () {
        console.log("\t\tThe " + this.carColour + " coloured car is started");
    };
    car.prototype.stopCar = function () {
        console.log("\t\tThe " + this.carColour + " coloured car is stopped");
    };
    car.prototype.AccelerateCar = function () {
        console.log("\t\tThe car with Engine capacity of " + this.engineCapacity + " and with " + this.noOfCyllinders + " is accelerated");
    };
    car.prototype.openCarLock = function () {
        console.log("\n\t\tThe car having capacity Engine capacity of " + this.engineCapacity + " is unlocked");
    };
    car.prototype.closeCarLock = function () {
        console.log("\t\tThe car having capacity Engine capacity of " + this.engineCapacity + " is Locked");
    };
    return car;
}());
exports.car = car;
var best = new car("Grey", "10 HP", 4);
best.openCarLock();
best.startCar();
best.AccelerateCar();
best.stopCar();
best.closeCarLock();
