def 회의록에서_태스크로(기간필터):
    응답 = query_meeting_notes(filter=기간필터)
    행들 = 응답["results"]
    if len(행들) >= 50:                      # 7.2절 — 1회 조회 상한 확인
        raise RuntimeError("50건 상한 도달. 조회 기간을 좁혀 재시도하십시오.")

    만든것, 보류 = [], []
    for 행 in 행들:
        r = 정규화(행)                        # 7.2절 — 속성 키 정규화
        if not 쓸만한가(r):                   # 7.4절 — 음성 전사 실패 회의록 필터링
            보류.append(r["url"])
            continue

        본문 = fetch(r["url"], include_transcript=False)
        for 할일, 근거 in 액션아이템(본문):
            if 이미있는가(근거):               # 14.2절 — 멱등성 검사
                continue
            만든것.append(태스크생성(할일, 근거, r["url"]))

    return 만든것, 보류
