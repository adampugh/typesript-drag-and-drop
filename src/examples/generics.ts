// const names: Array<string | number> = ['max', 'manus'];

// // generic functions

// function merge<T extends object, U extends object>(a: T, b: U) {
//     return Object.assign(a, b);
// }

// const mergedObj = merge({ name: 'bib' }, { age: 30 });
// console.log(mergedObj.name);

// interface Lengthy {
//     length: number;
// }

// function countAndPrint<T extends Lengthy>(el: T): [T, string] {
//     let desc = 'no value';
//     if (el.length > 0) {
//         desc = `got ${el.length} element`;
//     }
//     return [el, desc];
// }

// console.log(countAndPrint('Hi rgwew'));
// console.log(['sports', 'cooking']);

// // contraints - keyof

// function extract<T extends object, U extends keyof T>(obj: T, key: U) {
//     return 'value ' + obj[key];
// }

// console.log(extract({ name: 'bob' }, 'name'));

// // generic classes

// class DataStorage<T extends string | boolean | number> {
//     private data: T[] = [];

//     addItem(item: T) {
//         this.data.push(item);
//     }

//     removeItem(item: T) {
//         this.data.splice(this.data.indexOf(item), 1);
//     }

//     getItems() {
//         return [...this.data];
//     }
// }

// const text = new DataStorage<string>();
// text.addItem('bob');
// text.addItem('guss');
// console.log(text.getItems());

// const namesGames: readonly string[] = ['bob', 'buug'];
// const namesGames2: Readonly<string[]> = ['boof', 'boff'];
// // namesGames.push('fart'); // won't work as set to read only
// // namesGames2.push('dog'); // won't work as set to read only
