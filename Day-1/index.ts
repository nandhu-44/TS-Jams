console.clear();

import { calculate, sum } from "./function";

console.log(sum(1, 2, 5));
console.log(calculate(1, 2, "+"));

const user = { name: "A", age: 10, id: 1 };
console.log(user.name);

export { }; // preventing "Cannot redeclare block-scoped variable 'user'"
