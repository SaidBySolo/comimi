# comimi

![comimi バナー画像](assets/banner.png)

comimiは、TypeScript/JavaScript向けの漫画ビューワーライブラリです。

ReactなどのUIライブラリに依存していないため、単体で動作します。

[yui540.com/comimi](https://yui540.com/comimi)

## インストール

```sh
npm install @yui540/comimi
```

## クイックスタート

```ts
import { createMangaViewer } from "@yui540/comimi";

createMangaViewer(document.querySelector("#viewer")!, {
  manga: {
    id: "sample",
    title: "サンプル漫画",
    author: "yui540",
    pages: [
      { id: "p0", type: "image", src: "/pages/0.webp" },
      { id: "p1", type: "image", src: "/pages/1.webp" },
      { id: "p2", type: "image", src: "/pages/2.webp" },
    ],
  },
});
```

これが最小構成です。ビューワーは `#viewer` にマウントされ、DOMを自動的に管理します。戻り値のインスタンスを通じて、ページ送りや設定・イベント操作も行えます。

## ドキュメント

APIの詳細、オプション、設定、キーボードショートカット、永続化、i18n については [`docs/USAGE.md`](./docs/USAGE.md) に記載しています。

## ライセンス

MIT
