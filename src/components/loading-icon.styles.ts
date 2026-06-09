export const loadingIconStyles = `
.comimi-loading-icon {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: grid;
  gap: 10px;
  justify-items: center;
  width: 80px;
}

.comimi-loading-icon-svg {
  width: 80px;
}

.comimi-loading-svg {
  display: block;
  width: 100%;
  transform-origin: center bottom;
}

.comimi-loading-stroke {
  fill: none;
  stroke: var(--comimi-loading-stroke);
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: 10px;
}

.comimi-loading-mimi {
  transform-origin: 56px 43px;
}

.comimi-loading-mimi-left {
  animation:
    comimi-loading-mimi-left 0.4s ease-in-out 0.1s 2 forwards,
    comimi-loading-mimi-left 0.4s ease-in-out 1.7s 2 forwards;
}

.comimi-loading-mimi-right {
  animation:
    comimi-loading-mimi-right 0.4s ease-in-out 0.1s 2 forwards,
    comimi-loading-mimi-right 0.4s ease-in-out 1.7s 2 forwards;
}

.comimi-loading-eyes {
  transform: translateX(-7px);
  animation:
    comimi-loading-eyes-move 0.4s ease-in-out 1.2s both,
    comimi-loading-eyes-move 0.4s ease-in-out 2.6s reverse forwards;
}

.comimi-loading-eye {
  fill: var(--comimi-loading-eye);
  transform-origin: center;
  transform-box: fill-box;
  animation:
    comimi-loading-eye 0.4s ease-in-out 0s forwards,
    comimi-loading-eye 0.4s ease-in-out 1.6s forwards;
}

.comimi-loading-icon-text {
  color: var(--comimi-loading-text);
  font-size: 12px;
  font-weight: 700;
  line-height: 1.45;
  text-align: center;
}

.comimi-loading-icon-text span {
  display: inline-block;
  animation: comimi-loading-dot 0.8s ease-in-out 0s infinite both;
}

.comimi-loading-icon-text span:nth-child(1) {
  animation-delay: 0s;
}

.comimi-loading-icon-text span:nth-child(2) {
  animation-delay: 0.15s;
}

.comimi-loading-icon-text span:nth-child(3) {
  animation-delay: 0.3s;
}

@keyframes comimi-loading-mimi-left {
  from, to {
    transform: rotate(0deg);
  }
  50% {
    transform: rotate(20deg);
  }
}

@keyframes comimi-loading-mimi-right {
  from, to {
    transform: rotate(0deg);
  }
  50% {
    transform: rotate(-20deg);
  }
}

@keyframes comimi-loading-eyes-move {
  from {
    transform: translateX(-7px);
  }
  to {
    transform: translateX(7px);
  }
}

@keyframes comimi-loading-eye {
  from, to {
    transform: scaleY(1);
  }
  50% {
    transform: scaleY(0.2);
  }
}

@keyframes comimi-loading-dot {
  from, 50%, to {
    opacity: 1;
  }
  25% {
    opacity: 0;
  }
}
`;
