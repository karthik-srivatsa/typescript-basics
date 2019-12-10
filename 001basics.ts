var a:number;
var b:boolean;
var c:string;
b = false;

var myArr : number[];
myArr = [];
myArr = [1,2];
//myArr = ['',""];

var arr : [number,string,boolean];


function add(a : number,b : number,c : number = 10) : number{
    return a + b + c;
}

console.log(add(10,20));



var implicitTypeNum = 10;
//implicitTypeNum = true; error
implicitTypeNum =20;

//C is default so no need of t
function addImplictTyoe(a : number,b : number,c = 10) : number{
    return a + b + c;
}

// : string is optional
function greet(){
    return "string";
}
//Implict works for string tye
var greeting = greet();
// g is of type "any" because declare and definition are diff
var g;
g = greet();

// making the variable works for any assignment
var any : any;
//works
any = 10;
any = true;


var union : number | string;
//works
union = 10;
union = "works";
//doesnt
//union = false;
//union = {};