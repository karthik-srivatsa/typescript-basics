class PersonParent{

    //private firstName : string;
    //private lastName : string;
    constructor(public firstName : string, protected lastName:string, private salary = 0 ){
    }

    //Getter
    getFullName(){
        return this.firstName + this.lastName;
    };
    //Setter
    setFullName(fn:string, ln:string){
        this.firstName = fn;
        this.lastName = ln;
    }
    getSalary(){
        return this.salary;
    }
}

class PersonChild extends PersonParent{
    constructor(fn : string, ln:string){
        super(fn,ln);
    }
    getFullName(){
        //Super fails to access the properties. Works fine with methods        
        //return super.firstName + super.lastName;
        return this.firstName + this.lastName;
    }
    getSalary(){
        //Not accessible
        //return super.salary;
        return super.getSalary();
    }
}