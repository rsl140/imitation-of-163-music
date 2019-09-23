<!--
 * @Author: rsl
 * @Date: 2019-07-25
 * @LastEditors: rsl
 * @LastEditTime: 2019-09-23 16:15:08
 * @Description: 歌单页
 -->
<template>
  <div>
    <div class="list" ref="wrapper">
      <div>
        <div class="list-introduce_wrap">
          <div class="list-introduce_cover" :style="{ backgroundImage: 'url(' + resData.coverImgUrl + ')'}"></div>
          <div class="list-nav">
            <list-nav></list-nav>
          </div>
          <div class="list-introduce_content">
            <list-introduction :info="resData"></list-introduction>
          </div>
        </div>
        <div class="list-list">
          <list-music-card
            v-for="(item, index) in resData.tracks"
            :key="index"
            :index="index + 1"
            :music-info="item"
            @playMusic="playMusic"
          >
          </list-music-card>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import { ListIntroduction, ListMusicCard, ListNav } from './components'
// import Bscroll from 'better-scroll'

export default {
  name: 'Playlist',
  components: {
    ListIntroduction,
    ListMusicCard,
    ListNav
  },
  created () {
    // 获取用户歌单
    this.getPlayList()
  },
  // mounted () {
  //   this.scroll = new Bscroll(this.$refs.wrapper)
  // },
  data () {
    return {
      resData: []
    }
  },
  methods: {
    ...mapActions({
      getPlayListInfo: 'playlist/getPlayListInfo',
      setMusicInfo: 'playlist/setMusicInfo'
    }),
    /**
     * @description: 获取用户歌单
     * @param {type}
     * @return:
     */
    async getPlayList () {
      const params = { id: 2746618427 }
      // 获取用户信息
      try {
        const data = await this.getPlayListInfo(params)
        this.resData = data.data.playlist
      } catch (e) {
        console.log(e)
      }
    },
    /**
     * @description: 播放音乐
     * @param {Array} 音乐详情
     * @param {Number} 下标
     * @return:
     */
    playMusic (musicInfo, index) {
      this.setMusicInfo({ musicInfo, index })
      this.$router.push({ name: 'Play' })
    }
  }
}
</script>

<style lang="scss" scoped>
.list {
  width: 100%;
  display: flex;
  flex-direction: column;

  &-introduce {

    &_wrap {
      height: 70vw;
      display: flex;
      flex-direction: column;
      position: relative;
    }
    &_cover {
      position: absolute;
      top: 0;
      left: 0;
      z-index: -1;
      width: 100%;
      height: 55vw;
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
      filter: blur(8vw);
    }

    &_content {
      flex: 1;
    }
  }
}
</style>

