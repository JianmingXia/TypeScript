interface ClockConstructor {
  new(hour: number, minute: number);
}

class Clock implements ClockConstructor {
  currentTime: Date;
  constructor(h: number, m: number) { }
}

// interface ReadonlyStringArray {
//   readonly [index: number]: string;
// }
// let myArray: ReadonlyStringArray = ["Alice", "Bob"];
// myArray[2] = "Mallory"; // error!

// interface NumberDictionary {
//   [index: string]: number;
//   length: number;    // 可以，length是number类型
//   name: string       // 错误，`name`的类型与索引类型返回值的类型不匹配
// }

// class Animal {
//   name: string;
// }
// class Dog extends Animal {
//   breed: string;
// }

// // Error: indexing with a 'string' will sometimes get you a Dog!
// interface NotOkay {
//   [x: number]: Animal;
//   [x: string]: Dog;
// }

// interface StringArray {
//   [index: number]: string;
// }

// let myArray: StringArray;
// myArray = ["Bob", "Fred"];

// let myStr: string = myArray[0];
// console.log(myStr);

// interface SearchFunc {
//   (source: string, subString: string): boolean;
// }

// let mySearch1: SearchFunc;
// mySearch1 = function (source: string, subString: string) {
//   let result = source.search(subString);
//   return result > -1;
// }

// let mySearch2: SearchFunc;
// mySearch2 = function (src: string, sub: string): boolean {
//   let result = src.search(sub);
//   return result > -1;
// }

// let mySearch3: SearchFunc;
// mySearch3 = function (src, sub) {
//   let result = src.search(sub);
//   return result > -1;
// }

// console.log(mySearch1("ryoma", "max"));

// console.log(mySearch2("ryoma", "ma"));

// console.log(mySearch3("ryoma", "max"));

// interface SquareConfig {
//   color?: string;
//   width?: number;
// }

// function createSquare(config: SquareConfig): { color: string; area: number } {
//   // ...
//   return { color: "white", area: 100 };
// }

// let mySquare = createSquare({ colour: "red", width: 100 } as SquareConfig);

// interface SquareConfig {
//   color?: string;
//   width?: number;
// }

// function createSquare(config: SquareConfig): { color: string; area: number } {
//   let newSquare = { color: "white", area: 100 };
//   if (config.color) {
//     // Error: Property 'clor' does not exist on type 'SquareConfig'
//     newSquare.color = config.clor;
//   }
//   if (config.width) {
//     newSquare.area = config.width * config.width;
//   }
//   return newSquare;
// }

// let mySquare = createSquare({ color: "black" });


// interface SquareConfig {
//   color?: string;
//   width?: number;
// }

// function createSquare(config: SquareConfig): { color: string; area: number } {
//   let newSquare = { color: "white", area: 100 };
//   if (config.color) {
//     newSquare.color = config.color;
//   }
//   if (config.width) {
//     newSquare.area = config.width * config.width;
//   }
//   return newSquare;
// }

// let mySquare = createSquare({ color: "black" });
// console.log(mySquare);


// interface LabelledValue {
//   label: string;
// }

// function printLabel(labelledObj: LabelledValue) {
//   console.log(labelledObj.label);
// }

// let myObj = { size: 10, label: "Size 10 Object" };
// printLabel(myObj);


// function printLabel(labelledObj: { label: string }) {
//   console.log(labelledObj);
// }

// let myObj = { size: 10, label: "Size 10 Object" };
// printLabel(myObj);