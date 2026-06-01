export const notificationsStyles = `
.comimi-notifications {
  position: absolute;
  bottom: 140px;
  left: 50%;
  transform: translateX(-50%);
  display: grid;
  row-gap: 8px;
  justify-items: center;
  pointer-events: none;
  z-index: 3;
}

.comimi-toast {
  display: grid;
  grid-template-columns: auto auto;
  gap: 5px;
  align-items: center;
  justify-content: center;
  width: fit-content;
  padding: 6px 13px 6px 8px;
  border-radius: 999px;
  background-color: #666;
  animation: comimi-toast-popup 0.37s ease-in-out 0s both;
}

.comimi-toast-dot {
  display: block;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: #888;
}

.comimi-toast-text {
  color: #fff;
  font-size: 12px;
  font-weight: 700;
  line-height: 1.45;
}

@keyframes comimi-toast-popup {
  from {
    transform: translateY(6px) scale(0.2, 0.8);
    opacity: 0;
  }
  60% {
    transform: translateY(-1px) scale(1.1, 1.05);
    opacity: 1;
  }
  to {
    transform: scale(1, 1);
    opacity: 1;
  }
}

@media (max-width: 767px) {
  .comimi-notifications {
    bottom: calc(120px + env(safe-area-inset-bottom, 0px));
  }
}
`;
