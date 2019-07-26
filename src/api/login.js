import fetch from './fetch';

export default {
  // 获取网易登陆信息
  userInfo(params) {
    return fetch.get('/login/cellphone', params);
  },

}
