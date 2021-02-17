"use strict";
var _a;
const e1 = {
    name: 'bob',
    priv: ['create'],
    startDate: new Date(),
};
const errorBag = {
    email: 'Not a valid email',
};
function add(a, b) {
    if (typeof a === 'string' || typeof b === 'string') {
        return a.toString() + b.toString();
    }
    return a + b;
}
const fetchedUserData = {
    id: 'u123',
    name: 'bob',
    job: { title: 'CEO', description: 'big boss' },
};
console.log((_a = fetchedUserData === null || fetchedUserData === void 0 ? void 0 : fetchedUserData.job) === null || _a === void 0 ? void 0 : _a.title);
