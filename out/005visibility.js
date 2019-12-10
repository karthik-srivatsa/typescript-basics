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
var PersonParent = /** @class */ (function () {
    //private firstName : string;
    //private lastName : string;
    function PersonParent(firstName, lastName, salary) {
        if (salary === void 0) { salary = 0; }
        this.firstName = firstName;
        this.lastName = lastName;
        this.salary = salary;
    }
    //Getter
    PersonParent.prototype.getFullName = function () {
        return this.firstName + this.lastName;
    };
    ;
    //Setter
    PersonParent.prototype.setFullName = function (fn, ln) {
        this.firstName = fn;
        this.lastName = ln;
    };
    PersonParent.prototype.getSalary = function () {
        return this.salary;
    };
    return PersonParent;
}());
var PersonChild = /** @class */ (function (_super) {
    __extends(PersonChild, _super);
    function PersonChild(fn, ln) {
        return _super.call(this, fn, ln) || this;
    }
    PersonChild.prototype.getFullName = function () {
        //Super fails to access the properties. Works fine with methods        
        //return super.firstName + super.lastName;
        return this.firstName + this.lastName;
    };
    PersonChild.prototype.getSalary = function () {
        //Not accessible
        //return super.salary;
        return _super.prototype.getSalary.call(this);
    };
    return PersonChild;
}(PersonParent));
