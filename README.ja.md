[![CircleCI](https://circleci.com/gh/nemolize/next-todo/tree/master.svg?style=svg)](https://circleci.com/gh/nemolize/next-todo/tree/master)

# next-todo

[Next.js](https://nextjs.org/)を用いた Todo リスト管理のサンプルアプリケーション

Demo:
https://next-example-todo.now.sh/

##### 特徴

- 機能は Todo アイテムの `追加` と `削除` 及び `完了トグル`
- コンポーネント間通信方法の実装例として、削除時の確認用 `モーダルダイアログ` の実装を行った。
- 全て`Function Component`として実装しステート管理は `React Hooks` を利用して行っている。

##### その他

- `Next.js`のサンプルとしての実装を重視し[TypeScript](https://www.typescriptlang.org/)は導入せず、Vanilla Next.js での実装とした。
- スタイル定義に[Bulma](http://bulma.io)を利用している
- デモサイトのデプロイに[now](https://zeit.co/now)を利用している
- CI/CD に[CircleCI](https://circleci.com)を利用している

## クローン

```bash
git clone git@github.com:nemolize/next-todo.git && cd next-todo
```

## ビルド

```bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn run dev

# generate static project
$ yarn run build
```

## デプロイ

```bash
npx now out
```
