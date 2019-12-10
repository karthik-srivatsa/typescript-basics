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
//Doesn't check for the incoming and outcoing types
function echoWithoutGeneric(arg) {
    return arg;
}
function echo(arg) {
    return arg;
}
var PersonGeneric = /** @class */ (function () {
    function PersonGeneric() {
        this.firstName = "";
    }
    return PersonGeneric;
}());
var EMployee = /** @class */ (function (_super) {
    __extends(EMployee, _super);
    function EMployee() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return EMployee;
}(PersonGeneric));
function echoPerson(arg) {
    return arg;
}
