import re

def 제목정리(s):
    s = re.sub(r"<mention-date[^>]*/>", "", s)
    s = re.sub(r"@\w+ \d+, \d{4}", "", s)
    s = s.replace("\\", "").replace("‣", "")
    return s.strip()
