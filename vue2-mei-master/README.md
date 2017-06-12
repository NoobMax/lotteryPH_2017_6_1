# imei

> A Vue.js project
###技术栈
``` 
1、vue2.0 + vue-router + vuex
2、Axios 请求数据 
3、Css 可使用 less sass  
4、Muse-ui UI组件库 
5、Webpack 打包
6、使用rem自适应布局
```
### 前言

项目基本涵盖了vue大部分的用法  页面保守估计有100多个 包括支付 登陆 定位 加载  等等 

##目录结构
```
├── build              // 构建服务和webpack配置  
├── config             // 项目不同环境的配置        
├── dist               // 项目build目录         
├── index.html         // 项目入口文件
├── package.json       // 项目配置文件
├── src                // 生产目录
│   ├── assets         // 静态配置文件
│   ├── components     // 组件  ----》复用的组件封装后放这里
│   ├── views          // 各种页面
│   ├── store          // vuex状态管理器
│   ├── filters.js     // 各种过滤器
│   └── main.js        // Webpack 预编译入口文件
│   └── App.vue 	   // 根组件
├── static             // 放置静态图片
├── package.json       // 项目依赖
├── README.md
```      
### 项目截图

![首页演示图片](./images/index.png)
![登陆演示图片](./images/login.png)



## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:9999
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
