/* We inject style */
const style: HTMLStyleElement = document.createElement("style");
style.textContent = `
ytd-grid-video-renderer:has(a[href*="shorts"]),
ytd-rich-section-renderer:has(ytd-rich-shelf-renderer[is-shorts]) {
  display: none !important;
}
`;
(document.head || document.documentElement).appendChild(style);
