/*
 * @Author: rsl
 * @Date: 2019-09-22
 * @LastEditors: rsl
 * @LastEditTime: 2019-09-23
 * @Description: 搜索
 */
import fetch from './fetch'

export default {
  // 获取热搜列表(详细)
  searchHotDetail () {
    return fetch.get('/search/hot/detail')
  },
  // 默认搜索关键词
  searchDefault () {
    return fetch.get('/search/default')
  }
}
