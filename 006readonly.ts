class PersonReadonly{
    readonly name:string;
    constructor(n:string){
        this.name =n;
    }
}

var pr = new PersonReadonly("Karthik");
console.log(pr.name);
//pr.name = "error";