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
          <span class="iconfont background-red" v-if="props.active">&#xea4b;</span>
          <span class="iconfont" v-else>&#xea4b;</span>
        </template>
      </van-tabbar-item>
      <van-tabbar-item>
        <span>视频</span>
        <template
          slot="icon"
          slot-scope="props"
        >
          <span class="iconfont background-red" v-if="props.active">&#xe603;</span>
          <span class="iconfont" v-else>&#xe603;</span>
        </template>
      </van-tabbar-item>
      <van-tabbar-item>
        <span>我的</span>
        <template
          slot="icon"
          slot-scope="props"
        >
          <span class="iconfont background-red" v-if="props.active">&#xe601;</span>
          <span class="iconfont" v-else>&#xe601;</span>
        </template>
      </van-tabbar-item>
      <van-tabbar-item>
        <span>云村</span>
        <template
          slot="icon"
          slot-scope="props"
        >
          <span class="iconfont background-red" v-if="props.active">&#xe679;</span>
          <span class="iconfont" v-else>&#xe679;</span>
        </template>
      </van-tabbar-item>
      <van-tabbar-item>
        <span>账号</span>
        <template
          slot="icon"
          slot-scope="props"
        >
          <span class="iconfont background-red" v-if="props.active">&#xe607;</span>
          <span class="iconfont" v-else>&#xe607;</span>
        </template>
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  name: '',
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
  components: {

  },
  filters: {

  },
  watch: {

  },
  methods: {

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
  activited () {

  },
  deactivated () {

  },
  beforeDestroy () {

  },
  destroyed () {

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

