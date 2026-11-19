def 미완료수(행, 업무행들):
    urls = set(json.loads(행["담당 업무"] or "[]"))
    return sum(1 for r in 업무행들
               if r["url"] in urls and r["상태"] != "완료")
