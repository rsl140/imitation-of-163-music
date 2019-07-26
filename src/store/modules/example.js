import example from '../../api/example'
import * as types from '../mutation-types'

const state = {
  // 用户信息
  userInfo: [],
};

const mutations = {
  // 设置用户信息
  [types.SET_USER_INFO](state, data) {
    state.userInfo = data
  },
};

const actions = {

  /**
   * 获取用户登陆信息
   * @param state
   * @param commit
   * @param params
   * @returns {Promise<void>}
   */
  async getUserInfo({state, commit}, params) {
    let ret = await example.userInfo(params);
    commit(types.SET_USER_INFO, ret.data.account);
    return ret;
  },
};

export default {
  namespaced: true,
  state,
  actions,
  mutations
}
