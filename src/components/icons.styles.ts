export const iconStyles = `
.comimi-icon {
  display: block;
  width: 100%;
  height: 100%;
}

.comimi-icon-fill {
  fill: currentColor;
  transition: fill .2s linear;
}

.comimi-icon-stroke {
  fill: none;
  stroke: currentColor;
  stroke-width: 1.6;
  transition: stroke .2s linear;
}

.comimi-menu-svg,
.comimi-close-svg {
  display: block;
  position: relative;
  width: 34px;
  height: 34px;
}

.comimi-menu-svg span,
.comimi-close-svg span {
  position: absolute;
  left: 50%;
  width: 17px;
  height: 3px;
  border-radius: 999px;
  background: var(--comimi-muted);
}

.comimi-menu-svg span:nth-child(1) {
  top: 9px;
  transform: translateX(-50%);
}

.comimi-menu-svg span:nth-child(2) {
  top: 50%;
  transform: translate(-50%, -50%);
}

.comimi-menu-svg span:nth-child(3) {
  bottom: 9px;
  transform: translateX(-50%);
}

.comimi-close-svg span {
  top: 50%;
}

.comimi-close-svg span:nth-child(1) {
  transform: translate(-50%, -50%) rotate(45deg);
}

.comimi-close-svg span:nth-child(2) {
  transform: translate(-50%, -50%) rotate(-45deg);
}
`;
