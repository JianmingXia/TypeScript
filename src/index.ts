import { greeter } from './utils';
import Student from './Student';

debugger;

var user = new Student("TypeScript", "User");
document.body.innerHTML = greeter(user);

