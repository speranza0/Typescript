/**
 * Casting
 *
 * TS에서 Casting을 하면 JS에서는 적용이 안된다.
 */
const codefactiory = "code factory";
const testNumber = 3;

console.log(codefactiory.toUpperCase());
// console.log(testNumber.toUpperCase());

let sampleNumber: any = 5;
// console.log(sampleNumber.toUpperCase());
let stringVar = sampleNumber as string;

console.log(typeof (sampleNumber as string));

let number = 5;

console.log((number as any).toUpperCase());
