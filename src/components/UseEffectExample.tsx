"use client";
import { useEffect, useState } from "react";

export default function UseEffectExample() {
  const [post, setPost] = useState<{ title: string; body: string } | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch("https://jsonplaceholder.typicode.com/posts/1")
      .then((res) => res.json())
      .then((json) => setPost({ title: json.title, body: json.body }))
      .catch(() => setPost({ title: "에러", body: "데이터를 불러오지 못했습니다." }))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div>
      <h3>실제 API에서 데이터 불러오기 예제</h3>
      {loading && <div>불러오는 중...</div>}
      {post && (
        <div style={{ marginTop: 8 }}>
          <strong>{post.title}</strong>
          <p>{post.body}</p>
        </div>
      )}
    </div>
  );
} 