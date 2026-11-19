def 성공했는가(상태, 메시지, 이벤트):
    if 상태 != "completed":
        return False
    if not 메시지:                      # 상태는 completed이지만 본문 데이터가 비어 있음
        return False
    return not any(e.startswith("session.error") for e in 이벤트)
