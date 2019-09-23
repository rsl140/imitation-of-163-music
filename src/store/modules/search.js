/*
 * @Author: rsl
 * @Date: 2019-09-22
 * @LastEditors: rsl
 * @lastTime: 2019-09-23
 * @Description: 搜索
 */
import search from '../../api/search'
import * as types from '../mutation-types'

const state = {
  hotSearchInfo: []
}

const mutations = {
  [types.SET_HOT_SEARCH] (state, data) {
    state.hotSearchInfo = data
  }
}

const actions = {
  async getSearchHotInfo ({ state, commit }) {
    const ret = await search.searchHotDetail()
    commit(types.SET_HOT_SEARCH, ret.data.data)
    return ret.data
  },
  async searchDefaultInfo ({ state, commit }) {
    const ret = await search.searchDefault()
    return ret.data
  }
}

export default {
  namespaced: true,
  state,
  actions,
  mutations
}
