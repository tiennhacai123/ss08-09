"use strict";
function validatePerson(obj) {
    if (typeof (obj.name) == "string" && typeof (obj.age) == "number" && typeof (obj.address) == "object") {
        return console.log(true);
    }
    else {
        return console.log(false);
        ;
    }
}
let obj = {
    name: "Tien",
    age: 20,
    address: {
        street: "nt",
        city: "hn",
    },
};
validatePerson(obj);
