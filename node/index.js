"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var lod = __importStar(require("lodash"));
var Department = /** @class */ (function () {
    function Department(name) {
        this.deptName = name;
    }
    return Department;
}());
;
var dept = new Department("Developmet");
console.log("The department name is " + dept.deptName);
var arr = [1, 2, 3, 4, 5];
console.log(lod.reverse(arr));
