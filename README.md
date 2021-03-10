# vue-dynamic-crud

> 支持灵活配置，快速搭建CRUD前端界面，彻底摆脱拧螺丝🔩。

---

## 功能

- [x] CRUD功能模块。
- [x] 支持可配置，动态渲染。
- [x] 支持命令行快速生成代码块。

## 预览

![Demo](./demo/preview.png)

[在线地址](https://zengdoc.github.io/vue-dynamic-crud)

## 启动项目

### 安装依赖

```bash
npm install
```

### 启动本地开发环境

```bash
npm run dev-[环境变量]
eg: npm run dev-dev

npm run mock    // mock模式
```

### 构建生产环境

```bash
npm run build-[环境变量]
eg: npm run build-dev
```

## 命令行生成

```
cd ./bin
:bin $ node ./crud create [模块路径] [模块名]
```

![Demo](./demo/commander.gif)