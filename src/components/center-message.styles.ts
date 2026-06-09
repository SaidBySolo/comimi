export const centerMessageStyles = `
.comimi-center-message {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  pointer-events: none;
  z-index: 1;
  transition: opacity 0.3s linear;
}

.comimi-center-message[data-overlay="false"] {
  opacity: 0;
  transition: opacity 0.15s linear;
}

.comimi-center-message-text {
  box-sizing: border-box;
  padding: 6px 12px;
  border-radius: 8px;
  background: var(--comimi-overlay);
  box-shadow: var(--comimi-shadow);
  backdrop-filter: blur(5px);
  color: var(--comimi-muted);
  font-size: 12px;
  font-weight: 400;
  line-height: 1.45;
  text-align: center;
  white-space: nowrap;
}

.comimi-center-message-mobile {
  display: none;
}

@media (max-width: 767px) {
  .comimi-center-message {
    width: calc(100% - 60px * 2);
    max-width: max-content;
  }

  .comimi-center-message-desktop {
    display: none;
  }

  .comimi-center-message-mobile {
    display: block;
  }
}
`;
