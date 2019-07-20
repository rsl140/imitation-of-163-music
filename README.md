## vue-cli-project
- 👨‍💻‍已构建配置好的vuejs全家桶项目，统一管理后端接口 | 获取数据 | 请求数据，已包含vue-router，vuex，api，axios. webpack, 储存用vue-ls, 异步async/await, css sass

### 使用

``` bash
# 安装服务
npm install

# 启动服务
npm run dev

```

### 本地接口服务环境搭建
接口地址：https://binaryify.github.io/NeteaseCloudMusicApi/#/?id=neteasecloudmusicapi
下载：git clone https://github.com/Binaryify/NeteaseCloudMusicApi.git 或github直接下载代码包
安装：进入目录，npm install
启动服务：node app.js

### 项目简单截图
在screenshot目录下

### 手机端适配方案
采用flexible rem适配方案
写px自动转rem

### 说明

#### src架构

```
├── App.vue
├── api
│   ├── doctor.js
│   └── fetch.js
├── assets
│   └── logo.png
├── components
│   └── HelloWorld.vue
├── libs
│   └── util.js
├── main.js
├── router
│   └── index.js
├── store
│   ├── index.js
│   ├── modules
│   └── mutation-types.js
└── views
    └── doctor
```



处理数据页面这2大块，把数据和页面分离，在vuex里面做请求数据，页面只需要做调用数据。

请求接口这块再细分，接口和请求接口分开，我用了最新的async/await函数做数据请求

#### api文件夹 主要放后端提供的接口，如


```js
import fetch from './fetch';

export default {
  // 获取用户登陆信息
  list(params) {
    return fetch.get('/example/index', params)
  },
}
```

#### fetch.js 文件是封装axios请求，以及请求处理，和http状态码的等处理

```js
import Util from '../libs/util'
import qs from 'qs'
import Vue from 'vue'

Util.ajax.defaults.headers.common = {
  'X-Requested-With': 'XMLHttpRequest'
};

Util.ajax.interceptors.request.use(config => {
  /**
   * 在这里做loading ...
   * @type {string}
   */

  // 获取token
  config.headers.common['Authorization'] = 'Bearer ' + Vue.ls.get("web-token");
  return config

}, error => {
  return Promise.reject(error)

});

Util.ajax.interceptors.response.use(response => {

  /**
   * 在这里做loading 关闭
   */

    // 如果后端有新的token则重新缓存
  let newToken = response.headers['new-token'];

  if (newToken) {
    Vue.ls.set("web-token", newToken);
  }

  return response;

}, error => {
  let response = error.response;
  if (response.status == 401) {
    // 处理401错误

  } else if (response.status == 403) {
    // 处理403错误

  } else if (response.status == 412) {
    // 处理412错误

  } else if (response.status == 413) {
    // 处理413权限不足

  }

  return Promise.reject(response)

});

export default {
  post(url, data) {

    return Util.ajax({
      method: 'post',
      url: url,
      data: qs.stringify(data),
      timeout: 30000,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
      }
    })
  },

  get(url, params) {
    return Util.ajax({
      method: 'get',
      url: url,
      params,
    })
  },

  delete(url, params) {
    return Util.ajax({
      method: 'delete',
      url: url,
      params
    })
  },

  put(url, data) {

    return Util.ajax({
      method: 'put',
      url: url,
      data: qs.stringify(data),
      timeout: 30000,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
      }
    })
  }
}

```


#### 在vuex里面做请求，比如请求用户信息，用async/await，拿到数据存进store数据里面


```js
├── index.js
├── modules
│   └── example.js
└── mutation-types.js

import example from '../../api/example'
import * as types from '../mutation-types'

const state = {
  // 用户信息
  userInfo: [],
};

const mutations = {
  // 设置医生列表
  [types.SET_USER_INFO](state, data) {
    state.userInfo = data
  },
};

const actions = {

  /**
   * 获取医生顾问列表
   * @param state
   * @param commit
   * @param params
   * @returns {Promise<void>}
   */
  async getUserInfo({state, commit}, params) {
    let ret = await example.userInfo(params);
    commit(types.SET_USER_INFO, ret.data.data);
  },
};

export default {
  state,
  actions,
  mutations
}

```

#### 在页面里需要执行引入：

```js
import {mapActions, mapState} from 'vuex'
```

#### 代码可以具体看文件的代码


```js
└── example
    ├── index.vue

<template>
  <section class="content">
    <div class="content-box">
      <h1>示例</h1>
      <p>
        <a
          href="https://binaryify.github.io/NeteaseCloudMusicApi/#/?id=neteasecloudmusicapi"
          target="_blank"
        >163api介绍</a>
      </p>
      <h1>请求返回信息</h1>
      <p>{{resData}}</p>
    </div>
  </section>
</template>

<script>
import { mapActions, mapState } from 'vuex';

export default {
  components: {},
  data() {
    return {
      resData: null,
    };
  },
  computed: {
    ...mapState({
      userInfo: state => state.example.userInfo,
    }),
  },
  created() {
    // 获取医生列表
    this.fetchData();

    // 开启loading
    this.openLoading();
  },
  methods: {
    ...mapActions({
      // 获取医生列表
      getUserInfo: 'example/getUserInfo',
      // 开启loading
      openLoading: 'loading/openLoading',
      // 关闭loading
      closeLoading: 'loading/closeLoading',
    }),

    /**
     * 获取医生列表
     * @returns {Promise<void>}
     */
    async fetchData() {
      // 医生类型
      let params = { phone: 15801252644, password: 'wgz080166' };
      // 获取医生列表
      try {
        const data = await this.getUserInfo(params);
        this.resData = data.data.account;
        console.log(data);
        // 关闭loading
        this.closeLoading();
      } catch (e) {
        // 关闭loading
        this.closeLoading();
      }
    },

    /**
     * 路由跳转方法
     * @param link
     */
    routeLink(link) {
      this.$router.push({ path: link });
    },
  },
};
</script>

<style scoped lang="scss">
.content {
  position: absolute;
  width: 100%;
  display: flex;
  justify-content: center;
  text-align: center;

  &-box {
    font-size: 32px;
    font-weight: 800;
  }
}
</style>

```

#### 核心就是把API数据和页面分离，细分把接口，请求API数据方法放在vuex做处理，在页面映射vuex的mapActions提供的接口方法获取数据，做统一管理项目
