## 文档
- [中文文档](https://www.tslang.cn/docs/home.html)

### 准备工作
- npm install ts-loader --save-dev
- npm install typescript
- npm install awesome-typescript-loader (未使用)
- npm install html-webpack-plugin --save-dev
- npm install extract-text-webpack-plugin --save-dev
再同package.json比对

### Log
 1.模块化打包
 2.htmlWebpackPlugin插件
 3.webpack打包第三方类库 eg: lodash

### 修改部分
  "dependencies": {
    "@types/lodash": "4.14.44",
    "lodash": "^4.17.4"
  }

### 注意
之前全局安装的webpack 1.13.x版本的，这次打包时出现了问题（目前在项目安装的webpack是3.5.2，可正常打包）