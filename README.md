[![CircleCI](https://circleci.com/gh/nemolize/next-todo/tree/master.svg?style=svg)](https://circleci.com/gh/nemolize/next-todo/tree/master)

# next-todo

A todo list manager example made with [Next.js](https://nextjs.org/).
`Next.js` version of [nuxt-todo](https://github.com/nemolize/nuxt-todo) implementatoin.

Demo:
https://next-example-todo.now.sh/

##### Features

- You can `add` and `delete` a todo item, or `toggle` by clicking checkbox.
- `Modal dialog` is implemented for confirming on item deletion.
- `React Hooks` is used for state control.
- Not like [nuxt-todo](https://github.com/nemolize/nuxt-todo) localStorage storing has not been implemented yet.

##### Others

- While this application is intended to be an example of Next.js, [TypeScript](https://www.typescriptlang.org/) is not used.
- [Bulma](http://bulma.io) for styling
  - `TodoList` component uses variable of `bulma` with `@import`
- [now](https://zeit.co/now) for demo site deploy
- [CircleCI](https://circleci.com) for CI/CD

## Clone

```bash
git clone git@github.com:nemolize/next-todo.git && cd next-todo
```

## Build

```bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn run dev

# generate static project
$ yarn run build
```

## Deploy

```bash
npx now out
```
