"use strict";
function binhPhuong(para) {
    if (typeof (para) === "number") {
        return console.log(para ** 2);
    }
    else if (Array.isArray(para)) {
        let result = para.map((item, index, arr) => {
            return item ** 2;
        });
        console.log(result);
    }
}
binhPhuong(5);
binhPhuong([1, 2, 3, 4]);
