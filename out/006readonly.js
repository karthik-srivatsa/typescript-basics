"use strict";
var PersonReadonly = /** @class */ (function () {
    function PersonReadonly(n) {
        this.name = n;
    }
    return PersonReadonly;
}());
var pr = new PersonReadonly("Karthik");
console.log(pr.name);
//pr.name = "error";
