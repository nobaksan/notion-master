async function readBlocks(blockId, depth = 0) {
  const out = [];
  let cursor;
  do {
    const url = new URL(`https://api.notion.com/v1/blocks/${blockId}/children`);
    url.searchParams.set("page_size", "100");
    if (cursor) url.searchParams.set("start_cursor", cursor);
    const res = await fetch(url, { headers: H });
    const data = await res.json();
    for (const b of data.results) {
      out.push({ depth, type: b.type, id: b.id });
      if (b.has_children) out.push(...await readBlocks(b.id, depth + 1));
    }
    cursor = data.has_more ? data.next_cursor : undefined;
  } while (cursor);
  return out;
}
