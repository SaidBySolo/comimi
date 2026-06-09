export const menuPanelStyles = `
.comimi-menu-panel {
  position: absolute;
  top: 24px;
  left: 24px;
  width: 420px;
  z-index: 5;
  pointer-events: auto;
  transition:
    transform 0.6s var(--comimi-spring),
    opacity 0.3s linear;
}

.comimi-menu-panel[data-overlay="false"] {
  transform: translateY(-35px);
  opacity: 0;
  pointer-events: none;
  transition:
    transform 0.3s var(--comimi-spring),
    opacity 0.15s linear;
}

.comimi-menu-bg {
  position: absolute;
  inset: 0;
  border-radius: 16px;
  background: var(--comimi-glass);
  box-shadow: var(--comimi-shadow);
  backdrop-filter: blur(5px);
  transition: inset 0.36s var(--comimi-spring);
}

@media (hover: hover) {
  .comimi-menu-panel:hover > .comimi-menu-bg {
    inset: -5px;
  }
}

.comimi-menu-top {
  position: relative;
  display: grid;
  grid-template-columns: auto 1fr;
  column-gap: 13px;
  align-items: center;
  box-sizing: border-box;
  width: 100%;
  height: 62px;
  padding: 0 13px;
  border: 0;
  background: transparent;
  color: inherit;
  text-align: left;
  cursor: pointer;
}

.comimi-menu-button {
  position: relative;
  width: 34px;
  height: 34px;
  overflow: hidden;
}

.comimi-menu-button-inner {
  display: block;
  position: absolute;
  inset: 0;
  transition: transform 0.4s var(--comimi-spring);
}

.comimi-menu-panel[data-open="true"] .comimi-menu-button-inner {
  transform: translateY(100%);
}

.comimi-menu-button-inner > * {
  position: absolute;
  inset: 0;
}

.comimi-menu-button-inner > *:nth-child(2) {
  transform: translateY(-100%);
}

.comimi-menu-title-wrap {
  min-width: 0;
}

.comimi-menu-title {
  display: block;
  width: 100%;
  color: var(--comimi-fg);
  font-size: 15px;
  font-weight: 700;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.comimi-menu-author {
  display: block;
  width: 100%;
  color: var(--comimi-muted);
  font-size: 12px;
  font-weight: 400;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.comimi-menu-bottom {
  position: relative;
  width: 100%;
  overflow: hidden;
  transition: height 0.24s ease-in-out;
}

.comimi-menu-border {
  width: 100%;
  height: 1px;
  background: var(--comimi-line);
}

.comimi-menu-view {
  position: absolute;
  top: 1px;
  left: 0;
  width: 100%;
  transition: all 0.28s ease-in-out;
  opacity: 0;
  visibility: hidden;
  transform: scale(0.92);
  filter: blur(5px);
}

.comimi-menu-view-menu {
  position: relative;
}

.comimi-menu-panel[data-view="menu"] .comimi-menu-view-menu,
.comimi-menu-panel[data-view="shortcut"] .comimi-menu-view-shortcut,
.comimi-menu-panel[data-view="pageList"] .comimi-menu-view-page-list {
  opacity: 1;
  visibility: visible;
  transform: scale(1);
  filter: blur(0);
}

.comimi-menu-list {
  position: relative;
  width: 100%;
  padding: 10px 0;
}

.comimi-menu-link {
  box-sizing: border-box;
  display: grid;
  grid-template-columns: 1fr auto;
  column-gap: 8px;
  align-items: center;
  width: 100%;
  padding: 10px 16px 10px 22px;
  border: 0;
  border-radius: 10px;
  background: transparent;
  color: var(--comimi-muted);
  cursor: pointer;
  transition: background-color 0.24s linear;
}

.comimi-menu-link:hover {
  background: var(--comimi-hover);
}

.comimi-menu-link-text {
  color: var(--comimi-muted);
  font-size: 14px;
  font-weight: 700;
  line-height: 1.45;
  text-align: left;
}

.comimi-menu-link-arrow {
  display: block;
  width: 20px;
  height: 20px;
  color: var(--comimi-icon-subtle);
}

.comimi-menu-link-arrow > svg {
  display: block;
  width: 100%;
  height: 100%;
}

.comimi-page-list-inner {
  box-sizing: border-box;
  padding: 0 22px;
  max-height: 315px;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
}

.comimi-page-list-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}

.comimi-page-list-item {
  display: grid;
  row-gap: 4px;
  padding: 0;
  border: 0;
  background: transparent;
  color: var(--comimi-muted);
  cursor: pointer;
  text-align: center;
}

.comimi-page-list-thumb {
  position: relative;
  display: block;
  width: 100%;
  aspect-ratio: 100 / 141;
  background: var(--comimi-page-surface);
  border-radius: 6px;
  outline: 3px solid var(--comimi-line);
}

.comimi-page-list-thumb-html {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  padding: 8px;
  text-align: center;
  color: var(--comimi-icon-subtle);
  font-size: 11px;
  font-weight: 700;
  line-height: 1.4;
}

.comimi-page-list-thumb img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: contain;
  border-radius: 4px;
  user-select: none;
  -webkit-user-drag: none;
}

.comimi-page-list-text {
  color: var(--comimi-muted);
  font-size: 14px;
  font-weight: 700;
}

.comimi-shortcut-inner {
  box-sizing: border-box;
  padding: 0 22px;
  max-height: 315px;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
}

.comimi-shortcut-grid {
  display: grid;
  row-gap: 22px;
}

.comimi-shortcut-section {
  display: grid;
  row-gap: 8px;
}

.comimi-shortcut-heading {
  color: var(--comimi-muted);
  font-size: 12px;
  font-weight: 700;
  line-height: 1.45;
}

.comimi-shortcut-list {
  display: grid;
  row-gap: 8px;
  justify-items: start;
}

.comimi-shortcut-column {
  display: flex;
  flex-wrap: wrap;
  gap: 8px 16px;
  align-items: center;
}

.comimi-shortcut-item {
  display: grid;
  grid-template-columns: repeat(2, auto);
  column-gap: 8px;
  align-items: center;
  width: fit-content;
}

.comimi-shortcut-badge {
  display: grid;
  grid-auto-flow: column;
  column-gap: 6px;
  align-items: center;
  padding: 4px 8px;
  border-radius: 7px;
  background: var(--comimi-surface-2);
}

.comimi-shortcut-key {
  color: var(--comimi-muted);
  font-size: 13px;
  font-weight: 700;
  line-height: 1.45;
}

.comimi-shortcut-or::before {
  content: "or";
  display: block;
  color: var(--comimi-muted);
  font-size: 11px;
  font-weight: 400;
  line-height: 1.45;
}

.comimi-shortcut-label {
  color: var(--comimi-muted);
  font-size: 13px;
  font-weight: 400;
  line-height: 1.45;
}

.comimi-back-button {
  position: relative;
  width: 100%;
  height: 56px;
  padding: 0;
  border: 0;
  background: transparent;
  cursor: pointer;
}

.comimi-back-inner {
  position: absolute;
  inset: 8px;
}

.comimi-back-bg {
  position: absolute;
  inset: 0;
  border-radius: 8px;
  background: var(--comimi-surface-2);
  transition: inset 0.36s var(--comimi-spring), border-radius 0.36s var(--comimi-spring);
}

.comimi-back-button:hover .comimi-back-bg {
  inset: -4px;
  border-radius: 10px;
}

.comimi-back-text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: var(--comimi-muted);
  font-size: 14px;
  font-weight: 700;
  line-height: 1.45;
  pointer-events: none;
}

.comimi-back-arrow {
  position: absolute;
  top: 50%;
  left: 8px;
  width: 22px;
  height: 22px;
  color: var(--comimi-icon-subtle);
  transform: translateY(-50%) scaleX(-1);
  pointer-events: none;
}

.comimi-back-arrow > svg {
  display: block;
  width: 100%;
  height: 100%;
}

@media (max-width: 767px) {
  .comimi-menu-panel {
    top: 0;
    left: 0;
    width: 100%;
  }

  .comimi-menu-bg {
    border-radius: 0 0 16px 16px;
  }

  .comimi-menu-top {
    width: 100%;
  }

  .comimi-page-list-inner,
  .comimi-shortcut-inner {
    max-height: calc(var(--view-height, 100vh) - 62px - 56px);
  }
}
`;
