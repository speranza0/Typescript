/**
 * JS의 문제점
 *
 * dynamicall typed
 */
// num1 - number;
// num2 - number;
function add(num1, num2) {
  return num1 + num2;
}

console.log(add(1, 2));
console.log(add(1, "2"));
console.log(add("1", "2"));

// typeof runtime에 체크를 할 수 있다.
function addTypeSafe(num1, num2) {
  if (typeof num1 === "number" && typeof num2 === "number") {
    return num1 + num2;
  } else {
    throw Error("숫자만 파라미터에 입력해주세요.");
  }
}
console.log(addTypeSafe(1, 2));
console.log(addTypeSafe(1, "2"));
