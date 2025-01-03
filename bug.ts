function combine(arr1: number[], arr2: number[]): number[] {
  return [...arr1, ...arr2];
}

const arr1 = [1, 2, 3];
const arr2 = [4, 5, "6"];
const combined = combine(arr1, arr2);
console.log(combined); // Error: Argument of type 'string' is not assignable to parameter of type 'number'.