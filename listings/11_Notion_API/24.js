import { collectPaginatedAPI } from "@notionhq/client";

const all = await collectPaginatedAPI(notion.dataSources.query, {
  data_source_id: process.env.NOTION_DS_업무,
});
