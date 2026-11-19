# 부록C_마이그레이션_체크리스트

본문에 실린 순서대로 코드 블록 5개를 그대로 옮겼다.

| 파일 | 절 | 언어 | 첫 줄 |
|---|---|---|---|
| [01.sh](01.sh) | 먼저 버전을 확인한다 | bash | `grep -rn "Notion-Version" . --include="*.js" --include="*.ts` |
| [02.json](02.json) | C.2.1 데이터 소스로 전환 (2025-09-03) | json | `{` |
| [03.sh](03.sh) | C.2.2 2026-03-11 주요 파괴적 변경 3가지 | bash | `grep -rn '"after"\\|archived\\|transcription' . \` |
| [04.py](04.py) | 단방향 관계를 양방향으로 전환하는 실무 절차 (실측 검증) | python | `import os, requests` |
| [05.sql](05.sql) | 단방향 관계를 양방향으로 전환하는 실무 절차 (실측 검증) | sql | `ALTER COLUMN "검토자" SET RELATION('대상_데이터소스_ID', DUAL '검토 담당 업` |
