# luckin-coffee

> Vue Study - luckin Coffee

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

> 安装axios
### npm安装
``` bash
  npm install --save axios
```

####
在入口main.js中导入axios 并将axios写入vue的原型，这样就能更简单的使用。

``` javascript
import axios from 'axios'
import Qs from 'qs'
//QS是axios库中带的，不需要我们再npm安装一个

Vue.prototype.axios = axios;
Vue.prototype.qs = Qs;
```

#### 使用Demo
``` javascript
this.axios.post('/api/test',this.qs.stringify({'name':'xiaoming'}),{
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  }
}).then(res => {
  //控制台打印请求成功时返回的数据
  console.log(res.data)
}).catch(err => {
  if(err.response) {
    //控制台打印错误返回的内容
    console.log(err.response)
  }
})
```
##### `# bind(this) 异步绑定 改变this指向`
``` javascript
this.axios.post('/api/test',this.qs.stringify({'name':'xiaoming'}),{
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  }
}).then(function (res) {
  //控制台打印请求成功时返回的数据
  console.log(res.data)
}.bind(this)).catch(function (err) {
  if(err.response) {
    //控制台打印错误返回的内容
    console.log(err.response)
  }
}.bind(this))
```

> 安装 Vuex
### npm安装
``` bash
  npm install vuex --save
```

---
> 安装Element-UI
### npm安装
``` bash
  npm i element-ui -S
```

### 在main.js中引入
``` javascript
import Vue from 'vue';
// 引入 ElementUI
import ElementUI from 'element-ui';
// 引入主题CSS
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue';

// 全局注册
Vue.use(ElementUI);

new Vue({
  el: '#app',
  render: h => h(App)
});

```

> 参考

http://element.eleme.io/#/zh-CN/component/quickstart

---

> Vue install less
### Step1：在项目中安装Less
``` bash
  $ npm install less less-loader --save
```
### Step2：配置Less解析器
#### 在webpack.base.conf.js中，modules结节下的rules节点中添加Less的解析器，如下所示：
``` json
  module: {
    rules: [
       {
        test: /\.scss$/,
        loaders: ["style", "css", "sass","style-loader!css-loader!less-loader"]
      },
```
### Step3: 书写Less
``` html
  <style lang="less">
      ···
  </style>
```

> 参考文档

  http://lesscss.cn/

  http://less.bootcss.com/#

  http://www.bootcss.com/p/lesscss/

  https://www.cnblogs.com/lin-dong/p/6711224.html

  https://www.zhihu.com/question/50135522

---

> vue-seamless-scroll

#### `Vue 列表滚动`

https://github.com/chenxuan0000/vue-seamless-scroll

> npm 安装

``` bash
  npm install vue-seamless-scroll --save
```

##### 模版引入
``` html
  <seamlessScroll :data="newsList" class="SeamlessScroll" :class-option="classOption" @ScrollEnd="end">
    ··· ···
    </seamlessScroll>
```
``` javascript
import vueSeamless from 'vue-seamless-scroll'
export default {
  data() {
    return {
      newsList: Index.infoList, // 数据源
      liHeight: 35, // 单条记录高度
      options: {
        // step: 1, //步长 越大滚动速度越快
        limitMoveNum: 0, //启动无缝滚动最小数据量 this.dataList.length
        // hoverStop: true, //是否启用鼠标hover控制
        // direction: 0, //1 往上 0 往下
        // openWatch: true, //开启data实时监听
        // singleHeight: 0, //单条数据高度有值hoverStop关闭
        // waitTime: 3000 //单步停止等待时间
      }
    };
  },
  components: {
    vueSeamless
  },
  omputed: {
    classOption() {
      const _this = this;
      return _this.options;
    }
  },
    mounted() {
    const _this = this;
    // 获取模块高度
    const elHeight = _this.$refs.PopularityTop.offsetHeight;
    const et = parseInt(elHeight / _this.liHeight);
    // 单页显示数据总数 / 是否滚动
    _this.options.limitMoveNum =
      elHeight % _this.liHeight > 0 ? et + 1 : et;
  },
  methods: {
    end() {
      // console.log("ScrollEnd");
    }
  }
}

```


<table>
<thead>
<tr>
<th align="left">key</th>
<th>description</th>
<th>default</th>
<th>val</th>
</tr>
</thead>
<tbody>
<tr>
<td align="left"><code>step</code></td>
<td>the faster the rolling speed is faster</td>
<td><code>1</code></td>
<td><code>Number</code></td>
</tr>
<tr>
<td align="left"><code>limitMoveNum</code></td>
<td>start seamless scrolling minimum data length</td>
<td><code>5</code></td>
<td><code>Number</code></td>
</tr>
<tr>
<td align="left"><code>hoverStop</code></td>
<td>mouse hover control is enabled</td>
<td><code>true</code></td>
<td><code>Boolean</code></td>
</tr>
<tr>
<td align="left"><code>direction</code></td>
<td>0 down、 1 up 、 2 left 、 3 right</td>
<td><code>1</code></td>
<td><code>Number</code></td>
</tr>
<tr>
<td align="left"><code>openTouch</code></td>
<td>open mobile touch</td>
<td><code>true</code></td>
<td><code>Boolean</code></td>
</tr>
<tr>
<td align="left"><code>singleHeight</code></td>
<td>one single stop height(default zero is seamless) =&gt; direction 0/1</td>
<td><code>0</code></td>
<td><code>Number</code></td>
</tr>
<tr>
<td align="left"><code>singleWidth</code></td>
<td>one single stop width(default zero is seamless) =&gt; direction 2/3</td>
<td><code>0</code></td>
<td><code>Number</code></td>
</tr>
<tr>
<td align="left"><code>waitTime</code></td>
<td>one single data stop wait time(ms)</td>
<td><code>1000</code></td>
<td><code>Number</code></td>
</tr>
<tr>
<td align="left"><code>switchOffset</code></td>
<td>the left and right buttons distance from the left and right sides (px)</td>
<td><code>30</code></td>
<td><code>Number</code></td>
</tr>
<tr>
<td align="left"><code>autoPlay</code></td>
<td>whether or not to automatically play the switch needs to be set to false</td>
<td><code>true</code></td>
<td><code>Boolean</code></td>
</tr>
<tr>
<td align="left"><code>switchSingleStep</code></td>
<td>the size of a single step switch (px)</td>
<td><code>134</code></td>
<td><code>Number</code></td>
</tr>
<tr>
<td align="left"><code>switchDelay</code></td>
<td>the animation time of a single step switch(ms)</td>
<td><code>400</code></td>
<td><code>Number</code></td>
</tr>
<tr>
<td align="left"><code>switchDisabledClass</code></td>
<td>the className of the switch parent element that cannot be clicked</td>
<td><code>disabled</code></td>
<td><code>String</code></td>
</tr>
<tr>
<td align="left"><code>isSingleRemUnit</code></td>
<td>singleHeight and singleWidth Whether to enable the rem metric</td>
<td><code>false</code></td>
<td><code>Boolean</code></td>
</tr>
</tbody>
</table>



---
For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

---
