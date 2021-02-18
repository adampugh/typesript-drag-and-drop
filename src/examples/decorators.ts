// function Logger(logstring: string) {
//     return function (constructor: Function) {
//         console.log(logstring);
//         console.log(constructor);
//     };
// }

// function withTemp(template: string, hookId: string) {
//     return function (constructor: any) {
//         const hookEl = document.getElementById(hookId);
//         const p = new constructor();
//         if (hookEl) {
//             hookEl.innerHTML = template;
//             hookEl.querySelector('h1')!.textContent = p.name;
//         }
//     };
// }

// // @Logger('LOGGING - PERSON1')
// @withTemp('<h1>My person tag</h1>', 'app')
// class Person1 {
//     name = 'Max';
//     constructor() {
//         console.log('creating a person');
//     }
// }

// const pers = new Person1();

// console.log(pers);

// function Log(target: any, propertyName: string) {
//     console.log('prop dec');
//     console.log(target, propertyName);
// }

// class Product {
//     @Log
//     title: string;
//     private _price: number;

//     set price(val: number) {
//         if (val > 0) {
//             this._price = val;
//         } else {
//             throw new Error('Invalid price');
//         }
//     }

//     constructor(t: string, p: number) {
//         this.title = t;
//         this._price = p;
//     }

//     getPriceWithTax(tax: number) {
//         return this._price * (1 + tax);
//     }
// }
