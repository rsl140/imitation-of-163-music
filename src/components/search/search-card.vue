<!--
 * @Author: rsl
 * @Date: 2019-09-17
 * @LastEditors: rsl
 * @LastEditTime: 2019-09-23
 * @Description: 搜索框卡片
 -->
<template>
  <div class="scard" @click="handleClick">
    <div class="scard-wrap">
      <div
        v-if="index"
        class="scard-index"
        :class="index < 4 ? 'scard-index_active' : ''"
      >
        {{index}}
      </div>
      <div class="scard-content">
        <div class="scard-content_title">
          <span class="scard-content_name">
            {{item.searchWord}}
          </span>
          <span class="scard-content_score">
            {{item.score}}
          </span>
          <span class="scard-content_img">
            <img style="width: 100%;" :src="item.iconUrl" />
          </span>
        </div>
        <div class="scard-content_author">
          {{item.content}}
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
    item: {
      type: [Object],
      default: () => {
        return {}
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
    }
  }
}
</script>

<style lang="scss" scoped>
.scard {
  height: 1.4rem;
  padding: .1rem .3rem;
  z-index: 4;

  .scard-wrap {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    height: 1.6rem;
  }

  .scard-index {
    font-size: .4rem;
    color: #999;
    text-align: center;
    margin-right: .4rem;
  }

  .scard-index_active {
    color: red;
  }

  .scard-content {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    height: 50%;
    font-size: .4rem;

    .scard-content_title {
      font-size: .3rem;
      font-weight: bold;
      display: flex;
      flex-direction: row;
      align-items: baseline;

      .scard-content_name {
        margin-right: .1rem;
      }

      .scard-content_score {
        color: #ccc;
        font-size: .2rem;
        margin-right: .1rem;
      }

      .scard-content_img {
        width: .5rem;
        margin-right: .1rem;
      }
    }

    .scard-content_author {
      color: #777;
      font-size: .2rem;
    }
  }
}
</style>

