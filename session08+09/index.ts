// để kiểm tra dữ liệu thì dùng typeof
//kiểu dữ liệu cảu array:object
//làm sao phân biệt array và object
/*
    dùng typeof không giải quyết vấn đề được
    vì typeof của array và object đều là object
    ==> dùng Array.is Array()
*/
let array1:(number|string)[]=[5,'hoa',6]//union
let array2:[number,string]=[5,"lan"];//tuple
array2.push(6);

type Test = string|number|null|undefined;
let test1: Test="";
/*
    intersection : giao nhau
*/
type A={
    name:string
}
type B={
    address:string,
    id:number,
};
type C = A&B
