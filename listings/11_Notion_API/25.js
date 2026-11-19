// brief.mjs
import { Client, collectPaginatedAPI } from "@notionhq/client";

const notion = new Client({
  auth: process.env.NOTION_TOKEN,
  notionVersion: "2026-03-11",
});

const 오늘 = new Date().toISOString().slice(0, 10);

const rows = await collectPaginatedAPI(notion.dataSources.query, {
  data_source_id: process.env.NOTION_DS_업무,
  filter: { property: "상태", status: { does_not_equal: "완료" } },
});

const 정리 = rows.map(p => ({
  이름: p.properties["이름"].title[0]?.plain_text ?? "(제목 없음)",
  담당: p.properties["담당"].people.map(u => u.name).join(", ") || "미지정",
  마감: p.properties["마감"].date?.start ?? null,
  상태: p.properties["상태"].status?.name ?? null,
  검토진입: p.properties["검토 진입일"]?.date?.start ?? null,
}));

const 지연   = 정리.filter(r => r.마감 && r.마감 < 오늘);
const 오늘마감 = 정리.filter(r => r.마감 === 오늘);
const 검토정체 = 정리.filter(r =>
  r.상태 === "검토" && r.검토진입 && 일수(r.검토진입) >= 3);

function 일수(d) {
  return Math.floor((Date.now() - new Date(d)) / 86400000);
}

function 절(제목, 목록, 꾸미기) {
  const 항목 = 목록.length === 0
    ? [{ text: "없음" }]
    : 목록.slice(0, 5).map(r => ({ text: 꾸미기(r) }));
  const 남은 = 목록.length > 5 ? [{ text: `외 ${목록.length - 5}건` }] : [];
  return [
    블록("heading_3", 제목),
    ...[...항목, ...남은].map(i => 블록("bulleted_list_item", i.text)),
  ];
}

function 블록(type, 내용) {
  return { object: "block", type, [type]: { rich_text: [{ text: { content: 내용 } }] } };
}

await notion.pages.create({
  parent: { page_id: process.env.NOTION_PAGE_브리핑 },
  properties: { title: [{ text: { content: `${오늘} 브리핑` } }] },
  children: [
    ...절("지연된 업무", 지연, r => `${r.이름} · ${r.담당} · ${일수(r.마감)}일 경과`),
    ...절("오늘 마감", 오늘마감, r => `${r.이름} · ${r.담당}`),
    ...절("검토 대기 3일 이상", 검토정체, r => `${r.이름} · ${r.담당} · ${일수(r.검토진입)}일`),
  ],
});

console.log(`${오늘} 브리핑 생성 — 지연 ${지연.length} · 오늘마감 ${오늘마감.length} · 검토정체 ${검토정체.length}`);
