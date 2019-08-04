/*
 * @Author: rsl
 * @Date: 2019-08-03
 * @LastEditors: rsl
 * @LastEditTime: 2019-08-05
 * @Description: 歌单
 */
import playlist from '../../api/playlist'
import * as types from '../mutation-types'

const state = {
  playListInfo: [],
  musicId: 0
};

const mutations = {
  [types.SET_PLAY_LIST_INFO] (state, data) {
    state.playListInfo = data
  },
  [types.SET_MUSIC_ID] (state, data) {
    state.musicId = data
  }
};

const actions = {
  async getPlayListInfo ({state, commit}, params) {
    let ret = await playlist.playLists(params);
    commit(types.SET_PLAY_LIST_INFO, ret.data.playlist);
    return ret;
  },
  setMusicId ({state, commit}, params) {
    commit(types.SET_MUSIC_ID, params);
  }
};

export default {
  namespaced: true,
  state,
  actions,
  mutations
}
