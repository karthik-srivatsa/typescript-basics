"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var PersonInheritence = /** @class */ (function () {
    function PersonInheritence() {
        this.firstName = "";
        this.lastName = "";
    }
    PersonInheritence.prototype.greet = function () {
        console.log("Hey There!");
    };
    return PersonInheritence;
}());
var HR = /** @class */ (function (_super) {
    __extends(HR, _super);
    function HR() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return HR;
}(PersonInheritence));
var Programmer = /** @class */ (function (_super) {
    __extends(Programmer, _super);
    function Programmer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Programmer.prototype.greet = function () {
        console.log("Hello WOrld!");
    };
    ;
    //Use the base class method
    Programmer.prototype.greetLikeNormal = function () {
        _super.prototype.greet.call(this);
    };
    return Programmer;
}(PersonInheritence));
var hr = new HR();
var me = new Programmer();
hr.greet();
me.greet();
me.greetLikeNormal();
var manager = new Programmer();
//Works and still points to Programmer. bec that is the instance
manager.greet();
//Doesn't work because Typed to PersonInheritence.
//manager.greetLikeNormal();
