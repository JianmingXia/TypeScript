var myArray;
myArray = ["Bob", "Fred"];
var myStr = myArray[0];
console.log(myStr);
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
