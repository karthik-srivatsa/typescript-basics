"use strict";
var Person = /** @class */ (function () {
    //Can't overload. Overload is not supported in TS
    function Person() {
        console.log("Second");
        this.firstName = "";
        this.lastName = "";
    }
    //Function declaration
    Person.prototype.getFullName = function () {
        return this.firstName + this.lastName;
    };
    ;
    return Person;
}());
console.log("First");
//Creating object implicitly typed to Person
var aPerson = new Person();
aPerson.firstName = "Type";
aPerson.lastName = "Script";
console.log(aPerson);
console.log(aPerson.getFullName());
