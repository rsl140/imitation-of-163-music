/*
 * @Author: rsl
 * @Date: 2019-08-03
 * @LastEditors: rsl
 * @LastEditTime: 2019-08-03
 * @Description: 歌单
 */
import fetch from './fetch';

export default {
  // 获取歌单
  playLists (params) {
    return fetch.get('/user/playlist', params);
  }
}
