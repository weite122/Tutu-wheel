# Tutu-wheel - 一个Vue UI组件

[![Build Status](https://travis-ci.org/weite122/Tutu-wheel.svg?branch=master)](https://travis-ci.org/weite122/Tutu-wheel)
## 介绍

这是我在学习 Vue 过程中做的一个 UI 框架，希望对你有用。
## 开始使用

1. 添加 CSS 样式

    使用本框架前，请在 CSS 中开启 border-box
    
    ```
    *,*::before,*::after{box-sizing: border-box;}
    ```
    
    IE8以上浏览器都支持此样式
    
    你还需要设置默认颜色等变量（后续会改为 SCSS 变量）
    ```
    html {
        --button-height: 32px;
        --font-size: 14px;
        --button-bg: white;
        --button-active-bg: #eee;
        --border-radius: 4px;
        --color: #333;
        --border-color: #999;
        --border-color-hover: #666;
    }
    ```
    IE 15 及以上浏览器都支持此样式。
2. 安装 wheel    

    ```
    npm i --save tutu-test-1-1
    ```
3. 引入 wheel
    ```
    import { Button, ButtonGroup, Icon} from 'tutu-test-1-1'
    import 'tutu-test-1-1/dist/index.css'
    
    export default {
      name: 'app',
      components: {
        'g-button': Button
      }
    }
    ```    

## 文档

- https://weite122.github.io/Tutu-wheel/
