# 12_Notion_MCP

본문에 실린 순서대로 코드 블록 28개를 그대로 옮겼다.

| 파일 | 절 | 언어 | 첫 줄 |
|---|---|---|---|
| [01.json](01.json) | 11장의 번거로움을 떠올려 보라 | json | `{ "object": "block", "type": "paragraph",` |
| [02.txt](02.txt) | 두 개의 엔드포인트 | - | `https://www.notion.com/.well-known/mcp.json` |
| [03.sh](03.sh) | Claude Code | bash | `claude mcp add --transport http -s user notion https://mcp.n` |
| [04.sh](04.sh) | Claude Code | bash | `claude mcp login notion` |
| [05.sh](05.sh) | Claude Code | bash | `claude mcp list` |
| [06.json](06.json) | Claude Desktop | json | `{` |
| [07.json](07.json) | Cursor | json | `{` |
| [08.txt](08.txt) | `current_tool_access` 도구 접근 맵 | - | `fetch(id: "self")` |
| [09.txt](09.txt) | 실측 — 요금제별 도구 가용성 비교 | - | `All tools are available on this workspace's plan.` |
| [10.txt](10.txt) | 맵이 말하지 않는 것 — 관문은 세 층이다 | - | `403 restricted_resource` |
| [11.md](11.md) | 당신의 표를 만들라 | markdown | `\| 도구 \| 우리 워크스페이스 \| 확인일 \|` |
| [12.txt](12.txt) | MCP SQL 모드의 컬럼 규칙 — REST와 다르다 | - | `"date:마감:start"       TEXT     ISO-8601 날짜 또는 일시` |
| [13.txt](13.txt) | MCP SQL 모드의 컬럼 규칙 — REST와 다르다 | - | `"usage": "For connections.notion.querySql. Main schema name ` |
| [14.txt](14.txt) | 계산 속성은 MCP로 값을 읽을 수 없다 | - | `SELECT "이름", "업무 수" FROM "collection://..."` |
| [15.json](15.json) | 계산 속성은 MCP로 값을 읽을 수 없다 | json | `"notAvailableInQuerySql": ["업무 수", "지연"]` |
| [16.json](16.json) | 계산 속성은 MCP로 값을 읽을 수 없다 | json | `{` |
| [17.json](17.json) | 그래서 이 자리가 11장과 12장의 갈림길이다 | json | `"업무 수": { "type": "number", "number": 2, "function": "count"` |
| [18.txt](18.txt) | 우회로 — 관계를 직접 센다 | - | `"담당 업무" TEXT  -- JSON array of page URLs relating to {{colle` |
| [19.py](19.py) | 우회로 — 관계를 직접 센다 | python | `import json` |
| [20.py](20.py) | 우회로 — 관계를 직접 센다 | python | `def 미완료수(행, 업무행들):` |
| [21.py](21.py) | 우회로 — 관계를 직접 센다 | python | `from datetime import date` |
| [22.txt](22.txt) | 공식 지원 도구 목록 확인 경로 | - | `https://developers.notion.com/llms.txt` |
| [23.txt](23.txt) | 실제로 겪은 문제 | - | `{` |
| [24.txt](24.txt) | 실제로 겪은 문제 | - | `No access to this page in 개인노트` |
| [25.txt](25.txt) | 진단 순서 | - | `fetch(id: "self")` |
| [26.sh](26.sh) | 해결 — 커넥터를 두 개 둔다 | bash | `# 회사 워크스페이스` |
| [27.txt](27.txt) | 비용 분석의 통로가 여기 있다 | - | `status · credits_used · tool_call_count · tool_types · runs_` |
| [28.txt](28.txt) | MCP로 일간 브리핑 자동 생성하기 | - | `'업무' 데이터베이스에서 상태가 완료가 아닌 항목을 가져와서,` |
