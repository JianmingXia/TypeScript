// for (let i = 0; i < 10; i++) {
//   setTimeout(function () { console.log(i); }, 100 * i);
// }

// function foo() {
//   // okay to capture 'a'
//   return a;
// }

// // 不能在'a'被声明前调用'foo'
// // 运行时应该抛出错误
// console.log(foo());

// let a;

// for (var i = 0; i < 10; i++) {
//   (function(i) {
//     setTimeout(function () { console.log(i); }, 100);
//   })(i);
// }

// function f(shouldInitialize: boolean) {
//   if (shouldInitialize) {
//     var x = 10;
//   }

//   return x;
// }

// console.log(f(true));  // returns '10'
// console.log(f(false)); // returns 'undefined'

// let someValue: any = "this is a string";

// let strLength: number = (someValue as string).length;

// let someValue: any = "this is a string";

// let strLength: number = (<string>someValue).length;

// let notSure: any = 4;
// notSure.ifItExists(); // okay, ifItExists might exist at runtime
// notSure.toFixed(); // okay, toFixed exists (but the compiler doesn't check)

// let prettySure: Object = 4;
// prettySure.toFixed(); // Error: Property 'toFixed' doesn't exist on type 'Object'.

// let notSure: any = 4;
// notSure = "maybe a string instead";
// notSure = false; // okay, definitely a boolean


// enum Color { Red, Green, Blue }
// debugger;
// let c: Color = Color.Green;
// console.log(c);

// let colorName: string = Color[2];
// alert(colorName);


// // Declare a tuple type
// let x: [string, number];
// // Initialize it
// x = ['hello', 10]; // OK
// // Initialize it incorrectly
// // x = [10, 'hello']; // Error
// console.log(x[0].substr(1)); // OK
// // console.log(x[1].substr(1)); // Error, 'number' does not have 'substr'
// x[3] = 'world'; // OK, 字符串可以赋值给(string | number)类型
// console.log(x[5].toString()); // OK, 'string' 和 'number' 都有 toString
// // x[6] = true; // Error, 布尔不是(string | number)类型

// let list1: number[] = [1, 2, 3];
// list1.push(4);

// let list2: Array<number> = [1, 2, 3];

// let name2: string = "Gene";
// let sentence: string = `Hello, my name is ${name2 }.`;


// let str: string = "ryoma";

// let six: number = 666;

// let isDone: boolean = false;