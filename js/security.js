// Casual-copy deterrents. Browser-delivered HTML/CSS/JS can still be inspected.
document.addEventListener("contextmenu", e => e.preventDefault());
document.addEventListener("dragstart", e => { if (e.target.tagName === "IMG") e.preventDefault(); });
document.addEventListener("selectstart", e => {
  if (!["INPUT","TEXTAREA"].includes(e.target.tagName)) e.preventDefault();
});
document.addEventListener("keydown", e => {
  const k = e.key.toLowerCase(), c = e.ctrlKey || e.metaKey;
  if (e.key === "F12" || (c && k === "u") ||
      (c && e.shiftKey && ["i","j","c"].includes(k)) || (c && k === "s")) {
    e.preventDefault();
  }
});
