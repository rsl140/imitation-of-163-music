<!--
 * @Author: rsl
 * @Date: 2019-07-25
 * @LastEditors: rsl
 * @LastEditTime: 2019-09-23 16:15:36
 * @Description: 播放器页面
 -->
<template>
  <div class="play">
    <div class="play-bg_cover" :style="{backgroundImage: 'url(' + musicInfo.al.picUrl + ')'}"></div>
    <div class="play-header">
      <div
      class="iconfont play-header_arrow"
      @click="preClick"
      >
      &#xe7ec;</div>
      <div class="play-header_title">
        <div class="play-header_name">{{musicInfo.name}}</div>
        <div class="play-header_singer">
          <span v-for="(item, index) in musicInfo.ar" :key="item.id">
            <template v-if="musicInfo.ar.length === index + 1">
              {{item.name}}
            </template>
            <template v-else>
              {{item.name}}/
            </template>
          </span>
        </div>
      </div>
    </div>
    <div class="play-content">
      <img src="../../assets/img/rod.png" class="play-cd_rod" :style="isPlay ? {transform: 'rotate(0deg)'} : {}">
      <div class="play-cd_wrap" :style="isPlay ? {animationPlayState: 'running'} : {}">
        <img class="play-cd_cover" src="../../assets/img/cd.png">
        <div class="play-cd_defaultimg" :style="{backgroundImage: 'url(' + musicInfo.al.picUrl + ')'}"></div>
      </div>
    </div>
    <div class="play-footer">
      <div class="play-footer_box play-progress ">
        <div class="play-timing">{{currentTime | fomatTime}}</div>
        <div class="play-progress_wrap">
          <div class="play-progress_played" :style="{ width: pleayedLegth }"></div>
          <div class="play-progress_point" :style="{ left: pleayedLegth }"></div>
        </div>
        <div class="play-time">{{duration | fomatTime}}</div>
      </div>
      <div class="play-footer_box">
        <div class="iconfont play-previous" @click="previous">
          &#xe7ec;
        </div>
        <div class="iconfont play-btn" @click="play">
          {{isPlay ? '&#xe783;' : '&#xe781;'}}
        </div>
        <div class="iconfont play-next" @click="next">
          &#xe7eb;
        </div>
      </div>
    </div>
    <!-- <audio
      ref="audio"
      @ended="end"
      autoplay
      @canplay="ready"
      @error="error"
      @timeupdate="updateTime"
    > -->
    <audio
      ref="audio"
      autoplay
      @timeupdate="updateTime"
    >
    </audio>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { mapActions } from 'vuex'

export default {
  name: 'Play',
  components: {},
  computed: {
    ...mapState({
      musicInfo: state => state.playlist.musicInfo,
      musicIndex: state => state.playlist.musicIndex,
      playListInfo: state => state.playlist.playListInfo
    })
  },
  mounted () {
    this.getMusucInfo()
  },
  filters: {
    fomatTime: interval => {
      interval = interval | 0
      const minute = interval / 60 | 0
      let second = interval % 60
      if (second < 10) {
        second = '0' + second
      }
      return minute + ':' + second
    }
  },
  data () {
    return {
      pleayedLegth: '10%',
      resData: [],
      isPlay: false,
      duration: 0,
      currentTime: 0
    }
  },
  methods: {
    ...mapActions({
      getMusicUrl: 'playing/getMusicUrl',
      setMusicInfo: 'playlist/setMusicInfo'
    }),
    async getMusucInfo () {
      const params = { id: this.musicInfo.id }
      // 获取用户信息
      try {
        const data = await this.getMusicUrl(params)
        this.resData = data.data.data[0]
        this.$refs.audio.src = data.data.data[0].url
        this.$refs.audio.play()
        const _this = this
        // 计算歌曲总时长
        const stop = setInterval(() => {
          _this.duration = _this.$refs.audio.duration
          if (_this.duration) {
            clearInterval(stop)
          }
        }, 150)
        this.isPlay = true
      } catch (e) {
        console.log(e)
      }
    },
    /**
     * @description: 播放按钮
     * @param {type}
     * @return:
     */
    play () {
      if (this.isPlay) {
        this.$refs.audio.pause()
      } else {
        this.$refs.audio.play()
      }
      this.isPlay = !this.isPlay
    },
    updateTime (e) {
      this.currentTime = e.target.currentTime
      if (this.duration) {
        this.pleayedLegth = this.currentTime / this.duration * 100 + '%'
      }
    },
    /**
     * @description: 下一首歌
     * @param {type}
     * @return:
     */
    next () {
      if (this.musicIndex + 1 !== this.playListInfo.tracks.length) {
        const index = this.musicIndex + 1
        const musicInfo = this.playListInfo.tracks[index]
        this.setMusicInfo({ musicInfo, index })
      }
    },
    /**
     * @description: 上一首歌
     * @param {type}
     * @return:
     */
    previous () {
      if (this.musicIndex !== 0) {
        const index = this.musicIndex - 1
        const musicInfo = this.playListInfo.tracks[index]
        this.setMusicInfo({ musicInfo, index })
      }
    },
    /**
     * @description: 返回上一级
     * @param {type}
     * @return: void
     */
    preClick () {
      this.$router.push({ name: 'Playlist' })
    }
  }
}
</script>

<style lang="scss" scoped>
.play {
  position: absolute;
  width: 100%;
  top: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  background: rgba(0, 0, 0, .3);
  &-bg {
    &_cover {
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
      opacity: .3;
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      filter: blur(2.66667vw);
    }
  }
  &-header {
    height: 1rem;
    display: flex;
    padding: .3rem .2rem;
    color: #fff;
    z-index: 3;

    &_arrow {
      font-size: .63rem;
      line-height: 1rem;
    }

    &_title {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      flex: 1;
      width: 100%;
    }

    &_name {
      font-size: .34rem;
    }

    &_singer {
      font-size: .22rem;
    }
  }
  @keyframes rotate
  {
    0% {
      transform: rotate(0)
    }
    100% {
      transform: rotate(360deg)
    }
  }
  &-content {
    flex: 1;
    width: 100%;
    padding: 2rem 0;
    overflow: hidden;
    position: relative;
    z-index: 3;
    .play-cd {
      &_wrap {
        position: relative;
        width: 90.133333vw;
        margin: 0 auto;
        border-radius: 50%;
        border: .01rem solid #eaeaea85;
        animation: rotate 10s linear infinite running;
        animation-play-state: paused;
      }
      &_cover {
        display: block;
        width: 100%;
        z-index: 1;
      }
      &_defaultimg {
        position: absolute;
        left: 50%;
        top: 50%;
        display: block;
        height: 58.66667vw;
        width: 58.66667vw;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        background-image: url(../../assets/img/default-cover.jpg);
        margin-left: -32%;
        margin-top: -32%;
        z-index: -1;
      }
      &_rod {
        position: absolute;
        top: -.4rem;
        left: 50%;
        display: block;
        width: 3rem;
        margin-left: -5.33333vw;
        transform-origin: 4vw 4vw;
        transform: rotate(-30deg);
        transition: transform .5s ease;
        z-index: 2;
      }
    }
  }

  &-footer {
    height: 20vh;
    display: flex;
    flex-direction: column;
    padding: .05rem .2rem;
    color: #fff;
    z-index: 3;

    &_box {
      display: flex;
      justify-content:space-between;
      padding: 0 0 .6rem 0;
    }
  }
  &-timing {
    color: #2c3e50;
    padding: 0 .3rem 0 0;
  }
  &-progress {
    align-items: center;
    &_wrap {
      flex: 1;
      height: .05rem;
      background: #fff;
      border-radius: .02rem;
      position: relative;
    }
    &_played {
      // width: 10%;
      height: .05rem;
      position: absolute;
      top: 0;
      left: 0;
      background-color: #d02d2d;
    }
    &_point {
      width: .2rem;
      height: .2rem;
      background-color: #d02d2d;
      border: .1rem solid #fff;
      border-radius: 50%;
      position: absolute;
      top: -.16rem;
      // left: 10%;
    }
  }
  &-time {
    color: #2c3e50;
    padding: 0 0 0 .3rem;
  }
  &-previous {
    font-size: 1.3rem;
  }
  &-btn {
    text-align: center;
    font-size: 1.3rem;
  }
  &-next {
    font-size: 1.3rem;
  }
}
</style>

