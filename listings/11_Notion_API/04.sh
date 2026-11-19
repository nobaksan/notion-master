curl -s "https://api.notion.com/v1/databases/$NOTION_DB_업무" \
  -H "Authorization: Bearer $NOTION_TOKEN" \
  -H "Notion-Version: 2026-03-11" | jq '.data_sources'
