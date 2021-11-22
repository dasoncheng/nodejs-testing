# nodejs-testing

单元测试和点对点测试

## 开发环境

开始前，请确保你的电脑具备以下依赖

- [Node.js](https://nodejs.org/en/) 运行环境
- [Yarn](https://yarnpkg.com/) 包管理工具
- 版本管理工具 [Git](https://git-scm.com/downloads)
- 为了一致的体验推荐使用 [Visual Studio Code](https://code.visualstudio.com/) 代码编辑器

```bash
# 依赖安装
yarn
```

## VSCode 插件

- [EditorConfig](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig)
- [Material Icon Theme](https://marketplace.visualstudio.com/items?itemName=PKief.material-icon-theme)
- [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)

## 目录结构

单元测试匹配规则为`**/*.spec.ts`，点对点测试匹配规则为`e2e/**/*.test.ts`。

```bash
# 运行单元测试
yarn test:unit

# 运行点对点测试
yarn test:e2e
```

## 前置知识

- [TypeScript](https://www.typescriptlang.org/) 编程语言（了解基本语法）
- Nodejs [模块化](https://nodejs.org/api/esm.html)及 [npm](https://www.npmjs.com/) 包管理（了解基本概念）
- [Jest](https://jestjs.io/) 测试框架（熟悉常用 API）
- [Playwright](https://playwright.dev/) 点对点测试框架（熟悉常用 API）
