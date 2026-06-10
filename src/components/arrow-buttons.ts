import { icon } from "./icons";
import { getPageStep } from "../defaults";
import type { RendererCallbacks } from "../renderer/renderer-callbacks";
import type { ReadingDirection, ViewerState } from "../types";

/**
 * オーバーレイ内の左右ページ送りボタン。
 * DOM を作り直すとページ移動のたびにホバーアニメーションが再生されてしまうため、
 * 要素は使い回し、状態（表示/活性）だけを update() で書き換える。
 */
export class ArrowButtons {
  private root: HTMLDivElement;
  private prevButton: HTMLButtonElement;
  private nextButton: HTMLButtonElement;
  private state?: ViewerState;

  constructor(private callbacks: RendererCallbacks) {
    this.root = document.createElement("div");
    this.root.className = "comimi-arrows";

    this.prevButton = this.buildButton("prev", "left");
    this.nextButton = this.buildButton("next", "right");
    this.root.append(this.prevButton, this.nextButton);
  }

  getElement(): HTMLElement {
    return this.root;
  }

  update(state: ViewerState): void {
    this.state = state;
    this.root.dataset.overlay = String(state.overlayVisible);
    this.root.dataset.autoplay = String(state.autoPageTurnEnabled);
    this.setDisabled(this.prevButton, !canMoveFromSide(state, "left"));
    this.setDisabled(this.nextButton, !canMoveFromSide(state, "right"));
  }

  private setDisabled(button: HTMLButtonElement, disabled: boolean): void {
    if (disabled) {
      button.dataset.disabled = "true";
    } else {
      delete button.dataset.disabled;
    }
  }

  private buildButton(
    variant: "prev" | "next",
    side: "left" | "right"
  ): HTMLButtonElement {
    const button = document.createElement("button");
    button.type = "button";
    button.className = `comimi-arrow-button comimi-arrow-${variant}`;
    button.setAttribute(
      "aria-label",
      variant === "next" ? "Next page" : "Previous page"
    );
    button.addEventListener("click", (event) => {
      event.stopPropagation();
      if (this.state) {
        moveFromSide(this.state, this.callbacks, side);
      }
    });

    const inner = document.createElement("span");
    inner.className = "comimi-arrow-inner";

    const bg = document.createElement("span");
    bg.className = "comimi-arrow-bg";

    const arrowIcon = icon("arrow");
    arrowIcon.classList.add("comimi-arrow-icon");

    inner.append(bg, arrowIcon);
    button.append(inner);
    return button;
  }
}

function moveFromSide(
  state: ViewerState,
  callbacks: RendererCallbacks,
  side: "left" | "right"
): void {
  const isNext = isNextSide(side, state.settings.readingDirection);
  isNext ? callbacks.nextPage() : callbacks.previousPage();
}

function isNextSide(
  side: "left" | "right",
  direction: ReadingDirection
): boolean {
  return direction === "rtl" ? side === "left" : side === "right";
}

function canMoveFromSide(state: ViewerState, side: "left" | "right"): boolean {
  const isNext = isNextSide(side, state.settings.readingDirection);
  const { currentPageIndex } = state;
  if (isNext) {
    const step = getPageStep(state.settings, currentPageIndex);
    return currentPageIndex + step < state.manga.pages.length;
  }
  return currentPageIndex > 0;
}
