// import * as _ from "lodash";
declare var _:any;

interface Person {
  firstName: string;
  lastName: string;
}

function greeter(person: Person) {
  return _.toUpper("Helloxxx, ") + person.firstName + " " + person.lastName + " !";
  // return "Hello, " + person.firstName + " " + person.lastName;
}

export { greeter }