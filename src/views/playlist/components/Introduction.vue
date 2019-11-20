<!--
 * @Author: rsl
 * @Date: 2019-08-01
 * @LastEditors: rsl
 * @LastEditTime: 2019-11-20
 * @Description: 歌单页音乐列表头部歌单介绍信息
-->
<template>
  <div class="intro">
    <div class="intro-wrap">
      <div class="intro-img">
        <img :src="info.coverImgUrl" width="100%">
      </div>
      <div class="intro-comment">
        <div class="intro-comment_title">
          {{ info.name }}
        </div>
        <div v-if="info.creator" class="intro-comment_author">
          {{ info.creator.nickname }}
        </div>
        <div class="intro-comment_summary">
          <span v-if="info.description">{{ info.description | filtersDescription }}</span>
          <span v-else>编辑简介></span>
        </div>
      </div>
    </div>
    <list-play-title :info="info" />
  </div>
</template>

<script>
import ListPlayTitle from './PlayTitle'

export default {
  name: 'PlaylistIntroduction',
  components: {
    ListPlayTitle
  },
  filters: {
    filtersDescription: function (description) {
      if (description.length > 40) {
        return description.slice(0, 38) + '...'
      } else {
        return description
      }
    }
  },
  props: {
    info: {
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

  }
}
</script>

<style lang="scss" scoped>
.intro {
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;

  &-wrap {
    padding: .2rem;
    display: flex;
    flex-direction: row;
  }
  &-img {
    width: 45%;
    img {
      border-radius: .1rem;
    }
  }

  &-comment {
    padding-left: .8rem;
    flex: 1;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    width: 100%;
    height: 100%;

    &_title {
      height: 30%;
      line-height: .6rem;
      color: #fff;
      font-size: .4rem;
    }

    &_author {
      height: 25%;
      color: #666;
    }

    &_summary {
      height: 25%;
      line-height: .6rem;
      color: #666;
    }
  }
}
</style>

