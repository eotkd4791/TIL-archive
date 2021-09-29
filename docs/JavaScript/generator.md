---
title: ES6 제너레이터 사용법
---

> Generator

- 함수의 실행을 중간에 멈췄다가 재개할 수 있는 기능

```jsx
function* gn() {
  yield 1;
  yield 2;
  yield 3;
  return 'finish';
}

const a = gn();
a.next(); // { value: 1, done: false }
a.next(); // { value: 2, done: false }
a.next(); // { value: 3, done: false }
a.next(); // { value: 'finish', done: true }
```

- next, return, throw 메소드 사용 가능

```jsx
a.return('END');
// done을 true로 즉시 바꾸고, 'END'를 value 속성에 넣어 반환
```

```jsx
a.throw(new Error('err'));
// done을 즉시 true로 바꾸고, 에러 던짐
```

> iterable (반복 가능하다는 의미)

- Generator는 iterable.
- Symbol.iterator 메소드가 존재해야 iterable임
- Symbol.iterator는 iterable을 반환해야한다. (Symbol.iterator 메소드가 반환하는 것이 iterable)

> iterator

- next 메소드를 가짐
- next 메소드는 value, done을 가진 객체 반환
- 작업 종료되면 done: true가 된다.

> 배열도 iterable

```jsx
const arr = [1, 2, 3, 4, 5];
const iter = arr[Symbol.iterator]();
console.log(iter); // Array Iterator {}
console.log(iter.next()); // {value: 1, done: false}
console.log(iter.next()); // {value: 2, done: false}
console.log(iter.next()); // {value: 3, done: false}
console.log(iter.next()); // {value: 4, done: false}
console.log(iter.next()); // {value: 5, done: false}
console.log(iter.next()); // {value: undefined, done: true}
```

> 제너레이터도 iterable

```jsx
function* fn() {
  yield 4;
  yield 5;
  yield 6;
}

const gen = fn();
console.log(gen[Symbol.iterator]() === gen); // true
```

> 문자열도 iterator

```jsx
const str = 'Hello, world!';
const strIter = str[Symbol.iterator]();
console.log(strIter); // StringIterator {}

for (const s of str) {
  console.log(s);
}
for (const s of strIter) {
  console.log(s);
}

// 두 for .. of 문 모두
// H e l l o , w o r l d ! 출력 (각 문자별 하나의 console.log가 찍힘
```

> next에 인자 넘겨주기

```jsx
function* gn() {
  const num1 = yield '첫번째 숫자 입력';
  console.log(num1);

  const num2 = yield '두번째 숫자 입력';
  console.log(num2);

  return num1 + num2;
}

const a = gn();
console.log(a.next()); // {value: "첫번째 숫자 입력", done: false}
// 2 in gn
console.log(a.next(2)); // {value: "두번째 숫자 입력", done: false}
// 4 in gn
console.log(a.next(4)); // {value: 6, done: true}
```

- 제너레이터는 값을 미리 만들어 두지 않는다.
- 필요한 순간까지 계산을 미룰 수 있다.
- 메모리 관리 측면에서 효율적이다.
- 무한루프 돌려도 브라우저가 뻗지 않음.

```jsx
function* gn() {
  let index = 0;
  while (true) {
    yield index++;
  }
}

const a = gn();
```

- 다른 제너레이터 함수 호출하기

```jsx
function* gen1() {
  yield 'W';
  yield 'o';
  yield 'r';
  yield 'l';
  yield 'd';
}

function* gen2() {
  yield 'Hello,';
  yield* gen1(); // 반복 가능한(iterable) 모든 객체가 올 수 있다.
  yield '!';
}

console.log(...gen2());
// 'Hello, W o r l d !'
```
