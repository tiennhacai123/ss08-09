"use strict";
function combine(obj1, obj2) {
    return Object.assign(Object.assign({}, obj1), obj2);
}
let obj1 = { id: 1, name: 'tien' };
let obj2 = { address: 'Ha noi', phone: 12312312 };
console.log(combine(obj1, obj2));
