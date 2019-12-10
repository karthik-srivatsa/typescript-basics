"use strict";
var a;
var b;
var c;
b = false;
var myArr;
myArr = [];
myArr = [1, 2];
//myArr = ['',""];
var arr;
function add(a, b, c) {
    if (c === void 0) { c = 10; }
    return a + b + c;
}
console.log(add(10, 20));
var implicitTypeNum = 10;
//implicitTypeNum = true; error
implicitTypeNum = 20;
//C is default so no need of t
function addImplictTyoe(a, b, c) {
    if (c === void 0) { c = 10; }
    return a + b + c;
}
// : string is optional
function greet() {
    return "string";
}
//Implict works for string tye
var greeting = greet();
// g is of type "any" because declare and definition are diff
var g;
g = greet();
// making the variable works for any assignment
var any;
//works
any = 10;
any = true;
var union;
//works
union = 10;
union = "works";
//doesnt
//union = false;
//union = {};
