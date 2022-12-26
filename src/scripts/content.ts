// We create the element
const styleElement: HTMLStyleElement = document.createElement("style");
// CSS Selectors for hiding elements
// Thumbnails on Home and Subscriptions tabs
const homeAndSubIndividual = 'ytd-grid-video-renderer:has(a[href*="shorts"])';
// Groups of Shorts on Home and Subscriptions tabs
const homeAndSubGroup =
  "ytd-rich-section-renderer:has(ytd-rich-shelf-renderer[is-shorts])";
// Thumbnails appearing in search and on "related videos"
const searchAndRelated = 'ytd-video-renderer:has(a[href*="shorts"])';
// Groups appearing in search
const searchGroup = 'ytd-reel-shelf-renderer:has(path[d*="M17"])';
// We add the styles to the element
styleElement.textContent = `
${homeAndSubIndividual},
${homeAndSubGroup},
${searchAndRelated},
${searchGroup}
{
  display: none !important;
}
`;
// We add the element to the DOM
(document.head || document.documentElement).appendChild(styleElement);
