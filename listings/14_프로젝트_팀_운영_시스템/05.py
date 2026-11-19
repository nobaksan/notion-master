def 태스크생성(할일, 근거, 회의록url):
    return notion.pages.create(
        parent={"type": "data_source_id", "data_source_id": 업무DS},
        properties={
            "이름":        {"title": [{"text": {"content": 할일[:200]}}]},
            "상태":        {"status": {"name": "할 일"}},
            "출처 회의록":  {"url": 회의록url},
            "근거":        {"url": 근거},
        })
