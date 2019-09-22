<!--
 * @Author: rsl
 * @Date: 2019-09-17 17:53:22
 * @LastEditors: rsl
 * @LastEditTime: 2019-09-19 23:41:24
 * @Description: 搜索框卡片
 -->
<template>
  <div class="scard" @click="handleClick">
    <div class="scard-wrap">
      <div class="scard-index" v-if="index">
        {{index}}
      </div>
      <div class="scard-content">
        <div class="scard-content_title">
          content_title
        </div>
        <div class="scard-content_author">
          content_author
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
  data () {
    return {
    }
  },
  methods: {
    handleClick () {
      // this.$emit('playMusic', this.musicInfo, this.index - 1)
    }
  }
}
</script>

<style lang="scss" scoped>
.scard {
  height: 1.6rem;
  padding: .1rem .3rem;
  z-index: 4;

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
    text-align: center;
    margin-right: .4rem;
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

