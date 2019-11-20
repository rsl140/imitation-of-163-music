<!--
 * @Author: rsl
 * @Date: 2019-09-30
 * @LastEditors: rsl
 * @LastEditTime: 2019-11-18
 * @Description: 底部导航栏
 -->
<template>
  <div class="tabbar-warp">
    <van-tabbar v-model="active" active-color="#ec5749" inactive-color="#777" :z-index="9999">
      <van-tabbar-item>
        <span>发现</span>
        <template
          slot="icon"
          slot-scope="props"
        >
          <span v-if="props.active" class="iconfont background-red">&#xea4b;</span>
          <span v-else class="iconfont">&#xea4b;</span>
        </template>
      </van-tabbar-item>
      <van-tabbar-item>
        <span>视频</span>
        <template
          slot="icon"
          slot-scope="props"
        >
          <span v-if="props.active" class="iconfont background-red">&#xe603;</span>
          <span v-else class="iconfont">&#xe603;</span>
        </template>
      </van-tabbar-item>
      <van-tabbar-item>
        <span>我的</span>
        <template
          slot="icon"
          slot-scope="props"
        >
          <span v-if="props.active" class="iconfont background-red">&#xe601;</span>
          <span v-else class="iconfont">&#xe601;</span>
        </template>
      </van-tabbar-item>
      <van-tabbar-item>
        <span>云村</span>
        <template
          slot="icon"
          slot-scope="props"
        >
          <span v-if="props.active" class="iconfont background-red">&#xe679;</span>
          <span v-else class="iconfont">&#xe679;</span>
        </template>
      </van-tabbar-item>
      <van-tabbar-item>
        <span>账号</span>
        <template
          slot="icon"
          slot-scope="props"
        >
          <span v-if="props.active" class="iconfont background-red">&#xe607;</span>
          <span v-else class="iconfont">&#xe607;</span>
        </template>
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  name: '',
  components: {

  },
  filters: {

  },
  mixins: [],
  props: {

  },
  data () {
    return {
      active: 0
    }
  },
  computed: {

  },
  watch: {

  },
  beforeCreate () {

  },
  created () {

  },
  beforeMount () {

  },
  mounted () {

  },
  beforeUpdate () {

  },
  updated () {

  },
  deactivated () {

  },
  beforeDestroy () {

  },
  destroyed () {

  },
  methods: {

  },
  activited () {

  }
}
</script>

<style scoped lang="scss">
.tabbar-warp {
  /deep/ .van-tabbar {
    background: rgba($color: #ffffff, $alpha: 0.9);
  }
}

.background-red {
  padding: .11rem .1rem;
  background: #ec5749;
  color: #fff;
  border-radius: 50%;
}
</style>

