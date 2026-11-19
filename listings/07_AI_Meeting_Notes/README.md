# 07_AI_Meeting_Notes

본문에 실린 순서대로 코드 블록 20개를 그대로 옮겼다.

| 파일 | 절 | 언어 | 첫 줄 |
|---|---|---|---|
| [01.json](01.json) | 회의록은 독립 페이지가 아니다 | json | `{ "metadata": { "type": "block" }, "title": "…", "url": "htt` |
| [02.txt](02.txt) | 회의록은 독립 페이지가 아니다 | - | `회의록(block)` |
| [03.json](03.json) | 목록을 가져온다 | json | `{ "filter": { "operator": "and", "filters": [` |
| [04.txt](04.txt) | 목록을 가져온다 | - | `Input validation error: filter.filters.0: Invalid input` |
| [05.py](05.py) | 한 번에 50건까지만 들어온다 | python | `def 주별로(주수=8):` |
| [06.txt](06.txt) | 속성 이름을 하드코딩하면 안 된다 | - | `"제목"                     ← 콜론 없음` |
| [07.py](07.py) | 속성 이름을 하드코딩하면 안 된다 | python | `def 정규화(행):` |
| [08.txt](08.txt) | 값이 오지 않는 속성 처리하기 | - | `"출처": "<omitted />"` |
| [09.py](09.py) | 값이 오지 않는 속성 처리하기 | python | `def 값(r, 이름):` |
| [10.txt](10.txt) | 제목 문자열 정제하기 | - | `"제목": "Meeting \\- Incomplete Recording ‣"` |
| [11.py](11.py) | 제목 문자열 정제하기 | python | `import re` |
| [12.txt](12.txt) | 요약의 각 줄이 원문의 특정 발화 블록을 가리킨다 | - | `### Overview` |
| [13.txt](13.txt) | 녹음이 실패해도 요약 문서는 만들어진다 | - | `### Overview` |
| [14.txt](14.txt) | 실패의 모양은 하나가 아니다 | - | `Thanks for trying out the AI Meeting Notes feature!` |
| [15.py](15.py) | 실패를 하나씩 거르지 말고, 성공 요건을 갖추었는지 검증한다 | python | `def 요약인가(본문):` |
| [16.py](16.py) | 세 가지 규칙을 한 스크립트로 엮기 | python | `def 지난주_회의록_처리():` |
| [17.txt](17.txt) | 1. 음성 녹음 및 녹취록 보존 기간 | - | `Automatic transcript deletion   Runs daily at 오후 8:00 GMT+9 ` |
| [18.txt](18.txt) | 2. 녹음 시작 시 동의 안내 음성 강제 | - | `Enforce consent for all workspace members       [꺼짐]` |
| [19.txt](19.txt) | 3. 로컬 기기 내 오디오 임시 저장 | - | `Store audio locally    [켜짐]` |
| [20.txt](20.txt) | 4. 캘린더 일정 참석자 대상 자동 공유 | - | `Auto-share with internal calendar event participants   [꺼짐]` |
