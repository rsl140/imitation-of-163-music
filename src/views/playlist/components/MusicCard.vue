<!--
 * @Author: rsl
 * @Date: 2019-07-31
 * @LastEditors: rsl
 * @LastEditTime: 2019-08-02
 * @Description: 歌单页音乐列表卡片
 -->
<template>
  <div class="mcard">
    <div class="mcard-wrap">
      <div class="mcard-index" v-if="index">
        {{index}}
      </div>
      <div class="mcard-content">
        <div class="mcard-content_title">
          Don't Disturb This Groove
        </div>
        <div class="mcard-content_author">
          Me'Shell Ndeg
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PlaylistMusicCard',
  components: {},
  props: {
    index: {
      type: [Number],
      default: null,
      required: false
    }
  },
  data() {
    return {
    }
  },
  methods: {

  }
}
</script>

<style lang="scss" scoped>
.mcard {
  height: 1.6rem;
  padding: .1rem .3rem;

  &-wrap {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    height: 1.6rem;
  }

  &-index {
    font-size: .4rem;
    color: #999;
    width: .6rem;
  }

  &-content {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    height: 50%;

    &_title {
      font-size: .3rem;
    }

    &_author {
      color: #999;
    }
  }
}
</style>

