# comimi — 使い方

`@yui540/comimi` のフルリファレンスです。簡単な概要はリポジトリトップの `README.md` を参照してください。

## インストール

```sh
npm install @yui540/comimi
```

```ts
import { createMangaViewer } from "@yui540/comimi";
```

CDN 利用時は `dist/manga-viewer.global.js` を読み込み、`window.MangaViewer.createMangaViewer(...)` を呼び出してください。

## クイックスタート

```ts
import { createMangaViewer } from "@yui540/comimi";

const viewer = createMangaViewer(document.querySelector("#viewer")!, {
  manga: {
    id: "sample",
    title: "モノクロ世界にようこそ",
    author: "yui540",
    pages: [
      { id: "p0", type: "image", src: "/pages/0.webp" },
      { id: "p1", type: "image", src: "/pages/1.webp" },
      { id: "p2", type: "image", src: "/pages/2.webp" }
    ]
  },
  locale: "ja",
  settings: {
    layoutMode: "inline",
    readingDirection: "rtl",
    hasCover: true
  },
  events: {
    pageChange: ({ pageIndex }) => console.log("page", pageIndex + 1)
  }
});

viewer.nextPage();
viewer.goToPage(10);
viewer.destroy();
```

## API

### `createMangaViewer(container, options)`

`container` 内にビューワーをマウントして `MangaViewerInstance` を返します。`container` の既存の子要素はライブラリが生成するDOMに置き換えられます。

```ts
interface MangaViewerInstance {
  destroy(): void;
  setManga(manga: Manga): Promise<void>;
  setPages(pages: MangaPage[]): Promise<void>;
  getState(): Readonly<ViewerState>;
  updateSettings(settings: Partial<ViewerSettings>): Promise<void>;
  goToPage(pageIndex: number): void;
  nextPage(): void;
  previousPage(): void;
  toggleOverlay(force?: boolean): void;
  toggleAutoPageTurn(): void;
  toggleFullscreen(): Promise<void>;
  on<T extends ViewerEventName>(
    eventName: T,
    handler: ViewerEventHandler<T>
  ): () => void;
}
```

### オプション

```ts
interface MangaViewerOptions {
  manga: Manga;
  initialPageIndex?: number;
  locale?: string;          // "ja" | "en"、または独自キー（translations と併用）
  translations?: TranslationMap;
  settings?: Partial<ViewerSettings>;
  storage?: { enabled?: boolean; databaseName?: string };
  className?: string;
  events?: Partial<{
    ready: (e: { manga: Manga }) => void;
    pageChange: (e: { pageIndex: number; page: MangaPage }) => void;
    settingsChange: (e: { settings: ViewerSettings }) => void;
    layoutChange: (e: { layoutMode: LayoutMode }) => void;
    destroy: () => void;
  }>;
}
```

## ページ

```ts
type MangaPage = ImagePage | HtmlPage;

interface ImagePage {
  id: string;
  type: "image";
  src: string;
  thumbnailSrc?: string;
  width?: number;
  height?: number;
  alt?: string;
  label?: string;
}

interface HtmlPage {
  id: string;
  type: "html";
  html: string;       // 文字列。innerHTML としてそのまま挿入される
  sandbox?: string;   // iframe を含む場合に指定推奨
  aspectRatio?: number;
  label?: string;
}
```

`id` は画像要素のキャッシュと進捗保存のキーに使われるので、安定した値を渡してください。

## 設定

| フィールド | デフォルト | 説明 |
|---|---|---|
| `locale` | `"ja"` | UI言語 |
| `hasCover` | `true` | 表紙ありモード（見開き時、1ページ目を単独表示） |
| `readingDirection` | `"rtl"` | `"rtl"`（右→左、日本語漫画）/ `"ltr"` |
| `pageTurnMode` | `"single"` | `"single"` / `"spread"`（2ページ見開き） |
| `layoutMode` | `"inline"` | `"inline"`, `"wide"`, `"browserFullscreen"`, `"nativeFullscreen"` |
| `autoPageTurnIntervalMs` | `5000` | 自動再生の間隔 (ms) |
| `pageTurnAnimation` | `true` | ページめくり時のスライドアニメ |
| `zoom.min` / `.max` / `.step` | `1` / `4` / `0.25` | ズームの範囲とステップ |

## レイアウトモード

| モード | 挙動 |
|---|---|
| `inline` | 親要素内に収まる（デスクトップ max 900px / モバイル max 500px）。アスペクト比固定・角丸・薄影あり |
| `wide` | 横幅100%、下のハンドルをドラッグして高さ可変 |
| `browserFullscreen` | `position: fixed; inset: 0` — Fullscreen API を使わずブラウザいっぱいに表示 |
| `nativeFullscreen` | Fullscreen API を使用。失敗時は `browserFullscreen` にフォールバック |

## キーボードショートカット

ビューワーのルート要素にフォーカスがある時のみ有効です。

| キー | 動作 |
|---|---|
| `←` / `Space` | 左に移動（`readingDirection` に応じて前/次ページ） |
| `→` / `Shift+Space` | 右に移動 |
| `A` | 自動再生のトグル |
| `N` | レイアウト: 標準 (inline) |
| `W` | レイアウト: ワイド (wide) |
| `F` | レイアウト: 全画面 (browserFullscreen) |
| `P` | 1ページ ↔ 見開きの切替 |
| `M` | メニューパネルのトグル |
| `S` | 設定パネルのトグル |
| `Escape` | 開いているパネルを閉じる / フルスクリーンを解除 |

## ジェスチャー

- 背景クリック / タップ: オーバーレイの表示切替
- 左右端のクリック: 前 / 次ページ（`readingDirection` に応じて向きが変わる）
- スワイプ: ページ移動。端では弾性的に抵抗あり
- ピンチ: ズーム（`zoom.min`〜`zoom.max` でクランプ）
- ズーム中のドラッグ: パン（ページの範囲内にクランプ）
- ダブルクリック / ダブルタップ: 1x ↔ 2x の切替

## 永続化 (IndexedDB)

`storage.enabled` を `false` にしない限り、`indexedDB` が利用可能な環境では以下を自動で保存します。

- 全体設定（locale, readingDirection, hasCover, pageTurnMode, animation, autoPageTurnIntervalMs）
- 現在のレイアウトモードと wide の高さ
- 漫画ごとの現在ページ（`manga.id` をキーに保存）

データベース名は既定で `manga-viewer`。`storage.databaseName` で上書きできます。

## i18n

ビルトインのロケールは `ja` と `en` です。`translations` オプションでキーを上書き／追加できます。

```ts
createMangaViewer(container, {
  manga,
  locale: "fr",
  translations: {
    "overlay.settings": "Réglages",
    "settings.cover": "Couverture"
    // 上書きしたいキーだけでOK
  }
});
```

全キーは `locales/ja.json` を参照してください。未定義キーは `ja` → キー文字列自体、の順でフォールバックします。

## イベント

```ts
interface ViewerEventMap {
  ready: { manga: Manga };
  pageChange: { pageIndex: number; page: MangaPage };
  settingsChange: { settings: ViewerSettings };
  layoutChange: { layoutMode: LayoutMode };
  destroy: void;
}
```

初期登録は `options.events`、後付け／解除は以下：

```ts
const off = viewer.on("layoutChange", ({ layoutMode }) => { ... });
off(); // 解除
```

## ディレクトリ構成

```
src/
├── index.ts                       公開エントリ (createMangaViewer + 型)
├── types.ts                       公開する型定義
├── defaults.ts                    デフォルト設定 / 派生stateの計算
├── core/                          ライフサイクル / イベント / アセットローダ
├── store/                         Flux 風の store + reducer
├── renderer/                      DOM を所有する単一の ViewerRenderer
├── components/                    各 UI コンポーネント (dock, menu, settings, ...)
├── i18n/                          翻訳ルックアップ
├── storage/                       IndexedDB ラッパ
└── styles/                        CSS レジストリ / media query ヘルパ
locales/
├── ja.json
└── en.json
examples/preview/                  Vite ベースのローカルプレビュー
```

## 開発

```sh
npm install
npm run dev        # examples/preview を Vite dev server で起動
npm run typecheck  # tsc --noEmit
npm run build      # bundle + .d.ts を dist/ に出力
```

プレビューは `examples/preview/` にあり、`examples/preview/sample-comic/*.webp` を `import.meta.glob` 経由で読み込みます。
