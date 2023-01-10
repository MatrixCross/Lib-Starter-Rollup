# Lib-Starter-Rollup

快速创建一个 JS/TS 类库，使用 Rollup 打包，开箱即用。本项目不建议作为组件库开发模板，组件库更适合使用 vite 的 lib 模式。

## 特性

- 支持 typescript
- 支持 terser 压缩

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

## 一些建议

- 如果是团队维护，建议添加 prettier 和 eslint，或者一个 eslint
- 如果设计到业务或者业务一些算法的，建议不要传到共公有 npm，而且最好打开 terser 压缩而且关闭 sourcemap
