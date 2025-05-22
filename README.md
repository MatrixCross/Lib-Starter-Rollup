# Lib-Starter-Rollup

[![npm](https://img.shields.io/npm/v/lib-starter-rollup1/latest)](https://www.npmjs.com/package/lib-starter-rollup1)
[![codecov](https://codecov.io/gh/Wyatex/Lib-Starter-Rollup/branch/master/graph/badge.svg?token=8GQVJ21GMP)](https://codecov.io/gh/Wyatex/Lib-Starter-Rollup)
[![CI](https://github.com/Wyatex/Lib-Starter-Rollup/actions/workflows/main.yml/badge.svg)](https://github.com/Wyatex/Lib-Starter-Rollup/actions/workflows/main.yml)

快速创建一个 JS/TS 库，使用 Rollup 打包，开箱即用。本项目不建议作为组件库开发模板，组件库更适合使用 vite 的 lib 模式。

## 使用本模板
```
npm create matrix-starter
或者pnpm
pnpm create matrix-starter
```
选择模板选： lib

## 特性

- 支持 typescript
- 支持 terser 压缩
- 支持 [typedoc](https://github.com/TypeStrong/typedoc) 生成文档、vitepress 演示
- 支持 [vitest](https://github.com/vitest-dev/vitest) 单元测试和代码覆盖率生成
- 支持 Github Action 自动发布 npm 包
- 支持 commit 信息检查、changelog 生成
- 支持 prettier 格式化
- 支持 githook ，基于[simple-git-hooks](https://github.com/toplenboren/simple-git-hooks)

## 使用教程

1. 使用 pnpm 或者 npm 安装依赖，执行 build 脚本即可
2. 配置 package.json：修改 package.json 的 name、main、module、types、jsdelivr、unpkg、exports，如果不清楚这些配置有什么用，可以先尝试跑一次`pnpm build`
3. 配置 rollup.config.ts，如果不需要压缩可以去掉 terser 插件，如果库代码依赖别的 npm 包，那么打包 iife 包就需要编辑 external 和 iife 配置项的 globals。比如：

```js
export default defineConfig({
    external: Object.keys(pkg.dependencies) // 如果不配置external，可能会把其他包代码打包进产物
    output: [
    {
      format: 'iife',
      file: pkg.jsdelivr,
      name: 'Test', // 这里记得给你的库换个名字哦
      extend: true,
      globals: {
        "axios": "axios" // 比如你的代码依赖使用了axios，那么这里需要配置axios，而且网页需要先加载axios再加载你的库
      },
    },
  ],
})
```

4. 如果需要多入口打包，可以参考我的[这篇文章](https://wyatex.xyz/%E5%89%8D%E7%AB%AF/%E5%89%8D%E7%AB%AF%E6%89%93%E5%8C%85%EF%BC%9Atsup/#%E9%85%8D%E7%BD%AE-package-json)进行配置 package.json

## 一些建议

- 如果是团队维护，建议添加 prettier 和 eslint，或者一个 eslint
- 如果设计到业务或者业务一些算法的，建议不要传到共公有 npm，而且最好打开 terser 压缩而且关闭 sourcemap
