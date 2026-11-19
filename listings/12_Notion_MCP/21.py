from datetime import date

def 지연인가(행):
    마감 = 행["date:마감:start"]
    return bool(마감) and 마감 < date.today().isoformat() and 행["상태"] != "완료"
