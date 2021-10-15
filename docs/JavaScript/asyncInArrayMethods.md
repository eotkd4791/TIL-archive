---
title: JavaScript 배열 메소드와 비동기 처리
---

### \# 배열 메소드에서의 비동기 처리

> 1초 간격으로 1 ~ 10까지의 숫자를 id로 하여 HTTP GET 요청을 보내서 순차적으로 하는 코드를 작성한다고 가정.

```js
const ids = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

ids.forEach(async (id) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
  const json = await res.json();
  console.log(json);
});
```

- 아이디를 1부터 10까지 순차적으로 HTTP요청을 전송하였지만, 응답으로 받은 내용은 순서가 뒤죽박죽 되어있다.
- 위의 코드에서 배열 메소드 `Array#forEach`를 사용했다.
- MDN을 확인해보면 forEach 메소드가 인자로 받는 콜백함수는 동기적으로 작동하는 것으로 예상한다는 설명이 있다.
  - 콜백함수를 호출하는 것에만 신경쓴다.
- 따라서 비동기 처리에 대한 결과에는 관심이 없다.
  - 비동기 처리에 대한 결과를 기다리지 않는다.
- 비동기 처리를 순차적으로 (실행한 순서대로) 동작하도록 하려면 `Array#forEach` 대신에 `for .. of`나 `일반적인 for문`을 사용해야한다.
  - for loop을 사용하여 비동기를 처리하면 순차처리가 쉽게 가능해서 의도한대로 코드가 동작한다는 장점이 있음
  - 하지만, `continue`, `break`나 중첩 반복문을 사용하는 경우, 하나의 loop에서 여러 동작을 하는 코드를 작성하게될 가능성이 높아짐.
  - for loop 대신 map, reduce, filter 등의 배열 메소드를 사용하면 하나의 동작만 하는 함수를 작성할 수 있기 떄문에 단일 책임 원칙을 지킬 수 있어서 좋은 코드를 작성할 확률이 높아짐
- 순서에 상관없이 병렬적으로 처리하려면 `Promise.all` 이나 `Array#map`을 사용하도록 한다.

### \# 배열 메소드를 비동기 방식으로 사용할 때의 특징, 주의할 점 및 같은 동작을 하도록 구현하기

### \# Array#reduce

```js
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const arr = Array(10)
  .fill(0)
  .map((_, index) => index + 1);
const sum = await arr.reduce(async (acc, cur) => {
  await delay(2000);
  return (await acc) + cur;
}, 0);

console.log(sum); // 2초 뒤, 55 출력
```

- 각 반복마다 `Promise`를 반환

- `acc` 는 이전 결과의 `Promise` 형식

  - `sum = Promise( Promise( Promise( Promise( ... Promise( 0 ) + 1 ...) + 5 + 6 ) + 7 ) + 8 ) + 9 ) + 10`

- `async (acc, cur) => await acc` 와 같은 형식으로 모든 비동기 함수 처리 가능

- 비동기 방식으로 동작하는 Array#reduce는 동시성(Concurrency)에 대한 아래와 같은 특징이 있음.

  - 동기 방식으로 작동할 때에는 반복 한번에 하나씩 배열 원소가 처리됨.

  - 비동기 방식으로 작동할 때에는 병렬적으로 한번에 처리를 하되, 오직 필요한 경우에만 이전 결과(await acc)를 기다림

```js
const arr = Array(10)
  .fill(0)
  .map((_, index) => index + 1);
const startTime = Date.now();

const resultByReduceAsync = await arr.reduce(async (acc, cur) => {
  await delay(1000);
  return (await acc) + cur;
}, 0);

console.log(resultByReduceAsync, `${Date.now() - startTime} ms 소요.`);
// 55 1003 ms 소요.
```

- 한번 반복할 때마다 1초의 딜레이를 걸어 두었기 때문에 10개의 요소를 순회하면 10초가 걸릴 것 같지만, 병렬적으로 처리하기 때문에 1초 남짓한 시간이 걸리면서 반환값은 정확히 출력됨.

- 그런데 이전 결과를 기다리는 방식으로 순서를 바꿔보면 아래와 같은 코드가 된다.

```js
const arr = Array(10)
  .fill(0)
  .map((_, index) => index + 1);
const startTime = Date.now();

const resultByReduceAsync = await arr.reduce(async (acc, cur) => {
  const result = (await acc) + cur; // 위의 코드와 차이
  await delay(1000);
  return result;
}, 0);

console.log(resultByReduceAsync, `${Date.now() - startTime} ms 소요.`);
// 55 10036 ms 소요.
```

- 이 경우에는 10초 남짓한 시간이 소요된다.

- 이는 이전 결과를 기다리는 방식으로 코드를 작성하는 경우에는 순차적으로 진행됨을 의미함.

- 다시 말하면, 이전 결과에 종속되지 않는 것은 즉시 계산되고, 이전 결과에 종속되는 부분만 이전 값을 기다리고 있음을 의미

### \# Array#map

- 비동기로 작동하는 map의 경우에는 두 가지 동작이 필요함.

  1. map의 콜백함수가 `async`인 경우에는 모든 아이템이 `Promise`로 맵핑됨.

```js
const delay = () => new Promise((resolve) => setTimeout(resolve, 1000));

const arr = [1, 2, 3];
const asyncRes = arr.map(async (v) => {
  await delay();
  return i + 1;
});
console.log(asyncRes); // [Promise, Promise, Promise]
```

1. 모든 Promise를 기다린 후에 배열에 결과를 모음.

```js
const arr = [1, 2, 3];
const asyncRes = await Promise.all(
  arr.map(async (v) => {
    await delay();
    return i + 1;
  })
);
console.log(asyncRes); // [2, 3, 4]
```

- 동시성 (Concurrency)

  - 방금 살펴본 구현 방식은 병렬 처리(한번에 여러개를 처리)를 하는 방식이기 때문에 어떤 경우에는 커다란 리소스를 잡아 먹을 수 있음.

    1. 일괄 처리 (Batch Processing)

       - 가장 쉬운 방법은 요소들을 그룹으로 잡아서 그룹을 하나씩 처리하는 방법.

       - 한번에 실행할 수 있는 최대 병렬 작업 수를 제어 가능.

       - 하지만, 현재 그룹에 대한 처리를 다음 그룹에 대한 작업 시작 전에 끝내야해서 각 그룹에서 가장 느린 요소가 제한 적인 요인으로 작용함.

       - 그룹을 만들기 위해서는 `underscore.js`의 `groupBy`를 사용함. `lodash`의 `groupBy` 는 인덱스를 전달하지 않는다는 특성이 있어서 그룹 나누기에 좋지 않다고 함.

       - 그룹을 순차적으로 연결하려면 `Array#reduce`를 사용하여 이전 결과를 현재 결과와 연결함.

```js
import groupBy from 'underscore/modules/groupBy.js';

const asyncMapGroupBy = async () => {
  const arr = [30, 10, 20, 20, 15, 20, 10];

  const mapInGroups = (arr, element, groupSize) => {
    const groups = groupBy(arr, (_, i) => Math.floor(i / groupSize));
    /**
     * groups = {
     *  '0': [ 30, 10, 20 ],
     *  '1': [ 20, 15, 20 ],
     *  '2': [ 10 ]
     * }
     */

    // 그룹을 순차적으로 매핑하기 위한 과정.
    // 이전 결과를 현재 결과와 연결
    return Object.values(groups).reduce(
      async (previous, currentGroup) => [
        // 이전 결과를 의미하는 previous를 await해야 다음 줄(코드)로 이동하기 전에
        // previous를 기다리는 작업이 완료되는 것을 보장할 수 있음. <위 reduce에서 설명>
        ...(await previous),
        ...(await Promise.all(currentGroup.map(element)))
      ],
      []
    );
  };

  const result = await mapInGroups(
    arr,
    async (element) => {
      console.log(`${element} started`);
      await delay();
      console.log(`${element} finished`);
      return element + 1;
    },
    3
  );

  // -- 찻번째 그룹의 일괄처리 --
  // 30 started
  // 10 started
  // 20 started
  // 10 finished
  // 20 finished
  // 30 finished
  // -- 두번째 그룹의 일괄처리 --
  // 20 started
  // 15 started
  // 20 started
  // 15 finished
  // 20 finished
  // 20 finished
  // -- 세번째 그룹의 일괄처리 --
  // 10 started
  // 10 finished

  console.log(result);
  // 31,11,21,21,16,21,11
};
```

2. 병렬 처리 (Parallel Processing)

- 일괄 처리와 다른 또 하나의 동시성 제어 방법

- 최대 `n`개의 작업을 병렬로 처리

- 진행중이던 `n`개의 작업중에서 하나가 끝나면 언제든 새로운 하나를 시작함.

- 이번 예시 코드에서는 `bluebird` 라이브러리의 `Promise.map`을 사용하여 동시성 제어

  - underscore의 groupBy와 마찬가지로 동작원리 분석해보자

```js
import Bluebird from 'bluebird';
const { Promise } = Bluebird;

const asyncMapParallel = async () => {
  const arr = [30, 10, 20, 20, 15, 20, 10];

  const result = await Promise.map(
    arr,
    async (element) => {
      console.log(`${element} started`);
      await delay();
      console.log(`${element} finished`);
      return element + 1;
    },
    { concurrency: 2 } // 동시에 처리 가능한 작업의 수: 2개로 설정
  );

  // 30 started
  // 10 started
  // 10 finished 하나가 끝나니까
  // 10 started 다른 하나가 들어옴
  // 30 finished 또 하나가 끝나니까
  // 20 started 다른하나가 들어옴
  // 10 finished
  // 15 started
  // 20 finished
  // 20 started
  // 15 finished
  // 20 started
  // 20 finished
  // 20 finished

  console.log(result);
  // 31,11,21,21,16,21,11
};
```

3. 순차 처리 (Sequential Processing)

- 순서가 중요하거나 리소스를 많이 잡아 먹는 작업 같은 경우에는 순차적으로 처리해아함.

```js
const asyncMapSequential = async () => {
  const arr = [1, 2, 3];

  const result = await arr.reduce(async (previous, current) => {
    // reduce 비동기를 사용할 때, 순차적으로 처리하려면 이전 값 previous를 await해주어야함.
    const results = await previous;
    console.log(`${current} started`);
    await delay(10);
    console.log(`${current} finished`);
    return [...results, v + 1];
  }, []);

  // 1 started 시작
  // 1 finished 진행중이던 작업 1 끝
  // 2 started 다음 작업 시작
  // 2 finished
  // 3 started
  // 3 finished

  console.log(result);
  // 2,3,4
};
```

2. **Array#forEach**

   - `Array#map`과 유사하지만, `map`은 반환값을 통해서 각 요소를 변경하는 동작을 하고 `Array#forEach`는 각 요소에 대해 실행하지만 결과는 폐기(undefined) 시킨다는 것이 차이.

   - forEach의 인자로 전달하는 콜백함수가 async인 경우의 동작에 대해 잘 파악해야함.

   - 먼저, 동기적으로 사용하는 경우 (일반적인 경우)를 살펴보면 아래와 같다.

```js
const syncForEach = () => {
  const arr = [1, 2, 3];

  arr.forEach((element) => {
    console.log(element);
  });
  console.log('Finished sync');
  // 1
  // 2
  // 3
  // Finished sync
};
```

- 콜백함수에 async를 붙이는 경우(이 경우를 편의상 비동기 forEach라고 명명)

```js
const asyncForEach = async () => {
  const arr = [1, 2, 3];

  arr.forEach(async (element) => {
    await delay(10 - element);
    console.log(element);
  });

  console.log('Finished async');
  // Finished async
  // 3
  // 2
  // 1
};
```

- forEach의 특성상 결과는 신경쓰지 않기 때문에(인자로 전달한 콜백함수의 호출만 하고 해당 콜백함수에 대한 결과는 신경쓰지 않기 때문에) 위의 코드와 같이 로그가 출력됨.

- 이유

  - 함수는 비동기적으로 호출되고, 프로그램 실행 순서는 함수 호출을 지나감. (동기적으로 동작하는 forEach와의 중요한 차이)
  - 다음 줄의 코드(console.log)가 실행될 때 동기 forEach는 이미 작업을 완료한 상황이고, 비동기 forEach는 완료되지 않은 상황이라 로그가 위와 같이 출력이 됨.

- 다음 줄의 코드로 넘어가기 전에 비동기 forEach의 작업이 끝날 떄까지 기다리려면 `Promise.all + map`을 사용하고 반환값은 버리는 방식으로 구현하는 것이 좋다.

```js
const asyncForEachToWaitForFinish = async () => {
  const arr = [1, 2, 3];
  await Promise.all(
    arr.map(async (element) => {
      await delay(10 - element);
      console.log(element);
    })
  );
  console.log('Finished async');

  // 3
  // 2
  // 1
  // Finished async
};
```

- 순차 처리 (Sequential Processing)

  - 반복되는 함수들은 병렬로 호출이 되나, 이전 결과를 기다리는 방식으로 reduce 함수를 이용하여 구현하면 순차적으로 처리가 가능함.

  - 이 방법을 사용하면 각 요소는 순차적으로 처리되고 프로그램 실행 순서는 reduce함수가 작업을 완료할 때까지 기다림.

```js
const asyncForEachForSequential = async () => {
  const arr = [1, 2, 3];
  await arr.reduce(async (previous, element) => {
    await previous;
    await delay(10 - element);
    console.log(element);
  }, undefined);

  console.log('Finished async');
  // 1
  // 2
  // 3
  // Finished async
};
```

- 정리

  1. 언제든 상관없이 함수를 호출해도 된다면 `forEach` 사용
  2. 순서에 상관없이 병렬로 처리하지만, 다음 코드(console.log)로 넘어가기 전 작업을 완료하길(기다리길) 원한다면 `Promise.all + map` 사용
  3. 순차 처리 및 다음 코드(console.log)로 넘어가기 전 작업을 완료하길(기다리길) 원한다면 `reduce` 사용

### \# Array#filter

- 단순히 `Array#filter` 로 전달하는 콜백함수에 `async` 를 붙인다면 이상한 결과가 나옴

- ```js
  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
  const arr = [1, 2, 3, 4, 5];

  const asyncFilteredArr = arr.filter(async (element) => {
    await delay(10);
    return element % 2 === 0;
  });
  console.log(asyncFilteredArr);
  // 출력: [1, 2, 3, 4, 5]
  // 예상: [2, 4]
  ```

  > filter 메소드의 인자로 전달되는 콜백함수를 조건자 함수(조건에 따른 boolean값을 반환하는 역할)라고 하겠다.
  >
  > 조건자 함수: predicate라는 함수명으로 명명함.

- `map`을 이용하여 비동기 `filter` 구현하기

  - 비동기적으로 동작하는 filter와 같은 기능을 하도록 코드를 작성하려면 두가지 단계를 거쳐야함.

    1. 조건자 함수를 통해서 얻은 `boolean`값을 `Promise` 형태로 각 배열요소에 맵핑

    2. `Promise` 형식의 요소가 담긴 배열을 동기적으로 동작하는 filter함수를 통해서 `true`인 값만 남김.

```js
const asyncFilterWithMap = async (arr, predicate) => {
  // predicate 함수의 결과를 Promise로 매핑한 결과의 배열을 result에 담고
  const results = await Promise.all(arr.map(predicate));

  // 동기적으로 동작하는 filter로 true인 값만 거름
  return arr.filter((_, index) => results[index]);
};
```

```js
// 위의 함수 단축 버젼
const asyncFilterWithMapOneLiner = async (arr, predicate) =>
  Promise.all(arr.map(predicate)).then((results) => arr.filter((_, index) => results[index]));
```

```js
const asyncResultWithMap = await asyncFilterWithMap([1, 2, 3, 4, 5], async (element) => {
  await delay(10);
  return element % 2 === 0;
});
console.log(asyncResultWithMap); // [2, 4]
```

- 동시성 (Concurrency)

- 위의 코드는모든 조건자 함수(predicate)를 동시에 실행함.
- 거대한 리소스를 사용하는 경우가 발생할 확률이 있음.
- 위에서 작성한 `Array#map` 의 내용과 같이 여러 방법으로 동시성 제어 가능

- `reduce`를 이용하여 비동기 `filter` 구현하기

  - 비동기 reduce를 사용하면 map을 이용한 구현보다 코드가 더 짧아짐

  - 그러나 동시성 제어시 선택할 수 있는 방법에 제약이 있음.

```js
const asyncFilterWithReduce = async (arr, predicate) =>
  arr.reduce(
    async (previous, element) =>
      (await predicate(element)) // #2 predicate함수를 통해서 다음 요소를 실행하고
        ? [...(await previous), element] // #3 통과하면(반환값이 true면) 배열에 추가
        : previous, // #4 통과하지 못하면 이전 상태의 배열을 반환함 (다음 요소 건너뜀)
    [] // #1 빈 배열로 시작함
  );
```

- 위의 코드는 병렬로 호출하는 것임

  - 왜냐하면 이전 값을 기다리는 동작(await previous) 보다 (await predicate(element))가 먼저니까.

- 순차적으로 동작하는 코드를 만들기 위해서는 아래와 같이 작성해야함.

```js
const asyncFilterWithReduceInSequential = async (arr, predicate) =>
  arr.reduce(
    async (previous, element) => [
      // 위의 코드와 비교하면 순서 바뀜.
      ...(await previous), // #2 이전 값을 기다림. (배열 형식이니 spread opr로 풀어줌)
      ...((await predicate(element)) ? [element] : [])
      // #3 predicate함수 결과에 따라 요소 추가 여부 결정.
    ],
    [] // #1 빈 배열로 시작
  );
```

- 이전 결과(previous)를 기다린(await)다음, 다음 predicate함수의 실행 결과(predicate(element))에 따라 요소를 조건적으로 추가시킴.

> 참고자료

[hanameee.log - 배열에 비동기 작업을 실시할 때 알아두면 좋은 이야기들](https://velog.io/@hanameee/%EB%B0%B0%EC%97%B4%EC%97%90-%EB%B9%84%EB%8F%99%EA%B8%B0-%EC%9E%91%EC%97%85%EC%9D%84-%EC%8B%A4%EC%8B%9C%ED%95%A0-%EB%95%8C-%EC%95%8C%EC%95%84%EB%91%90%EB%A9%B4-%EC%A2%8B%EC%9D%84%EB%B2%95%ED%95%9C-%EC%9D%B4%EC%95%BC%EA%B8%B0%EB%93%A4#for-%EB%AC%B8%EC%9C%BC%EB%A1%9C-%EB%B3%80%EA%B2%BD%ED%95%98%EB%8A%94-%EB%B0%A9%EB%B2%95)

[Carrot interacting - [JS] Promise.all()은 병렬일까 직렬일까🤔](https://interacting.tistory.com/162)

[Advanced web machinary - Asynchronous array functions in Javascript Series](https://advancedweb.hu/asynchronous-array-functions-in-javascript/)
