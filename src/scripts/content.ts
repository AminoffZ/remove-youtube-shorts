/* We inject style */
const styleElement: HTMLStyleElement = document.createElement("style");
styleElement.textContent = `
ytd-grid-video-renderer:has(a[href*="shorts"]),
ytd-video-renderer:has(a[href*="shorts"]),
ytd-rich-section-renderer:has(ytd-rich-shelf-renderer[is-shorts]),
ytd-item-section-renderer:has(yt-horizontal-list-renderer):has(a[href*="shorts"])
{
  display: none !important;
}
`;
(document.head || document.documentElement).appendChild(styleElement);
