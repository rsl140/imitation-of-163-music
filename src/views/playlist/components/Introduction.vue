<!--
 * @Author: rsl
 * @Date: 2019-08-01
 * @LastEditors: rsl
 * @LastEditTime: 2019-08-02
 * @Description: 歌单页音乐列表头部歌单介绍信息
 -->
<template>
  <div class="intro">
    <div class="intro-wrap">
      <div class="intro-img">
        <img src="../../../assets/img/default-cover.jpg" width="100%">
      </div>
      <div class="intro-comment">
        <div class="intro-comment_title">
        的数据啊看到啦撒即可的撒
        </div>
        <div class="intro-comment_author">
          大萨达撒多
        </div>
        <div class="intro-comment_summary">
          等数据库的卡萨来解答了等数据库的卡萨来解答了等数据库的卡萨来解答了
        </div>
      </div>
    </div>
    <list-play-title></list-play-title>
  </div>
</template>

<script>
import ListPlayTitle from './PlayTitle'

export default {
  name: 'PlaylistIntroduction',
  components: {
    ListPlayTitle
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
.intro {
  display: flex;
  flex-direction: column;
  background: rgba(0, 0, 0, .3);
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

    &_summary{
      height: 25%;
      line-height: .6rem;
      color: #666;
    }
  }
}
</style>

