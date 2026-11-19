# 노션 마스터 — 에이전트가 일하는 워크스페이스 만들기

『노션 마스터』(김동우 지음, 케이리아파트너스, 2026)의 예제 코드 저장소다.

Notion API·MCP·Workers·외부 자동화 예제는 `listings/`에 장별로 있다. 토큰은 코드에 넣지 말고 환경 변수(`NOTION_TOKEN` 등)로 넘긴다.

## 구성

- `listings/` — 본문에 실린 코드 블록을 장별로 그대로 옮긴 것(장 폴더의 README에 번호·절·언어를 정리)

| 장 | 코드 블록 |
|---|---|
| [01_2026년의_노션](listings/01_2026년의_노션/) | 1 |
| [02_워크스페이스_만들기](listings/02_워크스페이스_만들기/) | 4 |
| [03_데이터베이스](listings/03_데이터베이스/) | 12 |
| [04_에이전트가_일할_구조](listings/04_에이전트가_일할_구조/) | 5 |
| [05_Notion_AI의_현재](listings/05_Notion_AI의_현재/) | 3 |
| [06_Enterprise_Search](listings/06_Enterprise_Search/) | 2 |
| [07_AI_Meeting_Notes](listings/07_AI_Meeting_Notes/) | 20 |
| [08_내장_Automations](listings/08_내장_Automations/) | 5 |
| [09_AI_Autofill](listings/09_AI_Autofill/) | 6 |
| [10_Custom_Agents](listings/10_Custom_Agents/) | 15 |
| [11_Notion_API](listings/11_Notion_API/) | 27 |
| [12_Notion_MCP](listings/12_Notion_MCP/) | 28 |
| [13_외부_자동화와_Workers](listings/13_외부_자동화와_Workers/) | 14 |
| [14_프로젝트_팀_운영_시스템](listings/14_프로젝트_팀_운영_시스템/) | 8 |
| [15_운영_비용_거버넌스](listings/15_운영_비용_거버넌스/) | 2 |
| [부록A_요금제_대조표](listings/부록A_요금제_대조표/) | 6 |
| [부록C_마이그레이션_체크리스트](listings/부록C_마이그레이션_체크리스트/) | 5 |

## 주의

- API 키·토큰·비밀번호는 저장소에 넣지 않았다. 본문 안내대로 환경 변수나 `.env`로 넘긴다. Docker 구성의 비밀번호는 로컬 실습용 예시 값이다.
- 모델 이름·요금·제품 화면은 책의 확인 일자 이후 바뀔 수 있다.
- 이 책과 저장소는 본문에 나오는 제품·서비스의 회사와 관련이 없는 비공식 자료다.

## 라이선스

코드는 MIT 라이선스를 따른다(`LICENSE`). 책 본문과 그림은 포함하지 않으며 저작권은 지은이에게 있다.
