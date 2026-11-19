import { Client } from "@notionhq/client";

const notion = new Client({
  auth: process.env.NOTION_TOKEN,
  notionVersion: "2026-03-11",
});

const res = await notion.dataSources.query({
  data_source_id: process.env.NOTION_DS_업무,
  filter: { property: "상태", status: { does_not_equal: "완료" } },
  sorts: [{ property: "마감", direction: "ascending" }],
});
