# 10_Custom_Agents

본문에 실린 순서대로 코드 블록 15개를 그대로 옮겼다.

| 파일 | 절 | 언어 | 첫 줄 |
|---|---|---|---|
| [01.txt](01.txt) | 요금제는 첫 번째 관문일 뿐이다 | - | `403 restricted_resource` |
| [02.txt](02.txt) | 도구 맵에서는 어떻게 보일까 | - | `search_agents · search_sessions · query_sessions · spawn_ses` |
| [03.txt](03.txt) | 만들자마자 바로 막히는 이유 | - | `403 agent_credit_limit_reached` |
| [04.txt](04.txt) | 10.3 지시문을 산출물 정의형으로 쓴다 | - | `사과 일곱 개` |
| [05.txt](05.txt) | 산출물 정의형 — 출력 틀을 먼저 못 박는다 | - | `- 1 \| 사과 일곱 개<br />에이전트가 씀` |
| [06.json](06.json) | `completed` 상태값만 믿어서는 안 된다 | json | `{"status": "completed"}` |
| [07.txt](07.txt) | `completed` 상태값만 믿어서는 안 된다 | - | `3 user.message: …` |
| [08.txt](08.txt) | 점진적 검증 순서 | - | `1회 수동 실행 → 출력 검증 → 조건을 바꿔 2~3회 추가 실행 → 예외 입력 테스트 → 트리거 활성화` |
| [09.txt](09.txt) | 10.6 권한 모델 — 공유는 간접 권한 상승이다 | - | `🧪 90 실험` |
| [10.txt](10.txt) | 연결하는 순간 소유자의 권한이 그대로 넘어간다 | - | `사과 일곱 개` |
| [11.txt](11.txt) | 쓰기 권한이 기본으로 열려 있다 | - | `사과 일곱 개` |
| [12.txt](12.txt) | 권한의 상한선과 런타임 검사 | - | `This agent contains resources that are not accessible by any` |
| [13.txt](13.txt) | 3. 월간 한도에 도달한다 | - | `403 agent_credit_limit_reached` |
| [14.txt](14.txt) | 4. 소유자 권한이 바뀐다 — 가장 찾기 어렵다 | - | `This agent contains resources that are not accessible by any` |
| [15.py](15.py) | 상태값을 맹신하지 않는 검증 코드 | python | `def 성공했는가(상태, 메시지, 이벤트):` |
