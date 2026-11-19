def 정규화(행):
    return {k.strip().rstrip(":").strip(): v for k, v in 행.items()}

for 행 in 결과["results"]:
    r = 정규화(행)
    print(r["제목"], r["생성 시간"])
