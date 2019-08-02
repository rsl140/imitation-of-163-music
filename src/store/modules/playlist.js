/*
 * @Author: rsl
 * @Date: 2019-08-03
 * @LastEditors: rsl
 * @LastEditTime: 2019-08-03
 * @Description: 歌单
 */
import playlist from '../../api/playlist'
import * as types from '../mutation-types'

const state = {
  playListInfo: []
};

const mutations = {
  [types.SET_PLAY_LIST_INFO](state, data) {
    state.playListInfo = data
  }
};

const actions = {
  async getPlayListInfo({state, commit}, params) {
    let ret = await playlist.playLists(params);
    commit(types.SET_PLAY_LIST_INFO, ret.data.playlist);
    return ret;
  }
};

export default {
  namespaced: true,
  state,
  actions,
  mutations
}
