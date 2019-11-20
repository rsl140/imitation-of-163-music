<!--
 * @Author: rsl
 * @Date: 2019-11-18
 * @LastEditors: rsl
 * @LastEditTime: 2019-11-20
 * @Description: 首页分类模块列表
-->
<template>
  <div class="button-content">
    <div class="content-warp">
      <div class="button-box">
        <span class="iconfont">
          &#xe636;
          <span class="date">
            {{ new Date().getDate() }}
          </span>
        </span>
      </div>
      <span class="description">
        每日推荐
      </span>
    </div>

    <div class="content-warp">
      <div class="button-box">
        <span class="iconfont" style="font-size: 1.1rem;">
          &#xe609;
        </span>
      </div>
      <span class="description">
        歌单
      </span>
    </div>

    <div class="content-warp">
      <div class="button-box">
        <span class="iconfont" style="font-size: .7rem;">
          &#xe605;
        </span>
      </div>
      <span class="description">
        排行榜
      </span>
    </div>

    <div class="content-warp">
      <div class="button-box">
        <span class="iconfont" style="font-size: 1.1rem;">
          &#xe60a;
        </span>
      </div>
      <span class="description">
        电台
      </span>
    </div>

    <div class="content-warp">
      <div class="button-box">
        <span class="iconfont" style="font-size: .7rem;">
          &#xe603;
        </span>
      </div>
      <span class="description">
        直播
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ButtonList',
  components: {

  },
  filters: {

  },
  mixins: [],
  props: {

  },
  data () {
    return {

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
.button-content {
  height: 2.5rem;
  display: flex;
  justify-content: space-around;
  align-items:center;

  .content-warp {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items:center;
    width: 1.8rem;

    .button-box {
      width: 1rem;
      height: 1rem;
      border-radius: .5rem;
      background: linear-gradient(to right, #ec6454 , #ea3c2b);
      display: flex;
      justify-content: center;
      align-items:center;

      .iconfont {
        font-size: .55rem;
        color: #fff;
        position: relative;
      }

      .date {
        position: absolute;
        top: .19rem;
        left: .1rem;
        color: #fff;
        font-size: .3rem;
      }
    }

    .description {
      margin-top: .2rem;
      font-size: .4rem;
      color: #8c8989;
    }
  }
}
</style>

