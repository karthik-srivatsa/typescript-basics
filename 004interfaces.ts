interface IPersonInter{
    firstName : string;
    lastName : string;
    getFullName() : string;
}
//Implementing the interface. 
class PersonInter implements IPersonInter{
    firstName: string ="";
    lastName: string = "";
    getFullName() : string {
        return this.firstName + this.lastName;
    }
}

let p : IPersonInter = new PersonInter();

//Implements is not necessary if same method and properties match
//it is called the Duck typing
let q = {
    firstName: "Duck",
    lastName: "Tale",
    someExtra: "Simply",
    getFullName(){
        return "Duck Tale";
    }
};
//works
p = q;
//works
q.someExtra;
//doesn't work
//p.someExtra;
