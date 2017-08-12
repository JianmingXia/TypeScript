// import * as _ from "lodash";
declare var _:any;

interface Person {
  firstName: string;
  lastName: string;
}

function greeter(person: Person) {
  return _.toLower("Hello, ") + person.firstName + " " + person.lastName + " !";
}

function addHtmlContent(id, content) {
  let div = document.getElementById(id);
  div.innerText += content;
}

export { greeter, addHtmlContent }