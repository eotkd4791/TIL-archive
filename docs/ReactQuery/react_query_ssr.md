---
title: SSR 환경에서 React Query 사용하기
---

```tsx
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";

async function getPostRecommends() {
  const res = await fetch("url", {
    next: {
      tags: ["posts", "recommends"], // 캐시를 위한 태그
    },
    // 캐시 안할때는 아래 옵션 적용.
    // cache: "no-store",
  });

  /**
   * cache revalidate by tag
   revalidateTag('recommends');

   * cache revalidate by path
   revalidatePath('/home');
   */

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Home() {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: ["posts", "recommends"],
    queryFn: getPostRecommends,
  });

  const dehydratedState = dehydrate(queryClient);

  return (
    <main>
      <HydrationBoundary state={dehydratedState}>{/* ... */}</HydrationBoundary>
    </main>
  );
}
```

SSR 시점에 prefetch한 Query를 client 환경에서 hydration 시켜준다.
