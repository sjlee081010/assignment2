import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useChageTitle } from "../../features/changeTitle";

export default function AddPage() {
  useChageTitle({ title: "글 작성" });

  const [content, setContent] = useState("");
  const navigate = useNavigate();

  const handleSave = async () => {
    if (!content.trim()) {
      alert("내용을 입력하세요");
      return;
    }

    try {
      const response = await fetch("http://localhost:4000/posts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: "sjlee081010@gmail.com",
          content,
        }),
      });

      if (!response.ok) {
        throw new Error("저장 실패");
      }

      alert("글이 저장되었습니다.");
      navigate("/"); // 홈으로 이동
    } catch (error) {
      alert("저장 중 오류가 발생했습니다.");
      console.error(error);
    }
  };

  return (
    <main>
      <textarea
        placeholder="글 적어"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <button onClick={handleSave}>글 추가</button>
    </main>
  );
}
