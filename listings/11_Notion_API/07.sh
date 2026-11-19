curl -s -X POST "https://api.notion.com/v1/data_sources/$NOTION_DS_업무/query" \
  -H "Authorization: Bearer $NOTION_TOKEN" \
  -H "Notion-Version: 2026-03-11" \
  -H "Content-Type: application/json" \
  -d '{
    "filter": {
      "property": "상태",
      "status": { "does_not_equal": "완료" }
    },
    "sorts": [ { "property": "마감", "direction": "ascending" } ],
    "page_size": 50
  }'
