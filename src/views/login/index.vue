<!--
 * @Author: rsl
 * @Date: 2019-07-26
 * @LastEditors: rsl
 * @LastEditTime: 2019-08-08
 * @Description: 登录页
 -->
<template>
  <div class="login">
     <div class="login-box">
       <div class="login-input">
        <label>手机号：</label>
        <input type="text" v-model="login.phone" />
       </div>
       <div class="login-input">
        <label>密码：</label>
        <input type="password" v-model="login.password" @keypress.enter="loginIn" />
       </div>

     </div>
     <div class="login-box">
      <button class="login-btn" @click="loginIn">登录</button>
     </div>
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
      userInfo: state => state.example.userInfo
    })
  },
  methods: {
    ...mapActions({
      // 获取用户列表
      getUserInfo: 'example/getUserInfo',
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
        this.$router.push({ name: 'Playlist' })
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

  &-input {
    margin-bottom: .4rem;
    text-align: right;
    label {
      width: .9rem;
    }
    input {
      width: 60vw;
      height: 1rem;
      text-indent: .2rem;
      outline: none;
    }
  }
  &-btn {
    padding: .2rem 1rem;
    background: #ed1c00;
    color: #fff;
    border-radius: .4rem;
    margin-top: .6rem;
  }
}
</style>
