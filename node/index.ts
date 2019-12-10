import * as lod from 'lodash';

class Department{
    constructor(name:string){
        this.deptName = name;
    }
    deptName:string ;
};

var dept = new Department("Developmet");
console.log(`The department name is ${dept.deptName}`);

var arr = [1,2,3,4,5];
console.log(lod.reverse(arr));