class Person{

    //Can't overload. Overload is not supported in TS
    constructor(){
        console.log("Second");
        this.firstName = "";
        this.lastName = "";
    }
    //if type is not given then it will be of type any
    firstName : string;
    lastName: string;
    //Function declaration
    getFullName(){
        return this.firstName + this.lastName;
    };
}
console.log("First");
//Creating object implicitly typed to Person
var aPerson = new Person();
aPerson.firstName = "Type";
aPerson.lastName = "Script";
console.log(aPerson);
console.log(aPerson.getFullName());