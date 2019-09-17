<!--
 * @Author: rsl
 * @Date: 2019-07-26
 * @LastEditors: rsl
 * @LastEditTime: 2019-09-17 17:08:03
 * @Description: 登录页
 -->
<template>
  <div class="login">
    <div class="music-icon"></div>
    <van-cell-group class="login-cell">
      <van-field
        v-model="login.phone"
        required
        clearable
        label="手机号"
        placeholder="请输入手机号"
      />
    </van-cell-group>
    <van-cell-group class="login-cell">
      <van-field
        v-model="login.password"
        required
        type="password"
        label="密码"
        placeholder="请输入密码"
      />
    </van-cell-group>
    <van-button
      class="login-btn"
      type="danger"
      @click="loginIn"
    >
      登录
    </van-button>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
  name: 'Login',
  components: {},
  data () {
    return {
      login: {
        phone: 0,
        password: ''
      }
    }
  },
  computed: {
    ...mapState({
      userInfo: state => state.login.userInfo
    })
  },
  methods: {
    ...mapActions({
      // 获取用户列表
      getUserInfo: 'login/getUserInfo',
      // 开启loading
      openLoading: 'loading/openLoading',
      // 关闭loading
      closeLoading: 'loading/closeLoading'
    }),

    /**
     * @description: 用户登录
     * @param {type}
     * @return:
     */
    async loginIn () {
      this.openLoading()
      // 用户登录
      try {
        const data = await this.getUserInfo(this.login)
        this.resData = data.data.account
        this.$router.push({ name: 'Dashboard' })
        // 关闭loading
        this.closeLoading()
      } catch (e) {
        // 关闭loading
        this.closeLoading()
      }
    }
  }
}
</script>

<style scoped lang="scss">
.music-icon {
  background: url('../../assets/img/topbar.png');
  background-position: 0 -0.3125rem;
  width: 5.25rem;
  height: 1.5875rem;
  margin-bottom: 0.3125rem;
}

.login {
  position: absolute;
  bottom: 0;
  left: 0;
  top: 0;
  width: 100%;
  padding-top: 40vw;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background: #eee;

  &-cell {
    margin-bottom: .625rem;
    width: 70vw;
  }

  &-btn {
    border-radius: .2rem;
    width: 60vw;
  }
}
</style>
