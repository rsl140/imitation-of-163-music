<!--
 * @Author: rsl
 * @Date: 2019-09-18 11:31:22
 * @LastEditors: rsl
 * @LastEditTime: 2019-09-18 15:16:29
 * @Description: 搜索历史(本地存储)
 -->
<template>
  <scroll
    class="history"
    :scrollX="true"
  >
    <!-- <ul class="history-item">
      <li v-for="(item, index) in 50" :key="index">{{item}}</li>
    </ul>
    <div class="loading-wrapper"></div> -->
    <div>
      <div class="history-item" v-for="(item, index) in 50" :key="index">{{item}}</div>
    </div>
  </scroll>
</template>

<script>
import scroll from '@/components/scroll'

export default {
  name: '',
  mixins: [],
  props: {
    keywords: {
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
  computed: {

  },
  components: {
    scroll
  },
  filter: {

  },
  watch: {
    // keywords () {
    //   this.$nextTick(() => {
    //     this.initScroll()
    //   })
    // }
  },
  methods: {
    // initScroll () {
    //   this.$nextTick(() => {
    //     if (!this.scroll) {
    //       this.scroll = new BScroll('.history', {
    //         click: true,
    //         scrollX: true,
    //         eventPassthrough: 'vertical'
    //       })
    //     } else {
    //       this.scroll.refresh()
    //     }
    //   })
    // }
  },
  beforeCreate () {

  },
  created () {
  },
  beforeMount () {

  },
  mounted () {
    // this.initScroll()
  },
  beforeUpdate () {

  },
  updated () {

  },
  activited () {

  },
  deactivated () {

  },
  beforeDestroy () {

  },
  destroyed () {

  }
}
</script>

<style scoped lang="scss">
.history {
  position: absolute;
  left:0;
  right:0;
  top: 1.25rem;
  bottom: 0;
  height: .725rem;
  font-size: .4rem;
  overflow: hidden;
  white-space: nowrap;

  .history-item {
    padding: .125rem .25rem;
    background: #eee;
    border-radius: 0.2125rem;
    display: inline-block;
  }
}
</style>

