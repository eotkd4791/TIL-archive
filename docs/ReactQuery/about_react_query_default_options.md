---
title: ReactQuery 옵션 기본값
---

### useQuery, useInfiniteQuery을 통해 생성된 Query 인스턴스들은 캐시된 데이터를 기본적으로 `stale` 상태로 간주한다.

:::tip
이 동작을 바꾸기 위해서는 각 쿼리 혹은 전역적으로 staleTime 옵션을 사용한다.
staleTime이 더 길어진다는 것은 덜 자주 refetch한다는 의미이다.
:::

### stale 쿼리들은 아래의 경우에 뒷단에서 자동으로 refetch된다.

- 새 쿼리 인스턴스들이 마운트될때
- 새 창이 refocues될때
- 네트워크가 재연결될때
- 쿼리가 refetch interval 설정된 경우

:::tip
이 이 기능을 바꾸기 위해서는 `refetchOnMount`, `refetchOnWindowFocus`, `refetchOnReconnect`, `refetchInterval`을 이용할 수 있다.
:::

### useQuery, useInfiniteQuery의 인스턴스들 중 더 이상 활성(active) 상태인 것이 없으면 query observer가 비활성(inactive)이라고 표시해둔다.

- 그리고 나중에 재사용될 경우를 위해 캐시에 남아있는다. -기본적으로 비활성 상태의 쿼리 인스턴스들은 5분 후에 garbage collecting 된다.

:::tip
이를 바꾸기 위해서는 `gcTime` 옵션을 수정한다.
:::

### 쿼리들은 실패시 지수 백오프 delay와 함께 3번 조용히 retry한다. (이후 UI에 에러 노출)

:::note
지수 백오프(Exponential Backoff)란 네트워크 사엥서 일시적인 오류가 발생했을 때, 재시도 간격을 점진적으로 늘려가며 재시도를 수행하는 알고리즘. 네트워크의 혼잡을 피하거나 서버가 과부하 상태일 때 과도한 요청을 방지하기 위해 사용된다.
이 방법의 핵심은 "지수적으로" 대기 시간을 늘리는 것이다.

[지수 백오프 알아보기](https://1yoouoo.tistory.com/37)
:::

:::tip
이를 바꾸기 위해서는 `retry` 옵션과 `retryDelay` 옵션을 변경한다.
:::

> 참고자료
> [Tanstack Query v5 Important Defaults](https://tanstack.com/query/v5/docs/framework/react/guides/important-defaults)
