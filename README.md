> 该项目是参照[elementUI](https://github.com/ElemeFE/element)源码实现的，目的是想着直接看代码可能看着看着就没毅力了，所以就想参照源码自己写着试试看，发现里面有很多知识点指的学习，下面有兴趣的话可以跟着我一起进行学习，我也会一步一步的完善组件，有异议欢迎大家提出

###### 下载源码，安装依赖，运行项目

```
git clone https://github.com/zi-qiong/element-ui.git

npm install 
/* 然后在package.json里面的"scripts": {} 里面添加
"start": "npm run serve"，主要是我平时习惯了用npm start */

npm start
```



---

### start

###### 1、简单的项目搭建--使用vue-cli


```
npm install -g @vue/cli-service-global  // 全局安装cli

vue create element-ui //创建项目element-ui为项目名称，可自行定义
```

因为我们的elementUI引入时就是简单的通过vue.use就可以使用了

> vue.use : 简单理解就是所有的组件要想通过vue.use(xxx),那么xxx就要提供一个install的方法，这两个是搭配使用的

 

```
// main.js
import elementUi from './components/index.js'

Vue.use(elementUi)
```

再移步到components/index.js,index.js里面写了install方法，并且install方法里面的主要目的是通过Vue.component注册组件

###### 2、开始写我们的第一个组件，移步到[button](/src/components/Button/Button.md)吧 
