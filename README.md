## Setup Jest for JavaScript

> You can read docs [here](https://jestjs.io/docs/getting-started)

-   You can **install** extension VSCode for code `Jest` to support for coding:

    -   [Jest](https://marketplace.visualstudio.com/items?itemName=Orta.vscode-jest)
    -   [Jest snippets](https://marketplace.visualstudio.com/items?itemName=andys8.jest-snippets)
    -   [Jest runner](https://marketplace.visualstudio.com/items?itemName=firsttris.vscode-jest-runner)

-   Then, you create folder: `npm init` and setting folder
-   Then, you add package:

```js
// install package
yarn add -D jest // use to install jest to run
yarn add -D babel-jest @babel/core @babel/preset-env // use to support syntax for ES6 module, new version
// example: use import/export instead of use `module.exports`

// create file `babel.config.js` and write code file here
module.exports = {
  presets: [['@babel/preset-env', {targets: {node: 'current'}}]],
};
```
