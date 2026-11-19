# 11_Notion_API

본문에 실린 순서대로 코드 블록 27개를 그대로 옮겼다.

| 파일 | 절 | 언어 | 첫 줄 |
|---|---|---|---|
| [01.txt](01.txt) | 2026년의 개발자 설정은 사이드바에 있다 | - | `Settings → Developer → Enable developer features` |
| [02.sh](02.sh) | 토큰을 코드에 박지 않는다 | bash | `# .env` |
| [03.sh](03.sh) | 첫 호출 — 버전 헤더가 필수다 | bash | `curl -s https://api.notion.com/v1/users/me \` |
| [04.sh](04.sh) | data_source_id를 얻는 법 | bash | `curl -s "https://api.notion.com/v1/databases/$NOTION_DB_업무" ` |
| [05.json](05.json) | data_source_id를 얻는 법 | json | `[` |
| [06.sh](06.sh) | data_source_id를 얻는 법 | bash | `NOTION_DS_업무=78d26464-d036-4e52-ac5e-89c1028db4d5` |
| [07.sh](07.sh) | 쿼리 한 번 | bash | `curl -s -X POST "https://api.notion.com/v1/data_sources/$NOT` |
| [08.js](08.js) | 속성 이름이 한글인 응답 읽기 | javascript | `const rows = data.results.map(p => ({` |
| [09.js](09.js) | 속성 이름이 한글인 응답 읽기 | javascript | `const 전체제목 = p.properties["이름"].title.map(t => t.plain_text)` |
| [10.sh](10.sh) | 페이지 본문 읽기 | bash | `curl -s "https://api.notion.com/v1/blocks/$PAGE_ID/children?` |
| [11.js](11.js) | 페이지 본문 읽기 | javascript | `async function readBlocks(blockId, depth = 0) {` |
| [12.js](12.js) | 페이지 만들기 | javascript | `await fetch("https://api.notion.com/v1/pages", {` |
| [13.js](13.js) | 속성 수정 | javascript | `await fetch('https://api.notion.com/v1/pages/${pageId}', {` |
| [14.js](14.js) | 블록 추가 — 2026-03-11에 바뀐 부분 | javascript | `// 구버전 — 2026-03-11 이후 거부된다` |
| [15.txt](15.txt) | 블록 추가 — 2026-03-11에 바뀐 부분 | - | `position: { after: "id" }` |
| [16.js](16.js) | 블록 추가 — 2026-03-11에 바뀐 부분 | javascript | `await fetch('https://api.notion.com/v1/blocks/${pageId}/chil` |
| [17.txt](17.txt) | 블록 추가 — 2026-03-11에 바뀐 부분 | - | `body.after should be not present, instead was '"3cfc2a78-7e4` |
| [18.js](18.js) | 페이지 삭제 — `archived`는 옛말이다 | javascript | `// 구버전 — 거부된다` |
| [19.txt](19.txt) | 페이지 삭제 — `archived`는 옛말이다 | - | `body.archived should be not present, instead was 'false'.` |
| [20.sh](20.sh) | 회의록을 API로 조회하기 `Business+` | bash | `curl -s -X POST https://api.notion.com/v1/blocks/meeting_not` |
| [21.json](21.json) | 조용히 동작하다가 갑자기 중단되는 원인 | json | `{` |
| [22.sh](22.sh) | v5 이상을 쓴다 | bash | `npm install @notionhq/client` |
| [23.js](23.js) | v5 이상을 쓴다 | javascript | `import { Client } from "@notionhq/client";` |
| [24.js](24.js) | 페이지네이션 헬퍼 | javascript | `import { collectPaginatedAPI } from "@notionhq/client";` |
| [25.js](25.js) | 구현할 브리핑 파이프라인의 구조 | javascript | `// brief.mjs` |
| [26.txt](26.txt) | 스크립트 정상 실행 결과 확인 | - | `2026-09-02 브리핑 생성 — 지연 2 · 오늘마감 1 · 검토정체 0` |
| [27.yml](27.yml) | 스케줄러를 통한 자동 실행 파이프라인 구성 | yaml | `# .github/workflows/brief.yml` |
