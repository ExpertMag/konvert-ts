"use strict";
function isAdmin(user) {
    return "role" in user;
}
function isAdminTwo(user) {
    return user.role !== undefined;
}
function toZero(user) {
    if (isAdminTwo(user)) {
        user.role = 0;
        console.log("role сменился на 0");
    }
    else {
        throw new Error('ХУЙ');
    }
}
const obj1 = {
    name: "Alex",
};
const obj2 = {
    name: "Mix",
    role: 1
};
toZero(obj2),
    toZero(obj1);
