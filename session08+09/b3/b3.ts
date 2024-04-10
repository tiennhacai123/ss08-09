interface Square{
    name:"square",
    sideLength:number,
}
interface Circle{
    name:'circle',
    radius:number,
}
function caculateArea(geometry:Square|Circle){
    if(geometry.name=='square'){
        return geometry.sideLength**2;
    }else if(geometry.name=='circle'){
        return geometry.radius**2*Math.PI;
    }
}
let t1:Square={name:"square",sideLength:10}
let t2:Circle={name:'circle',radius:5};
console.log(caculateArea(t1));
console.log(caculateArea(t2));

