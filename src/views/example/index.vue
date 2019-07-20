<template>
  <section class="content">
    <div class="content-box">
      <h1>示例</h1>
      <p>
        <a
          href="https://binaryify.github.io/NeteaseCloudMusicApi/#/?id=neteasecloudmusicapi"
          target="_blank"
        >163api介绍</a>
      </p>
      <h1>请求返回信息</h1>
      <p>{{resData}}</p>
    </div>
  </section>
</template>

<script>
import { mapActions, mapState } from 'vuex';

export default {
  components: {},
  data() {
    return {
      resData: null,
    };
  },
  computed: {
    ...mapState({
      userInfo: state => state.example.userInfo,
    }),
  },
  created() {
    // 获取医生列表
    this.fetchData();

    // 开启loading
    this.openLoading();
  },
  methods: {
    ...mapActions({
      // 获取医生列表
      getUserInfo: 'example/getUserInfo',
      // 开启loading
      openLoading: 'loading/openLoading',
      // 关闭loading
      closeLoading: 'loading/closeLoading',
    }),

    /**
     * 获取用户信息
     * @returns {Promise<void>}
     */
    async fetchData() {
      // 用户信息，填写自己的网易云音乐账号
      let params = { phone: 手机号, password: '密码' };
      // 获取用户信息
      try {
        const data = await this.getUserInfo(params);
        this.resData = data.data.account;
        console.log(data);
        // 关闭loading
        this.closeLoading();
      } catch (e) {
        // 关闭loading
        this.closeLoading();
      }
    },

    /**
     * 路由跳转方法
     * @param link
     */
    routeLink(link) {
      this.$router.push({ path: link });
    },
  },
};
</script>

<style scoped lang="scss">
.content {
  position: absolute;
  width: 100%;
  display: flex;
  justify-content: center;
  text-align: center;

  &-box {
    font-size: 32px;
    font-weight: 800;
  }
}
</style>
