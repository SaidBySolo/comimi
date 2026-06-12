export const errorIconStyles = `
.comimi-error-icon {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: grid;
  gap: 10px;
  justify-items: center;
  width: 80px;
}

.comimi-error-icon-svg {
  width: 80px;
}

.comimi-error-svg {
  display: block;
  width: 100%;
  transform-origin: center bottom;
  animation: comimi-error-fall 0.8s ease-in-out 0s both;
}

.comimi-error-body {
  fill: var(--comimi-bg);
  transition: fill 0.2s linear;
}

.comimi-error-stroke {
  fill: none;
  stroke: var(--comimi-placeholder);
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: 10px;
}

.comimi-error-mimi {
  transform-origin: 56px 43px;
}

.comimi-error-mimi-left {
  animation:
    comimi-error-mimi-left-intro 0.8s ease-in-out 0s both,
    comimi-error-mimi-left-loop 1.5s ease-in-out 0.8s infinite forwards;
}

.comimi-error-mimi-right {
  animation:
    comimi-error-mimi-right-intro 0.8s ease-in-out 0s both,
    comimi-error-mimi-right-loop 1.5s ease-in-out 0.8s infinite forwards;
}

.comimi-error-eye {
  fill: var(--comimi-placeholder);
  transform-origin: center;
  transform-box: fill-box;
  animation: comimi-error-eye 1.5s ease-in-out 0.8s infinite forwards;
}

.comimi-error-icon-text {
  color: var(--comimi-faint);
  font-size: 12px;
  font-weight: 700;
  line-height: 1.45;
  text-align: center;
}

@keyframes comimi-error-fall {
  from {
    opacity: 0;
    transform: translateY(-40%) rotate(10deg);
  }
  20% {
    opacity: 1;
  }
  40% {
    transform: translateY(0) rotate(0);
  }
  60% {
    transform: translateY(0) scale(1.1, 0.95);
  }
  80% {
    transform: translateY(0) scale(0.95, 1.1);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes comimi-error-mimi-left-intro {
  from {
    transform: rotate(0deg);
  }
  60% {
    transform: rotate(20deg);
  }
  to {
    transform: rotate(10deg);
  }
}

@keyframes comimi-error-mimi-left-loop {
  from, to {
    transform: rotate(10deg);
  }
  50% {
    transform: rotate(30deg);
  }
}

@keyframes comimi-error-mimi-right-intro {
  from {
    transform: rotate(0deg);
  }
  60% {
    transform: rotate(-20deg);
  }
  to {
    transform: rotate(-10deg);
  }
}

@keyframes comimi-error-mimi-right-loop {
  from, to {
    transform: rotate(-10deg);
  }
  50% {
    transform: rotate(-30deg);
  }
}

@keyframes comimi-error-eye {
  from, to {
    transform: translateY(0);
  }
  50% {
    transform: translateY(4px);
  }
}
`;
