import { I18n } from "../i18n/i18n";
import type { LayoutMode, ViewerState } from "../types";
import type { RendererCallbacks } from "../renderer/renderer-callbacks";
import { icon, type IconName } from "./icons";

interface ModeEntry {
  mode: LayoutMode;
  iconName: IconName;
  labelKey: string;
  button: HTMLButtonElement;
  iconWrap: HTMLSpanElement;
}

export class ViewModeSwitcher {
  private root: HTMLDivElement;
  private indicator: HTMLSpanElement;
  private tooltip: HTMLSpanElement;
  private entries: ModeEntry[];
  private prevMode?: LayoutMode;

  constructor(
    private callbacks: RendererCallbacks,
    private i18n: I18n
  ) {
    this.root = document.createElement("div");
    this.root.className = "comimi-view-switcher comimi-has-tooltip";
    this.root.dataset.overlay = "false";

    this.indicator = document.createElement("span");
    this.indicator.className = "comimi-view-switcher-indicator";
    this.indicator.style.transform = "translateX(0px)";
    this.root.append(this.indicator);

    const modes: Array<[LayoutMode, string, IconName]> = [
      ["inline", "layout.inline", "default"],
      ["wide", "layout.wide", "wide"],
      ["browserFullscreen", "layout.browserFullscreen", "fullscreen"]
    ];

    this.entries = modes.map(([mode, labelKey, iconName]) => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "comimi-view-switcher-button";
      button.dataset.selected = "false";
      button.addEventListener("click", (event) => {
        event.stopPropagation();
        this.callbacks.setLayoutMode(mode);
      });

      const iconWrap = document.createElement("span");
      iconWrap.className = "comimi-view-switcher-icon-wrap";
      const iconElement = icon(iconName);
      iconElement.classList.add("comimi-view-switcher-icon");
      iconWrap.append(iconElement);

      const label = document.createElement("span");
      label.className = "comimi-view-switcher-label";
      label.textContent = i18n.t(labelKey);

      button.append(iconWrap, label);
      this.root.append(button);

      return { mode, iconName, labelKey, button, iconWrap };
    });

    this.tooltip = document.createElement("span");
    this.tooltip.className = "comimi-tooltip";
    this.tooltip.textContent = i18n.t("overlay.layout");
    this.root.append(this.tooltip);
  }

  getElement(): HTMLElement {
    return this.root;
  }

  update(state: ViewerState): void {
    this.root.dataset.overlay = String(state.overlayVisible);

    const selectedIndex = Math.max(
      0,
      this.entries.findIndex((entry) => entry.mode === state.layout.mode)
    );
    this.indicator.style.transform = `translateX(${selectedIndex * 60}px)`;

    const changed =
      this.prevMode !== undefined && this.prevMode !== state.layout.mode;

    for (const entry of this.entries) {
      const isSelected = entry.mode === state.layout.mode;
      entry.button.dataset.selected = String(isSelected);
      entry.iconWrap.classList.toggle("comimi-pop-animate", changed && isSelected);
      entry.button.querySelector(".comimi-view-switcher-label")!.textContent =
        this.i18n.t(entry.labelKey);
    }

    this.tooltip.textContent = this.i18n.t("overlay.layout");
    this.prevMode = state.layout.mode;
  }
}
