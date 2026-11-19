import os, requests

HEADERS = {
    "Authorization": f"Bearer {os.environ['NOTION_TOKEN']}",
    "Notion-Version": "2026-03-11"
}

def 단방향관계_속성_목록(데이터소스_ID):
    res = requests.get(
        f"https://api.notion.com/v1/data_sources/{데이터소스_ID}",
        headers=HEADERS
    ).json()
    return [
        name for name, prop in res.get("properties", {}).items()
        if prop["type"] == "relation"
        and prop["relation"]["type"] == "single_property"
    ]
