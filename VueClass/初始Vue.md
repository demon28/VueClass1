### Vue三部曲：

#### 一，开篇：初始Vue

#### 二，进阶：Vue组件

#### 三，扩展：Vue脚手架 cli







### 开篇：初始Vue

· 

（一）安装vue。

1, node.js 安装命令

``` html
npm install vue
```



2，cdn 引用

```html
<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
```





(二) 创建Vue

1，属性挂载

```javascript
new Vue({
    el: '#app'
})
```



2,方法挂载

```javascript
new Vue({
   
}).$mount('#app')   
```





（三）属性与插值表达式

```html
<div id="app">
  {{ message }}
</div>
```



```javascript
var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!'
  }
})
```





(四) 常用指令



``` html
v-once   一次赋值
```



```javascript
v-if     条件渲染
```



```html
v-show   条件隐藏
```



``` html
v-for    循环遍历
```



```
v-bind   绑定属性
```



```
v-model  双向绑定
```





（五）Vue生命周期de 钩子函数



<img src="https://doc.vue-js.com/images/lifecycle.png" alt="avatar" style="zoom:50%;" />



（六）计算属性与监听器

计算属性：

```
computed: {
  now: function () {
    return Date.now()
  }
}
```



```
computed: {
  fullName: {
    // getter
    get: function () {
      return this.firstName + ' ' + this.lastName
    },
    // setter
    set: function (newValue) {
      var names = newValue.split(' ')
      this.firstName = names[0]
      this.lastName = names[names.length - 1]
    }
  }
}
```



监听器：



```
 watch: {
    // 如果 `question` 发生改变，这个函数就会运行
    question: function (newQuestion, oldQuestion) {
      this.answer = 'Waiting for you to stop typing...'
      this.debouncedGetAnswer()
    }
  },
```





(7) 组件

```

Vue.component("Myimage",{
    props: {
        imgname: "",
        imgurl: ""

    },
    template: `<div style='text- align: center'>
             <span> 图片名称：{{ imgname }} </span >
            <br />
         <img :src='imgurl'>
        "</div>`

});

```





(8)实战Vue 项目代码演示