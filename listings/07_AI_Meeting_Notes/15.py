def 요약인가(본문):
    return "### Overview" in 본문 and "### Action Items" in 본문

def 쓸만한가(제목, 본문):
    if not 요약인가(본문):
        return False                    # 기본 골격이 없다 — 요약 문서가 아니다
    if "Incomplete Recording" in 제목:
        return False                    # 골격은 있지만 내용이 부실하다
    return len(액션아이템(본문)) > 0
