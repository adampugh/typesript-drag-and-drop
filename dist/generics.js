"use strict";
const names = ['max', 'manus'];
// generic functions
function merge(a, b) {
    return Object.assign(a, b);
}
const mergedObj = merge({ name: 'bib' }, { age: 30 });
console.log(mergedObj.name);
function countAndPrint(el) {
    let desc = 'no value';
    if (el.length > 0) {
        desc = `got ${el.length} element`;
    }
    return [el, desc];
}
console.log(countAndPrint('Hi rgwew'));
console.log(['sports', 'cooking']);
// contraints - keyof
function extract(obj, key) {
    return 'value ' + obj[key];
}
console.log(extract({ name: 'bob' }, 'name'));
// generic classes
class DataStorage {
    constructor() {
        this.data = [];
    }
    addItem(item) {
        this.data.push(item);
    }
    removeItem(item) {
        this.data.splice(this.data.indexOf(item), 1);
    }
    getItems() {
        return [...this.data];
    }
}
const text = new DataStorage();
text.addItem('bob');
text.addItem('guss');
console.log(text.getItems());
const namesGames = ['bob', 'buug'];
const namesGames2 = ['boof', 'boff'];
// namesGames.push('fart'); // won't work as set to read only
// namesGames2.push('dog'); // won't work as set to read only
