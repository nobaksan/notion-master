# 03_데이터베이스

본문에 실린 순서대로 코드 블록 12개를 그대로 옮겼다.

| 파일 | 절 | 언어 | 첫 줄 |
|---|---|---|---|
| [01.txt](01.txt) | 상태 속성의 백엔드 API 제약 | http | `PATCH /v1/data_sources/{데이터소스ID}` |
| [02.txt](02.txt) | 상태 속성의 백엔드 API 제약 | http | `PATCH /v1/data_sources/{데이터소스ID}` |
| [03.txt](03.txt) | 조건부 색상과 수식 속성의 결합 | - | `if(and(prop("마감") < now(), prop("상태") != "완료"), "지연", "")` |
| [04.sql](04.sql) | 양방향과 단방향 — 처음에 잘 골라야 고생하지 않는다 | sql | `RELATION('데이터소스ID')                        -- 단방향 관계` |
| [05.sql](05.sql) | 이미 단방향으로 만들었다면 | sql | `ALTER COLUMN "검토자" SET RELATION('데이터소스ID', DUAL '검토 담당 업무')` |
| [06.json](06.json) | 이미 단방향으로 만들었다면 | json | `"검토자": { "dataSourceUrl": "collection://...", "type": "relat` |
| [07.txt](07.txt) | 조건이 붙은 롤업의 한계 | - | `ROLLUP('담당 업무', '상태', 'count')   ← 인자가 셋이고 조건 넣을 자리가 없다` |
| [08.txt](08.txt) | 조건이 붙은 롤업의 한계 | - | `length(filter(prop("담당 업무"), current.prop("상태") != "완료"))` |
| [09.json](09.json) | 조건이 붙은 롤업의 한계 | json | `"notAvailableInQuerySql": ["업무 수"]` |
| [10.txt](10.txt) | 규칙 4 — ID를 미리 적어둔다 | - | `https://www.notion.so/<workspace>/<database_id>?v=<view_id>` |
| [11.sql](11.sql) | 고유 ID 속성 활용하기 | sql | `ADD COLUMN "번호" UNIQUE_ID PREFIX 'TASK'` |
| [12.txt](12.txt) | 고유 ID 속성 활용하기 | - | `REST API   { "type": "unique_id", "unique_id": { "prefix": "` |
