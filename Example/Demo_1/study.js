function buildName(firstName, lastName) {
    if (firstName === void 0) { firstName = "Will"; }
    // return firstName + " " + lastName;
    return 1;
}
var result1 = buildName("Bob"); // error, too few parameters
var result2 = buildName("Bob", "Adams", "Sr."); // error, too many parameters
var result3 = buildName("Bob", "Adams"); // okay and returns "Bob Adams"
var result4 = buildName(undefined, "Adams"); // okay and returns "Will Adams"
// function buildName(firstName: string, lastName = "Smith") {
//   return firstName + " " + lastName;
// }
// let result1 = buildName("Bob");                  // works correctly now, returns "Bob Smith"
// let result2 = buildName("Bob", undefined);       // still works, also returns "Bob Smith"
// let result3 = buildName("Bob", "Adams", "Sr.");  // error, too many parameters
// let result4 = buildName("Bob", "Adams");         // ah, just right
// function buildName(firstName: string, lastName?: string) {
//   if (lastName)
//     return firstName + " " + lastName;
//   else
//     return firstName;
// }
// let result1 = buildName("Bob");  // works correctly now
// let result2 = buildName("Bob", "Adams", "Sr.");  // error, too many parameters
// let result3 = buildName("Bob", "Adams");  // ah, just right
// let myAdd: (baseValue: number, increment: number) => number =
//   function (x: number, y: number): number { return x + y; }; 
