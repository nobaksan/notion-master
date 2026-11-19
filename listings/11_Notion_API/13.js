await fetch(`https://api.notion.com/v1/pages/${pageId}`, {
  method: "PATCH",
  headers: H,
  body: JSON.stringify({
    properties: { "상태": { status: { name: "검토" } } },
  }),
});
