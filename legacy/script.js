const addStyle = (styleString) => {
  const style = document.createElement("style");
  style.textContent = styleString;
  document.head.append(style);
};

addStyle(`
        ytd-grid-video-renderer.style-scope.ytd-grid-renderer:has(
          a[href*="shorts"]
        ) {
        display: none !important;
      }
      `);
