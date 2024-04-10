"use strict";
function print(index) {
    if (typeof (index) == 'string') {
        console.log(index);
    }
    else if (Array.isArray(index)) {
        for (const key of index) {
            console.log(key);
        }
    }
}
print("hello my friend")
print(["helo", "my", "friend"]);
