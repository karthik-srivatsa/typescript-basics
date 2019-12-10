"use strict";
//Implementing the interface. 
var PersonInter = /** @class */ (function () {
    function PersonInter() {
        this.firstName = "";
        this.lastName = "";
    }
    PersonInter.prototype.getFullName = function () {
        return this.firstName + this.lastName;
    };
    return PersonInter;
}());
var p = new PersonInter();
//Implements is not necessary if same method and properties match
//it is called the Duck typing
var q = {
    firstName: "Duck",
    lastName: "Tale",
    someExtra: "Simply",
    getFullName: function () {
        return "Duck Tale";
    }
};
//works
p = q;
//works
q.someExtra;
//doesn't work
//p.someExtra;
