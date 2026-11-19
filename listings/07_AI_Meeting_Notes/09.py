def 값(r, 이름):
    v = r.get(이름)
    return None if v in (None, "", "<omitted />") else v
