var items = [1, 2, 3];
// Don't force these extra arguments
items.forEach(function (item, index, array) { return console.log(item); });
// Should be OK!
items.forEach(function (item) { return console.log(item); });
// let x = (a: number) => 0;
// let y = (b: number, s: string) => 0;
// y = x; // OK
// x = y; // Error
// interface Named {
//   name: string;
// }
// let x: Named;
// // y's inferred type is { name: string; location: string; }
// let y = { name: 'Alice', location: 'Seattle' };
// x = y;
// interface Named {
//   name: string;
// }
// class Person {
//   name: string;
// }
// let p: Named;
// // OK, because of structural typing
// p = new Person(); 
