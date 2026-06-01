import { I18n } from "../i18n/i18n";
import type {
  BackgroundColor,
  HideableControl,
  ReadingDirection,
  ViewerState
} from "../types";
import type { RendererCallbacks } from "../renderer/renderer-callbacks";
import { RangeSlider, Selectbox, ToggleSwitch } from "./inputs";
import { bindScrollFade } from "./scroll-fade";

export class SettingsPanel {
  private root: HTMLDivElement;
  private body: HTMLDivElement;
  private inner: HTMLDivElement;

  private titleEl: HTMLDivElement;
  private localeLabel: HTMLDivElement;
  private coverLabel: HTMLDivElement;
  private directionLabel: HTMLDivElement;
  private backgroundColorLabel: HTMLDivElement;
  private intervalLabel: HTMLDivElement;

  private localeSelect: Selectbox;
  private coverToggle: ToggleSwitch;
  private directionSelect: Selectbox;
  private backgroundColorSelect: Selectbox;
  private intervalSlider: RangeSlider;

  constructor(
    private callbacks: RendererCallbacks,
    private i18n: I18n,
    private hidden: ReadonlySet<HideableControl> = new Set()
  ) {
    this.root = document.createElement("div");
    this.root.className = "comimi-settings-panel";
    this.root.dataset.open = "false";
    this.root.setAttribute("role", "dialog");
    this.root.addEventListener("click", (event) => event.stopPropagation());

    this.body = document.createElement("div");
    this.body.className = "comimi-settings-panel-body";

    this.inner = document.createElement("div");
    this.inner.className = "comimi-settings-panel-inner";

    this.titleEl = document.createElement("div");
    this.titleEl.className = "comimi-settings-panel-title";

    this.localeSelect = new Selectbox((locale) =>
      this.callbacks.updateSettings({ locale: String(locale) })
    );
    this.coverToggle = new ToggleSwitch((hasCover) =>
      this.callbacks.updateSettings({ hasCover })
    );
    this.directionSelect = new Selectbox((direction) =>
      this.callbacks.updateSettings({
        readingDirection: direction as ReadingDirection
      })
    );
    this.backgroundColorSelect = new Selectbox((backgroundColor) =>
      this.callbacks.updateSettings({
        backgroundColor: backgroundColor as BackgroundColor
      })
    );
    this.intervalSlider = new RangeSlider((seconds) =>
      this.callbacks.updateSettings({
        autoPageTurnIntervalMs: Math.max(1, seconds) * 1000
      })
    );

    this.intervalSlider.setRange(3, 30, 1);

    this.localeLabel = this.createLabel();
    this.coverLabel = this.createLabel();
    this.directionLabel = this.createLabel();
    this.backgroundColorLabel = this.createLabel();
    this.intervalLabel = this.createLabel();

    const sections: Node[] = [this.titleEl];
    if (!this.hidden.has("locale")) {
      sections.push(
        this.section(this.localeLabel, this.localeSelect.getElement())
      );
    }
    if (!this.hidden.has("cover")) {
      sections.push(
        this.section(this.coverLabel, this.coverToggle.getElement())
      );
    }
    if (!this.hidden.has("direction")) {
      sections.push(
        this.section(this.directionLabel, this.directionSelect.getElement())
      );
    }
    if (!this.hidden.has("interval")) {
      sections.push(
        this.section(this.intervalLabel, this.intervalSlider.getElement())
      );
    }
    if (!this.hidden.has("backgroundColor")) {
      sections.push(
        this.section(
          this.backgroundColorLabel,
          this.backgroundColorSelect.getElement()
        )
      );
    }
    this.inner.append(...sections);

    this.body.append(this.inner);
    this.root.append(this.body);

    bindScrollFade(this.body);
  }

  update(state: ViewerState): void {
    this.titleEl.textContent = this.i18n.t("settings.title");
    this.localeLabel.textContent = "Language";
    this.coverLabel.textContent = this.i18n.t("settings.cover");
    this.directionLabel.textContent = this.i18n.t("settings.direction");
    this.backgroundColorLabel.textContent = this.i18n.t(
      "settings.backgroundColor"
    );
    this.intervalLabel.textContent = this.i18n.t("settings.interval");

    this.localeSelect.setOptions([
      { label: "日本語", value: "ja" },
      { label: "English", value: "en" },
      { label: "简体中文", value: "zh-CN" },
      { label: "한국어", value: "ko" },
      { label: "ภาษาไทย", value: "th" },
      { label: "Indonesia", value: "id" }
    ]);
    this.directionSelect.setOptions([
      { label: this.i18n.t("settings.direction.rtl"), value: "rtl" },
      { label: this.i18n.t("settings.direction.ltr"), value: "ltr" }
    ]);
    this.backgroundColorSelect.setOptions([
      {
        label: this.i18n.t("settings.backgroundColor.white"),
        value: "white"
      },
      {
        label: this.i18n.t("settings.backgroundColor.black"),
        value: "black"
      }
    ]);
    this.intervalSlider.setUnit(this.i18n.t("settings.interval.unit"));

    this.localeSelect.setValue(state.settings.locale);
    this.coverToggle.setChecked(state.settings.hasCover);
    this.directionSelect.setValue(state.settings.readingDirection);
    this.backgroundColorSelect.setValue(state.settings.backgroundColor);
    this.intervalSlider.setValue(
      Math.round(state.settings.autoPageTurnIntervalMs / 1000)
    );

    this.root.dataset.open = String(state.panel === "settings");

    this.scheduleHeightUpdate();
  }

  getElement(): HTMLElement {
    return this.root;
  }

  private createLabel(): HTMLDivElement {
    const label = document.createElement("div");
    label.className = "comimi-settings-label";
    return label;
  }

  private section(label: HTMLDivElement, control: HTMLElement): HTMLDivElement {
    const wrap = document.createElement("div");
    wrap.className = "comimi-settings-section";
    wrap.append(label, control);
    return wrap;
  }

  private scheduleHeightUpdate(): void {
    const apply = () => {
      this.root.style.setProperty(
        "--comimi-settings-height",
        `${this.body.offsetHeight}px`
      );
    };
    if (typeof requestAnimationFrame === "function") {
      requestAnimationFrame(() => requestAnimationFrame(apply));
    } else {
      setTimeout(apply, 0);
    }
  }
}
