def 이미있는가(근거url):
    r = notion.dataSources.query(
        data_source_id=업무DS,
        filter={"property": "근거", "url": {"equals": 근거url}})
    return len(r["results"]) > 0
