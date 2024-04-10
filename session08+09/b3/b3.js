"use strict";
function caculateArea(geometry) {
    if (geometry.name == 'square') {
        return geometry.sideLength ** 2;
    }
    else if (geometry.name == 'circle') {
        return geometry.radius ** 2 * Math.PI;
    }
}
let t1 = { name: "square", sideLength: 10 };
let t2 = { name: 'circle', radius: 5 };
console.log(caculateArea(t1));
console.log(caculateArea(t2));
