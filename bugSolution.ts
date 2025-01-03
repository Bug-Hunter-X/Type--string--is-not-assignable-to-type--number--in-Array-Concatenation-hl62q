function combine(arr1: number[], arr2: number[]): number[] {
  return [...arr1, ...arr2];
}

const arr1 = [1, 2, 3];
const arr2: number[] = [4, 5, 6]; // Corrected type
const combined = combine(arr1, arr2);
console.log(combined); // No error

//Alternative solution using type assertion (less safe):

const arr3 = [1,2,3];
const arr4 = [4,5,"6" as unknown as number];
const combined2 = combine(arr3, arr4); // This will compile but might lead to runtime errors if "6" is treated as a number
console.log(combined2); 