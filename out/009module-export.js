"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//export keyword is required 
var ClassFromModuleExport = /** @class */ (function () {
    function ClassFromModuleExport() {
    }
    ClassFromModuleExport.prototype.greet = function () {
        console.log("Hello World!");
    };
    return ClassFromModuleExport;
}());
exports.ClassFromModuleExport = ClassFromModuleExport;
