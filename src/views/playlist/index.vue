<!--
 * @Author: rsl
 * @Date: 2019-07-25
 * @LastEditors: rsl
 * @LastEditTime: 2019-07-31
 * @Description: 歌单页
 -->
<template>
  <div>
    <div class="list">
      <div class="list-introduce_wrap">
        <div class="list-nav">1</div>
        <div class="list-introduce_content">2</div>
      </div>
      <div class="list-list">3</div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Playlist',
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
.list {
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;

  &-nav {
    width: 100%;
    height: 1rem;
  }

  &-introduce {
    &_wrap {
      width: 100%;
      height: 60vw;
      display: flex;
      flex-direction: column;
    }

    &_content {
      flex: 1;
    }
  }
  &-list {
    width: 100%;
    flex: 1;
  }
}
</style>

