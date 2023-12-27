function sum(a: number, b: number, c?: number): number {
  return a + b + (c ?? 0);
}

function calculate(a: number, b: number, operator: string): number | string {
  if (operator === "+") return a + b;
  else if (operator === "-") return a - b;
  else if (operator === "*") return a * b;
  else if (operator === "/") return a / b;
  else return "Invalid operator";
}

export { calculate, sum };
