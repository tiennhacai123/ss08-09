type Obj1={
    id:number,
    name:string,
}
type Obj2 ={
    address:string,
    phone:number
}
function combine(obj1:Obj1,obj2:Obj2):Obj1&Obj2{
    return {...obj1,...obj2}    
}
let obj1:Obj1={id:1,name:'tien'};
let obj2:Obj2={address:'Ha noi',phone:12312312};
console.log(combine(obj1,obj2));
 