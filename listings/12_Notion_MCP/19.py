import json

def 업무수(행):
    return len(json.loads(행["담당 업무"] or "[]"))
