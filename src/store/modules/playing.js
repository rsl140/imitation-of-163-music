/*
 * @Author: rsl
 * @Date: 2019-08-03
 * @LastEditors: rsl
 * @LastEditTime: 2019-08-04
 * @Description: 播放
 */
import playing from '../../api/playing'
import * as types from '../mutation-types'

const state = {
  musicUrl: []
};

const mutations = {
  [types.SET_PLAY_LIST_INFO](state, data) {
    state.musicUrl = data
  }
};

const actions = {
  async getMusicUrl({state, commit}, params) {
    let ret = await playing.playLists(params);
    commit(types.SET_MUSIC_URL, ret.data.data);
    return ret;
  }
};

export default {
  namespaced: true,
  state,
  actions,
  mutations
}
