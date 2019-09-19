<!--
 * @Author: rsl
 * @Date: 2019-09-18 11:31:22
 * @LastEditors: rsl
 * @LastEditTime: 2019-09-19 22:47:00
 * @Description: 搜索历史(本地存储)
 -->
<template>
  <scroll
    class="history"
    :scrollX="true"
  >
    <div ref="itemList">
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
    _initItemListWidth () {
      const itemList = this.$refs.itemList
      const items = itemList.children
      let width = 0
      for (let i = 0; i < items.length; i++) {
        width += items[i].clientWidth
      }
      itemList.style.width = (width + 1) + 'px'
    }
  },
  beforeCreate () {

  },
  created () {
  },
  beforeMount () {

  },
  mounted () {
    this._initItemListWidth()
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

