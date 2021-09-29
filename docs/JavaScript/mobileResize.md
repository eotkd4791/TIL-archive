---
title: 모바일 가로/세로모드 인식
---

### 가로 모드/ 세로 모드 인식하기

```
세로 모드: Portrait 모드
가로 모드: Landscape 모드
```

\# 1 CSS를 이용한 방법

```css
@media (orientation: portrait) {
  /* 세로 모드인 경우 적용할 CSS */
}

@media (orientation: landscape) {
  /* 가로 모드인 경우 적용할 CSS */
}
```

\# 2 JS를 이용한 방법

**i) window.matchMedia 활용**

```js
if (window.matchMedia('(orientation: portrait)').matches) {
  // 세로 모드일 때 실행할 스크립트
  // width와 height가 같으면 portrait 모드로 인식한다.
} else {
  // 가로 모드일 때 실행할 스크립트
}
```

**ii) 너비와 높이를 비교**

```js
if (window.innerWidth <= window.innerHeight) {
  // 세로 모드일 때 실행할 스크립트
} else {
  // 가로 모드일 때 실행할 스크립트
}
```

화면 크기가 바뀌는 경우에 resize Event가 발생한다.

```js
window.addEventListener('resize', function () {
  // 이벤트 리스너 콜백 함수 내부에서 가로/세로 모드 확인 후, 경우에 따른 로직 구현
});
```

> 참고 자료

[1분코딩 - 웹페이지 가로 모드/세로 모드 인식하기](https://studiomeal.com/archives/1068)
