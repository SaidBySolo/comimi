export const viewModeSwitcherStyles = `
.comimi-view-switcher {
  position: absolute;
  top: 20px;
  right: 20px;
  display: grid;
  grid-template-columns: repeat(3, 60px);
  width: 180px;
  border-radius: 16px;
  background: var(--comimi-glass);
  box-shadow: var(--comimi-shadow);
  backdrop-filter: blur(5px);
  pointer-events: auto;
  transition:
    transform 0.6s var(--comimi-spring),
    opacity 0.3s linear;
}

.comimi-view-switcher[data-overlay="false"] {
  transform: translateY(-35px);
  opacity: 0;
  pointer-events: none;
  transition:
    transform 0.3s var(--comimi-spring),
    opacity 0.15s linear;
}

@media (hover: hover) {
  .comimi-view-switcher:hover {
    transform: scaleX(1.03);
  }
}

.comimi-view-switcher-indicator {
  position: absolute;
  top: 0;
  left: 0;
  width: 60px;
  height: 100%;
  border-radius: 16px;
  background: var(--comimi-accent);
  transition: transform 0.36s var(--comimi-spring);
}

.comimi-view-switcher-button {
  position: relative;
  display: grid;
  row-gap: 5px;
  justify-items: center;
  align-content: center;
  height: 58px;
  padding: 0;
  border: 0;
  background: transparent;
  color: var(--comimi-muted);
  cursor: pointer;
  transition: color 0.2s linear;
}

.comimi-view-switcher-button[data-selected="true"] {
  color: var(--comimi-contrast);
}

.comimi-view-switcher-icon-wrap {
  width: 20px;
  height: 20px;
  transform-origin: center bottom;
}

.comimi-view-switcher-icon {
  display: block;
  width: 100%;
  height: 100%;
  color: currentColor;
}

.comimi-view-switcher-icon-wrap.comimi-pop-animate {
  animation: comimi-pop 0.5s ease-in-out 0.1s both;
}

.comimi-view-switcher-label {
  color: currentColor;
  font-size: 10px;
  font-weight: 500;
  text-align: center;
  transition: color 0.2s linear;
}

@media (max-width: 767px) {
  .comimi-view-switcher {
    top: 70px;
    right: auto;
    left: calc(50% - 90px);
  }
}
`;
