---
title: 생성자 주입시 발생하는 문제점과 빌더 패턴
---

- 생성자 주입시 문제점

1. 생성자의 한계

아래 코드를 보자.

```java
public class MemberResponseDto {
  private final String email;
  private final String userId;
  private final String name;
  private final int age;
  private final boolean isPreminum;

  public MemberResponseDto(
    String email,
    String userId,
    String name,
    String age,
    boolean isPreminum
  ) {
    this.email = email;
    this.userId = userId;
    this.name = name;
    this.age = age;
    this.isPreminum = isPreminum;
  }
}

public class MemberService {
  public MemberResponseDto findMemberByEmail(String email) {
    MemberDto member = memberDao.getMemberByEmail(email);

    return new MemberResponseDto(
      member.getEmail(),
      member.getUserId(),
      member.getName(),
      member.getAge(),
      member.getIsPremium()
    );
  }
}
```

`MemberResponseDto`클래스의 생성자 함수의 인자가 더 많아지면 어떤 자리에 어떤 값이 할당되는지 알기가 어렵다. 이러한 문제점은 `빌더 패턴`을 통해서 해결을 할 수 있다.

```java
public class MemberResponseDto {
  private final String email;
  private final String userId;
  private final String name;
  private final int age;
  private final boolean isPreminum;

  public static class Bulider {
    private String email;
    private String userId;
    private String name;
    private int age;
    private boolean isPreminum;

    public Builder email(String email) {
      this.email = email;
      return this;
    }

    public Builder userId(String userId) {
      this.userId = userId;
      return this;
    }

    public Builder name(String name) {
      this.name = name;
      return this;
    }

    public Builder age(int age) {
      this.age = age;
      return this;
    }

    public Builder isPremium(boolean isPremium) {
      this.isPremium = isPremium;
      return this;
    }

    public MemberResponstDto builder() {
      return new MemberResponseDto(this);
    }
  }

  private MemberResponseDto(Builder builder) {
    email = builder.email;
    userId = builder.userId;
    name = builder.name;
    age = builder.age;
    isPreminum = builder.isPreminum;
  }
}

public class MemberService {
  public MemberResponseDto findMemberByEmail(String email) {
    MemberDto member = memberDao.getMemberByEmail(email);

    return new MemberResponseDto.Builder()
      .email(member.getEmail())
      .userId(member.getUserId())
      .name(member.getName())
      .age(member.getAge())
      .isPremium(member.getIsPremium())
      .builder();
  }
}
```

위의 코드처럼 빌더 패턴을 이용하면 생성자의 어느 자리에 어떤 값이 들어가는지 쉽게 알 수 있다.
하지만, 직접 구현하여 사용하는 경우에는 코드가 매우 길어진다.

이러한 불편함을 아래와 같이 Lombok의 @Builder 애노테이션으로 해결할 수 있다.

```java
@Builder
public class MemberResponseDto {
  private final String email;
  private final String userId;
  private final String name;
  private final int age;
  private final boolean isPreminum;
}
```
