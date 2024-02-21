"use strict";
let obj = {
    name: "Khusan",
    surname: "Butaev",
    age: 20,
    isActive: false,
    a: 5,
    b: "5",
};
const cacl = (a, b) => {
    return a + b;
};
console.log(cacl(obj.a, obj.b));
