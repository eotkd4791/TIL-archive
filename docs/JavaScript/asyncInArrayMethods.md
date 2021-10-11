---
title: JavaScript 배열 메소드와 비동기 처리
---

### \# 배열 메소드에서의 비동기 처리

> 1초 간격으로 0 ~ 100까지의 숫자 중 하나를 랜덤으로 출력하는 코드를 작성한다고 가정.

```js
const getNumberAsync = () => new Promise((resolve, reject) => setTimeout(() => resolve('Resolved !!'), 1000));

Array(10)
  .fill('pending..')
  .forEach(async (element) => {
    const result = await getNumberAsync();
    console.log(result);
  });
```

- 1초 마다 하나의 `Resolved !!` 를 기대하고 작성했던 코드이지만, 예상과 달리 한꺼번에 10개의 로그가 출력되었다.
- 위의 코드에서 배열 메소드 `Array#forEach`를 사용했다.
- MDN에는 forEach 메소드가 인자로 받는 콜백함수는 동기적으로 작동하는 것으로 예상한다.
  - 콜백함수를 호출하는 것에만 신경쓴다.
- 따라서 비동기 처리에 대한 결과에는 관심이 없다.
  - 비동기 처리에 대한 결과를 기다리지 않는다.
- 비동기 처리를 순차적으로 (실행한 순서대로) 동작하도록 하려면 `Array#forEach` 대신에 `for .. of`나 `일반적인 for문`을 사용해야한다.

- 순서에 상관없이 병렬적으로 처리하려면 `Promise.all` 이나 `Array#map`을 사용하도록 한다.

> 참고자료

[hanameee.log - 배열에 비동기 작업을 실시할 때 알아두면 좋은 이야기들](https://velog.io/@hanameee/%EB%B0%B0%EC%97%B4%EC%97%90-%EB%B9%84%EB%8F%99%EA%B8%B0-%EC%9E%91%EC%97%85%EC%9D%84-%EC%8B%A4%EC%8B%9C%ED%95%A0-%EB%95%8C-%EC%95%8C%EC%95%84%EB%91%90%EB%A9%B4-%EC%A2%8B%EC%9D%84%EB%B2%95%ED%95%9C-%EC%9D%B4%EC%95%BC%EA%B8%B0%EB%93%A4#for-%EB%AC%B8%EC%9C%BC%EB%A1%9C-%EB%B3%80%EA%B2%BD%ED%95%98%EB%8A%94-%EB%B0%A9%EB%B2%95)

[Carrot interacting - [JS] Promise.all()은 병렬일까 직렬일까🤔](https://interacting.tistory.com/162)
