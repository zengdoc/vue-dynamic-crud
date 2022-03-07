# vue-dynamic-crud

> 一行命令即可生成CRUD代码块，快速搭建CRUD前端系统，支持灵活配置字段。

![Demo](./demo/commander.gif)

---

## 功能

- [x] CRUD功能模块。
- [x] 字段可配置，动态渲染。
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


## 组件

#### 表格 GTable

##### 参数

|        字段         |                  类型                  |       描述       |
| :-----------------: | :------------------------------------: | :--------------: |
| **`searchConfig`**  | [SearchConfig[]](#搜索栏-SearchConfig) |    搜索栏配置    |
| **`toolbarConfig`** |   [Toolbar[]](#工具栏-ToolbarConfig)   |    工具栏配置    |
|    **`config`**     |        [Config[]](#表格-Config)        |     表格配置     |
|     **`data`**      |          {[key: string]: any}          |   当前页数据源   |
|     **`total`**     |                 Number                 |      总数目      |
|   **`pageSize`**    |                 Number                 | 每页显示条目个数 |
|    **`pageNo`**     |                 Number                 |     当前页数     |

##### 事件

|           字段            |            参数            |          描述          |
| :-----------------------: | :------------------------: | :--------------------: |
|       **`search`**        |    {[key: string]: any}    |  当用户进行搜索时触发  |
|       **`command`**       | {event: String, item: row} | 当用户操作工具栏时触发 |
| **`current-page-change`** |           Number           |  当用户选择页数时触发  |

#### 表单 GFormDialog

##### 参数

|     字段     |                     类型                     |    描述    |
| :----------: | :------------------------------------------: | :--------: |
| **`config`** | [FormDialogConfig[]](#表单-FormDialogConfig) |  表单配置  |
|  **`data`**  |      {id?: String, [key: string]: any}       | 表单数据源 |

##### 事件

|           字段            |            参数            |          描述          |
| :-----------------------: | :------------------------: | :--------------------: |
|       **`close`**        | - |  当用户关闭表单时触发  |
|       **`submit`**       | result,oldItem | 当用户提交表单时触发 |

## 类型

#### 搜索栏 SearchConfig

|   字段    |  类型  |           描述            |      可选值      |
| :-------: | :----: | :-----------------------: | :--------------: |
| component | String |          子组件           | GInput / GSelect |
|    ……     |   ……   | [子组件类型](#子组件类型) |        ……        |

#### 工具栏 ToolbarConfig

| 字段 |  类型  |    描述    |                            可选值                            |
| :--: | :----: | :--------: | :----------------------------------------------------------: |
|  -   | string | 工具栏配置 | CREATE / EDIT / DELETE / REFRESH<br/> / FULL_SCREEN / EXIT_FULL_SCREEN |

#### 表格 Config

|     字段      |  类型  |          描述          |           可选值            |
| :-----------: | :----: | :--------------------: | :-------------------------: |
|  **`prop`**   | String |         字段名         |              -              |
|  **`label`**  | String |       表头标签名       |              -              |
| **`width?`**  | String |         列宽度         |              -              |
| **`format?`** | String | 格式化（过滤器filter） | dateTimeFormat / dateFormat |

#### 表单 FormDialogConfig

|   字段    |  类型  |           描述            |      可选值      |
| :-------: | :----: | :-----------------------: | :--------------: |
| component | String |          子组件           | GInput / GSelect |
|    ……     |   ……   | [子组件类型](#子组件类型) |        ……        |

## 子组件类型

####  输入框 GInput

|        字段        |       类型       |                             描述                             |
| :----------------: | :--------------: | :----------------------------------------------------------: |
|     **`prop`**     |      String      |                            字段名                            |
|    **`label`**     |      String      |                            标签名                            |
|    **`value`**     | String \| Number |                              值                              |
|    **`type?`**     |      String      | 类型，参见[Element](https://element.eleme.cn/#/zh-CN/component/input) |
|  **`maxLength?`**  |      Number      |                         最大输入长度                         |
| **`placeholder?`** |      String      |                           占位文本                           |
|   **`disable?`**   |     Boolean      |                             禁用                             |
|    **`rules?`**    |      Object      | 验证规则，参见[Element](https://element.eleme.cn/#/zh-CN/component/form) |

#### 选择框 GSelect

|        字段        |              类型              |                             描述                             |
| :----------------: | :----------------------------: | :----------------------------------------------------------: |
|     **`prop`**     |             String             |                            字段名                            |
|    **`label`**     |             String             |                            标签名                            |
|    **`value`**     |             String             |                              值                              |
|   **`options`**    | {label: String, value: String} |                           下拉选项                           |
| **`placeholder?`** |             String             |                           占位文本                           |
|   **`disable?`**   |            Boolean             |                             禁用                             |
|    **`rules?`**    |             Object             | 验证规则，参见[Element](https://element.eleme.cn/#/zh-CN/component/form) |
