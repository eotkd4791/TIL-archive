---
title: try..catch..finally 사용법 및 주의할 점
---

에러 핸들링 공부를 하면서 `try..catch..finally`에 대해 알지 못했던 부분이 존재하여 공부한 내용을 정리해보았습니다.

### 1. `try..catch`는 오직 런타임 에러에만 동작합니다

`try..catch`는 실행 가능한(runnable) 코드에만 동작합니다. 실행 가능한 코드는 유효한 자바스크립트 코드를 의미합니다.
더 자세히 알아보기 위해 아래 예시 코드를 보면서 알아보겠습니다.

```javascript
try {
  {{{{{{{{{
} catch(e) {
  console.log('유효하지 않은 코드이기 때문에, 자바스크립트 엔진은  코드를 이해할 수 없습니다.');
}
```

예시 코드의 콘솔 출력 결과는 아래 이미지와 같습니다.

![스크린샷 2021-06-30 오후 11 34 25](https://user-images.githubusercontent.com/46208349/123979468-b6b0f080-d9fb-11eb-9d73-011602963385.png)

자바스크립트는 코드를 읽고 난 후에 코드를 실행하는데 코드를 읽는 중에 발생하는 에러는 엔진이 코드를 이해할 수 없기 때문에 `parse-time 에러`라고 합니다. 이러한 에러는 코드 안에서는 복구가 되지 않습니다.

`try..catch`는 유효한 코드에서만 발생하는 에러만 처리할 수 있으며, 이러한 에러를 `runtime error` 또는`exception`라고 합니다.

### 2. 📌 `catch`는 알고있는 에러만 처리하고 이외의 에러는 다시 던져야합니다

에러는 어떠한 상황에서도 발생할 수 있습니다. 따라서 발생하는 에러의 종류를 세분화하여 어떤 상황에서 에러가 발생하는지 구체적으로 알아야합니다. 하나의 상황을 가정해보겠습니다.

```javascript
try {
  // ...
  // 잘못된 참조로 인한 ReferenceError 발생

  if (isValid(signupForm)) {
    return true;
  } else {
    throw new ValidationError('회원가입 폼이 올바르지 않습니다.');
  }
} catch (error) {
  return error.message;
}
```

회원가입 양식 폼 유효성 검사에 통과하지 못하면 잘못된 데이터 형식을 표시하기 위한 `ValidationError` 인스턴스를 생성하고, 에러 메시지를 반환하여 input에 표시하는 코드가 있다고 가정해보겠습니다.

위의 코드를 보면 예상한 에러는 ValidationError지만 실제로 발생한 에러는 ReferenceError입니다. 이러한 경우에는 input에 예상하지 않은 다른 에러 메시지가 전달됩니다. 이렇게 에러 핸들링을 정확히 하지 못하면 프로그램이 개발자의 의도와 다르게 동작하거나, 발생한 에러가 숨어버리는 경우도 발생합니다. 따라서 catch에서는 발생할 확률이 있다고 예상하고 있는 ValidationError만을 처리하고, 예상하지 못한 에러는 다시 한번 throw해서 해당 함수를 호출하는 부분의 catch로 위임하여 처리하는 것이 좋습니다.

아래 코드를 보겠습니다. `catch`한 에러가 `ValidationError`의 인스턴스인지 여부를 검사하고 분기하여 에러 핸들링을 하는 코드입니다.

```javascript
function validateForm(/* ... */) {
  try {
    // ...
    // 잘못된 참조로 인한 ReferenceError 발생

    if (isValid(signupForm)) {
      return true;
    } else {
      throw new ValidationError('회원가입 폼이 올바르지 않습니다.');
    }
  } catch (error) {
    if (error instanceof ValidationError) {
      // ... Form 유효성을 만족하지 않아서 발생한 에러에 대한 처리 ...
    }
    throw error;
    /*
     * 개발자가 의도적으로 터뜨린 에러가 아니고, 예상치 못한 다른 에러가 발생한 경우이다.
     * 별도의 추가적인 에러 핸들링이 필요하다.
     */
  }
}
```

### 3. `finally`와 `return`

```javascript
function go() {
  try {
    console.log(1);
    return 2;
  } catch (e) {
    // ...
  } finally {
    console.log(3);
  }
}
console.log(go());

// 출력 결과: 1 3 2
```

`finally`문 내부의 코드는 해당 함수가 종료(return or throw)되기 전에 실행됩니다.

### 4. `try...finally`

`catch`문이 없는 `try..finally` 구문은 `try..finally` 안에서는 에러 처리를 하고 싶지 않지만, 시작한 프로세스가 마무리 되었는지 확실히 하고 싶은 경우에 사용됩니다. `finally`문은 실행 흐름이 함수를 떠나기 전에 실행되기 때문에 에러로 인해 스크립트가 멈춰도 실행됩니다.

```javascript
function func() {
  try {
    throw new Error('stop script');
  } finally {
    console.log('finally');
  }
}
func();
```

### 5. `global catch`

에러를 catch하여 추후 어떤 동작을 명시하는 용도가 아닌, 로그 출력 등의 목적으로 사용된다.

```javascript
// in browser
window.onerror = function (message, url, line, col, error) {
  // ...
};

// in node
process.on('uncaughtException');
```

> 참고자료
> [ko.javascript.info - try..catch와 에러 핸들링](https://ko.javascript.info/try-catch)
> [자바스크립트 에러 핸들링: 신뢰 할 만한 가이드](https://github.com/FEDevelopers/tech.description/wiki/%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-%EC%97%90%EB%9F%AC-%ED%95%B8%EB%93%A4%EB%A7%81-:-%EC%8B%A0%EB%A2%B0-%ED%95%A0-%EB%A7%8C%ED%95%9C-%EA%B0%80%EC%9D%B4%EB%93%9C)
