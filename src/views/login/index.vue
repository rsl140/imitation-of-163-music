<!--
 * @Author: rsl
 * @Date: 2019-07-26
 * @LastEditors: rsl
 * @LastEditTime: 2019-09-23
 * @Description: 登录页
 -->
<template>
  <div class="login-box">
    <div class="login">
      <van-cell-group class="login-logo">
        <div class="iconfont">&#xe60b;</div>
        <div>网易云音乐</div>
      </van-cell-group>
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
      <van-cell-group class="login-button">
        <van-button
          size="large"
          class="login-btn"
          color="#c20c0c"
          @click="loginIn"
        >
          登录
        </van-button>
      </van-cell-group>
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
        phone: '',
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
      getUserInfo: 'login/getUserInfo'
    }),

    /**
     * @description: 用户登录
     * @param {type}
     * @return:
     */
    async loginIn () {
      this.$toast.loading({ mask: true, message: '加载中...' })
      // 用户登录
      try {
        const data = await this.getUserInfo(this.login)
        this.resData = data.data.account
        this.$router.push({ name: 'Dashboard' })
        // 关闭loading
        this.$toast.clear()
      } catch (e) {
        // 关闭loading
        this.$toast.clear()
      }
    }
  }
}
</script>

<style scoped lang="scss">
.login-box {
  position: absolute;
  bottom: 0;
  top: 0;
  left: 0;
  right: 0;
  background: #eee;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  .login {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 60vh;

    .login-logo {
      width: 70vw;
      height: .8rem;
      background: transparent;
      color:#fff;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      font-size: .5rem;
      margin-bottom: .3rem;

      .iconfont {
        color: #c20c0c;
        margin-right: .2rem;
        font-size: .5rem;
      }
    }

    .login-cell {
      margin-bottom: .625rem;
      width: 70vw;
    }

    .login-button {
      background: transparent;
      width: 70vw;

      .login-btn {
        border-radius: .2rem;
      }
    }
  }
}
</style>
