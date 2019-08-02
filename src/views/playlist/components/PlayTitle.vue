<!--
 * @Author: rsl
 * @Date: 2019-08-02
 * @LastEditors: rsl
 * @LastEditTime: 2019-08-02
 * @Description: 歌单列表头（播放全部）
 -->
<template>
  <div class="title">
    <div class="title-wrap">
      <div class="iconfont play-btn">
        &#xe781;
      </div>
      <div class="play-text">
        播放全部
      </div>
      <div class="play-count">
        (共117首)
      </div>
      <div class="play-collection">
        收藏10000
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PlaylistTitle',
  components: {},
  data() {
    return {
    }
  },
  methods: {

  }
}
</script>

<style lang="scss" scoped>
.title {
  display: flex;
  flex-direction: row;
  align-items: center;
  background: #fff;
  border-radius: .3rem .3rem 0 0;
  height: 100%;
  &-wrap {
    padding: 0 .2rem;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
    .play-btn {
      font-size: .7rem;
      color: #111;
    }
    .play-text {
      font-size: .5rem;
      font-weight: bold;
      color: #111;
      padding-left: .1rem;
    }
    .play-count {
      color: #999;
      font-size: .4rem;
      margin-top: -.1rem;
    }
    .play-collection {
      flex: 1;
      text-align: right;
      color: #999;
    }
  }
}
</style>

