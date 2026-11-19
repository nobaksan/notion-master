const rows = data.results.map(p => ({
  id:   p.id,
  이름:   p.properties["이름"].title[0]?.plain_text ?? "",
  상태:   p.properties["상태"].status?.name ?? null,
  담당:   p.properties["담당"].people.map(u => u.name),
  마감:   p.properties["마감"].date?.start ?? null,
  분류:   p.properties["분류"].select?.name ?? null,
}));
