---
title: @Autowired 애노테이션을 이용한 의존성 주입의 단점
---

### 배경

의존성 주입을 위해 `@Autowired`를 써왔다. `@Autowired` 애노테이션을 필드나 세터에 붙이면 스프링은 타입이 일치하는 Bean 객체를 찾아서 주입한다. 이러한 편리함 때문에 아무런 의심없이 사용해왔다.

### 문제점

먼저 @Autowired 애노테이션을 통한 의존성 주입에 대한 단점을 알아보자.

1. 필드 주입

```java
@RestController
public class MemberController {

  @Autowired
  private MemberService memberService;
}
```

2. 수정자<sub>setter</sub> 주입

```java
@RestController
public class MemberController {

  private MemberService memberService;

  public MemberController() {
  }

  @Autowired
  public void setMemberService(MemberService memberService) {
    this.memberService = memberService;
  }
}
```

### 대안

생성자 주입

> 참고자료

[YABOONG의 생성자 주입을 사용해야 하는 이유, 필드인젝션이 좋지 않은 이유](https://yaboong.github.io/spring/2019/08/29/why-field-injection-is-bad/)

[](https://devlog-wjdrbs96.tistory.com/166)
