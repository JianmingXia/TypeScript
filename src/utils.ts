import * as _ from "lodash";

interface Person {
  firstName: string;
  lastName: string;
}

function greeter(person: Person) {
  return _.toUpper("Hello, ") + person.firstName + " " + person.lastName;
  // return "Hello, " + person.firstName + " " + person.lastName;
}

export { greeter }