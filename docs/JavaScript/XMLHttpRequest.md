---
titie: XMLHttpRequest 란?
---

### \# XMLHttpRequest 란?

- `XMLHttpRequest`는 브라우저 내에 탑재되어 있는 http 통신을 위한 객체입니다. XML이라는 이름을 가지고 있지만 XML 이외에도 다른 형식의 데이터와도 함께 작동합니다.

- 최근에는 Promise 기반으로 작동하는 `fetch API`를 많이 사용하는 추세입니다. `XMLHttpRequest`는 오래된 브라우저를 polyfill을 추가하지 않고 지원하기 위해서 주로 사용됩니다.

### \# _작동 방식_

- `XMLHttpRequest`는 동기/비동기 2가지 방식을 지원합니다. 기본 동작은 비동기(Asynchronous) 방식으로 작동합니다. `open` 메소드의 세번째 인자를 false를 설정하면 동기(Synchronous) 방식도 지원합니다. Default는 true (Asynchronous)입니다.

### \# _응답 타입_

1. "" (default) – string
2. text – string
3. arraybuffer – ArrayBuffer - 바이너리 형식의 데이터
4. blob – blob 객체 - 바이너리 형식의 데이터
5. document – XML 문서
6. json – JSON 형식의 데이터

### \# _사용 방법_

**i) Http Request 전송하기**

```js
// #1 인스턴스 생성
const xhr = new XMLHttpRequest();

// #2 Http Request 설정
// [] 내부의 값은 필수 파라미터가 아니다.
// async 파라미터 자리에 false라고 명시하면 동기, true라면 비동기로 작동한다.  (기본값은 비동기)
// user, password는 http 인증에 계정이 필요한 경우에 기입하는 부분이다.
xhr.open(method, URL, [async, user, password]);

// #3 Http Request 전송
// POST, PUT 등의 메소드는 HTTP 요청 전송시에 Request body가 필요하다.
xhr.send([body]);
```

**ii) Response에 대한 이벤트 리스너 설정**

```js
// request 전송이 완료된 경우 또는 Response 수신이 완료된 경우(400, 500 포함)에 발생하는 이벤트에 대한 콜백함수 등록
xhr.onload = function () {
  console.log(xhr.status); // HTTP response status code e.g. 404
  console.log(xhr.statusText); //  e.g. 200 -> OK / 404 -> Not found
};

// request 전송에 대한 response를 다운로드 받을 때 주기적으로 발생하는 이벤트에 대한 콜백함수 등록
// 다운로드 진행 상황을 보고한다.
xhr.onprogress = function (event) {
  console.log(`Has been downloaded ${event.loaded} ${event.total}`);
};

// request 전송에서 문제가 발생한 경우 (네트워크 에러, 잘못된 URL 등)에 발생하는 이벤트에 대한 콜백함수 등록
xhr.onerror = function () {
  /* ... */
};
```

**iii) Response에 대한 타임아웃 설정**

```js
xhr.timeout = 100000; // 10sec
```

**iv) Response에 대한 type 설정**

```js
xhr.responseType = 'json'; // JSON 형식
```

**v) URL에 querystring 삽입**

문자열로 조합하는 것이 일반적인 경우이지만, URL 객체를 활용한 방법도 있다.

```js
let url = new URL('https://eotkd4791.github.io');
url.searchParams.set('name', 'youdaesang!'); // 인코딩된다.

xhr.open('GET', url); // https://eotkd4791.github.io?name=youdaesang%21
```

**vi) readyState**

xhr는 http 통신의 진행에 따라 상태가 변하는데 이러한 상태는 `xhr.readyState`로 접근할 수 있다.

```js
const state = xhr.readyState;

UNSENT = 0; // 초기 상태
OPENED = 1; // open 메소드 호출 완료
HEADERS_RECEIVED = 2; // 응답 헤더 수신 완료
LOADING = 3; // 응답 객체 로딩중
DONE = 4; // 통신 완료

xhr.onreadystatechange = function () {
  /* ... */
};
```

**vii) Request 취소하기**

```js
xhr.abort();
```

**viii) Request Header 설정하기**

```js
xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');
```

**ix) Cross-Origin Request**

```js
xhr.withCredentials = true;
```

### \# 주의사항

1. 메소드 이름이 `open`인 것은 연결이 열린다는 의미가 아니다. 이 메소드는 요청의 설정을 하는 역할을 한다.
2. 네트워크 활동은 `send`메소드 이후에 감지된다.

> 참고 자료

1. [JAVASCRIPT.INFO](https://javascript.info/xmlhttprequest)
2. [MDN - XMLHttpRequest](https://developer.mozilla.org/ko/docs/Web/API/XMLHttpRequest)
3. [MDN - Using XMLHttpRequest](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest)
