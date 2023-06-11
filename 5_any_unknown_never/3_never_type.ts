/**
 * Never Type
 */
// (1) 함수에서 에러를 던질때
function thorwError(): never {
  throw Error();
}

// (2) 무한 루프
function infiniteLoop(): never {
  while (true) {}
}

// (3) 존재 할 수 없는 인터섹션
type StringAndNumber = string & number;

// let neverType: never = 10;
// let neverType: never = undefined;
// let neverType: never = null;
