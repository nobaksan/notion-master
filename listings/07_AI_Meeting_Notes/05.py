def 주별로(주수=8):
    for n in range(주수):
        yield {"property": "created_time", "filter": {
            "operator": "date_is_within",
            "value": {"type": "relative", "value": "custom",
                      "direction": "past", "unit": "week", "count": 1}}}
