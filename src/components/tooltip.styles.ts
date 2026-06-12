export const tooltipStyles = `
.comimi-tooltip {
  position: absolute;
  bottom: 0;
  left: 50%;
  padding: 6px 10px;
  border-radius: 8px;
  background: var(--comimi-glass-soft);
  box-shadow: var(--comimi-shadow);
  backdrop-filter: blur(5px);
  color: var(--comimi-fg);
  font-size: 12px;
  font-weight: 600;
  line-height: 1.45;
  white-space: nowrap;
  pointer-events: none;
  user-select: none;
  opacity: 0;
  transform: translate(-50%, calc(100% + 6px)) scale(0.88);
  transform-origin: center top;
  transition:
    opacity 0.1s ease-in-out,
    transform 0.16s ease-in-out;
  z-index: 5;
}

@media (hover: hover) {
  .comimi-has-tooltip:hover > .comimi-tooltip {
    opacity: 1;
    transform: translate(-50%, calc(100% + 6px)) scale(1);
  }
}
`;
