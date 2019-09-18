import Util from '../libs/util'
import qs from 'qs'
import Vue from 'vue'
// import store from '../store/index'

// Util.ajax.defaults.headers.common = {
//   'X-Requested-With': 'XMLHttpRequest'
// };

Util.ajax.interceptors.request.use(config => {
  /**
   * 在这里做loading ...
   * @type {string}
   */
  if (config.isLoading) {
    // 开启loading
    // store.dispatch('loading/openLoading')
  }

  // 获取token
  // config.headers.common['Authorization'] = 'Bearer ' + Vue.ls.get("web-token");
  return config
}, error => {
  return Promise.reject(error)
})

Util.ajax.interceptors.response.use(response => {
  /**
   * 在这里做loading 关闭
   */

  // 如果后端有新的token则重新缓存
  // let newToken = response.headers['new-token'];

  // if (newToken) {
  //   Vue.ls.set("web-token", newToken);
  // }
  // 关闭loading
  closeLoading()

  return response
}, error => {
  const res = error.response
  const { code } = res.data

  switch (code) {
    case 401:
      // 处理401错误
      console.log('权限不足')
      Vue.ls.remove('BOBLOG_ADMIN_TOKEN')
      window.location.href = '/login'
      break

    case 404:
      console.log('404不存在')
      break

    case 412:
      console.log(res.data.message)
      break

    // eslint-disable-next-line no-case-declarations
    case 422:
      let errors = ''
      if (res.data.errors) {
        const arr = []
        for (const key in res.data.errors) {
          res.data.errors[key].forEach((item) => {
            arr.push(item)
          })
        }
        errors = arr.length > 0 ? arr.join('，') : arr
      }
      console.log(errors)
      break

    case 500:
      console.log(res.data.message)
      break

    default:
      console.log(res.data.message)
  }

  // 关闭loading
  closeLoading()
  return Promise.reject(res)
})

export default {
  post (url, params = {}) {
    const { isLoading = true } = params
    return Util.ajax({
      method: 'post',
      url: url,
      data: qs.stringify(params),
      timeout: 30000,
      isLoading,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
      }
    })
  },

  get (url, params = {}) {
    const { isLoading = true } = params
    return Util.ajax({
      method: 'get',
      url: url,
      params,
      isLoading
    })
  },

  delete (url, params = {}) {
    const { isLoading = true } = params
    return Util.ajax({
      method: 'delete',
      url: url,
      params,
      isLoading
    })
  },

  put (url, params = {}) {
    const { isLoading = true } = params
    return Util.ajax({
      method: 'put',
      url: url,
      data: qs.stringify(params),
      isLoading,
      timeout: 30000,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
      }
    })
  }
}

/**
 * 关闭loading
 */
function closeLoading () {
  // 延迟100毫秒关闭
  setTimeout(() => {
    // 关闭loading
    // store.dispatch('loading/closeLoading')
  }, 100)
}
