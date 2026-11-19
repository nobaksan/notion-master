def 지난주_회의록_처리():
    응답 = query_meeting_notes(filter=지난주필터())
    행들 = 응답["results"]

    if len(행들) >= 50:                       # 7.2 — 상한선 도달 여부 확인
        raise RuntimeError("50건 상한. 기간을 더 좁혀서 다시 호출할 것")

    처리, 보류 = [], []
    for 행 in 행들:
        r = 정규화(행)                          # 7.2 — 속성 키 정규화
        제목 = 제목정리(r["제목"])

        본문 = fetch(r["url"], include_transcript=False)   # 7.3 — 녹취록은 받지 않음
        if not 쓸만한가(제목, 본문):               # 7.4 — 비정상 회의록 선별
            보류.append((제목, r["url"]))
            continue
        for 할일, 근거 in 액션아이템(본문):
            처리.append({"할 일": 할일, "근거": 근거, "회의록": r["url"]})

    return 처리, 보류
