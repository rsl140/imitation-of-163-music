<!--
 * @Author: rsl
 * @Date: 2019-07-31
 * @LastEditors: rsl
 * @LastEditTime: 2019-08-08
 * @Description: 歌单页音乐列表卡片
 -->
<template>
  <div class="mcard" @click="handleClick">
    <div class="mcard-wrap">
      <div class="mcard-index" v-if="index">
        {{index}}
      </div>
      <div class="mcard-content">
        <div class="mcard-content_title">
          {{musicInfo.name}}
        </div>
        <div class="mcard-content_author">
          <span v-for="(item, index) in musicInfo.ar" :key="index">
            <template v-if="musicInfo.ar.length === index + 1">
              {{item.name}}
            </template>
            <template v-else>
              {{item.name}}/
            </template>
          </span>
          -
          <span>
            {{musicInfo.al.name}}
          </span>
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
    },
    musicInfo: {
      type: [Array, Object],
      default: function () {
        return []
      },
      required: true
    }
  },
  data () {
    return {
    }
  },
  methods: {
    handleClick () {
      this.$emit('playMusic', this.musicInfo, this.index - 1)
    }
  }
}
</script>

<style lang="scss" scoped>
.mcard {
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

