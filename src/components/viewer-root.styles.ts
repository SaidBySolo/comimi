export const viewerRootStyles = `
.comimi-root {
  --comimi-bg: #fff;
  --comimi-surface: #f7f7f7;
  --comimi-surface-2: #eeeeee;
  --comimi-fg: #333;
  --comimi-muted: #666;
  --comimi-soft: #999;
  --comimi-line: #e0e0e0;
  --comimi-shadow: 0 0 8px rgba(0, 0, 0, 0.1);
  --comimi-glass: rgba(255, 255, 255, 0.8);
  --comimi-glass-strong: rgba(255, 255, 255, 0.8);
  --comimi-spring: cubic-bezier(0.34, 1.56, 0.64, 1);
  background: var(--comimi-bg);
  color: var(--comimi-fg);
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  position: relative;
  width: calc(100% - 24px * 2);
  max-width: 900px;
  aspect-ratio: 900 / 636;
  margin: 0 auto;
  border-radius: 16px;
  box-shadow: 0 0 16px 0 rgba(0, 0, 0, 0.06);
  overflow: hidden;
  user-select: none;
  -webkit-tap-highlight-color: transparent;
  touch-action: none;
  transition:
    box-shadow 0.24s ease-out,
    background-color 0.16s linear;
}

.comimi-root:focus {
  outline: none;
  box-shadow: 0 0 24px 0 rgba(0, 0, 0, 0.14);
}

@media (max-width: 767px) {
  .comimi-root {
    max-width: 500px;
    aspect-ratio: 390 / 490;
  }
}

.comimi-root[data-bg="black"] {
  --comimi-bg: #000;
}

.comimi-root[data-layout="wide"] {
  width: 100%;
  max-width: none;
  aspect-ratio: auto;
  min-height: 320px;
  margin: 0;
  border-radius: 0;
  box-shadow: none;
}

.comimi-root[data-layout="browserFullscreen"],
.comimi-root[data-layout="nativeFullscreen"] {
  position: fixed;
  inset: 0;
  z-index: 999;
  width: 100vw;
  height: 100dvh;
  max-width: none;
  aspect-ratio: auto;
  margin: 0;
  border-radius: 0;
  box-shadow: none;
}

.comimi-resize-handle {
  position: relative;
  width: 100%;
  height: 20px;
  background: #fff;
  cursor: ns-resize;
  touch-action: none;
}

.comimi-resize-handle::after {
  content: "";
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 40px;
  height: 3px;
  border-radius: 999px;
  background: #bbb;
  transition:
    width 0.36s cubic-bezier(0.34, 1.56, 0.64, 1),
    height 0.36s cubic-bezier(0.34, 1.56, 0.64, 1),
    background-color 0.2s linear;
}

@media (hover: hover) {
  .comimi-resize-handle:hover::after {
    width: 52px;
    height: 5px;
    background: #888;
  }
}

`;
