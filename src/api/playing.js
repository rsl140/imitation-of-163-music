/*
 * @Author: rsl
 * @Date: 2019-08-03
 * @LastEditors: rsl
 * @LastEditTime: 2019-08-04
 * @Description: 播放
 */
import fetch from './fetch';

export default {
  // 获取音乐url
  playLists (params) {
    return fetch.get('/song/url', params);
  }
}
