RELATION('데이터소스ID')                        -- 단방향 관계
RELATION('데이터소스ID', DUAL)                  -- 양방향 관계 (기본 이름 자동 부여)
RELATION('데이터소스ID', DUAL '동기화 속성 이름')  -- 양방향 관계 + 반대편 속성명 직접 지정
