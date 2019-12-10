class PersonInheritence{
    firstName : string = "";
    lastName : string = "";
    greet(){
        console.log("Hey There!");
    }
}

class HR extends PersonInheritence{

}

class Programmer extends PersonInheritence{
    greet(){
        console.log("Hello WOrld!");
    };
    //Use the base class method
    greetLikeNormal(){
        super.greet();
    }

}

var hr = new HR();
var me = new Programmer();
hr.greet();
me.greet();
me.greetLikeNormal();

var manager : PersonInheritence = new Programmer();
//Works and still points to Programmer. bec that is the instance
manager.greet();
//Doesn't work because Typed to PersonInheritence.
//manager.greetLikeNormal();