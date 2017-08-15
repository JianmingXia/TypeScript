function identity(arg) {
    return arg;
}
var myIdentity = identity;
// function identity<T>(arg: T): T {
//   return arg;
// }
// let myIdentity: <T>(arg: T) => T = identity;
// function loggingIdentity<T>(arg: Array<T>): Array<T> {
//   console.log(arg.length);  // Array has a .length, so no more error
//   return arg;
// }
// function loggingIdentity<T>(arg: T[]): T[] {
//   console.log(arg.length);  // Array has a .length, so no more error
//   return arg;
// }
// function loggingIdentity<T>(arg: T): T {
//   console.log(arg.length);  // Error: T doesn't have .length
//   return arg;
// }
// function identity<T>(arg: T): T {
//   return arg;
// }
// let output = identity<string>("myString");
// function identity(arg: any): any {
//   return arg;
// }
// function identity(arg: number): number {
//   return arg;
// } 
