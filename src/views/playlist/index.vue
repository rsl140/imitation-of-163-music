<!--
 * @Author: rsl
 * @Date: 2019-07-25
 * @LastEditors: rsl
 * @LastEditTime: 2019-08-02
 * @Description: 歌单页
 -->
<template>
  <div>
    <div class="list">
      <div class="list-introduce_wrap">
        <div class="list-nav">
          <list-nav></list-nav>
        </div>
        <div class="list-introduce_content">
          <list-introduction></list-introduction>
        </div>
      </div>
      <div class="list-list">
        <list-music-card v-for="(item, index) in 8" :index="index + 1" :key="index"></list-music-card>
      </div>
    </div>
  </div>
</template>

<script>
import { ListIntroduction, ListMusicCard, ListNav } from './components'

export default {
  name: 'Playlist',
  components: {
    ListIntroduction,
    ListMusicCard,
    ListNav
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
.list {
  position: absolute;
  width: 100%;
  top: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;

  &-introduce {

    &_wrap {
      height: 70vw;
      display: flex;
      flex-direction: column;
    }

    &_content {
      flex: 1;
    }
  }
}
</style>

