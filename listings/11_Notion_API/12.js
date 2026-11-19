await fetch("https://api.notion.com/v1/pages", {
  method: "POST",
  headers: H,
  body: JSON.stringify({
    parent: { data_source_id: process.env.NOTION_DS_업무 },
    properties: {
      "이름":   { title: [{ text: { content: "API로 만든 업무" } }] },
      "상태":   { status: { name: "대기" } },
      "분류":   { select: { name: "개발" } },
      "마감":   { date: { start: "2026-09-15" } },
      "우선순위": { select: { name: "보통" } },
    },
    children: [
      { object: "block", type: "paragraph",
        paragraph: { rich_text: [{ text: { content: "본문 첫 문단" } }] } },
    ],
  }),
});
