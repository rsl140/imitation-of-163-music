<!--
 * @Author: rsl
 * @Date: 2019-09-18 11:31:22
 * @LastEditors: rsl
 * @LastEditTime: 2019-09-19 10:03:38
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
    <div ref="tabList">
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
  },
  methods: {
    _initTabListWidth () {
      const tabList = this.$refs.tabList
      const items = tabList.children
      let width = 0
      for (let i = 0; i < items.length; i++) {
        width += items[i].clientWidth
      }
      tabList.style.width = (width + 1) + 'px'
    }
  },
  beforeCreate () {

  },
  created () {
  },
  beforeMount () {

  },
  mounted () {
    this._initTabListWidth()
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
  // position: absolute;
  // left:0;
  // right:0;
  // top: 1.25rem;
  // bottom: 0;
  height: .725rem;
  width: auto;
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

