//Doesn't check for the incoming and outcoing types
function echoWithoutGeneric(arg:any):any{
    return arg;
}

function echo<T>(arg : T) : T {
    return arg; 
}


class PersonGeneric{
    firstName:string = "";
}

class EMployee extends PersonGeneric{

}

function echoPerson<T extends PersonGeneric>(arg : T) : T{
    return arg;
}

 