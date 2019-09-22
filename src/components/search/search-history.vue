<!--
 * @Author: rsl
 * @Date: 2019-09-18 11:31:22
 * @LastEditors: rsl
 * @LastEditTime: 2019-09-19 23:47:42
 * @Description: 搜索历史(本地存储)
 -->
<template>
  <div class="history">
    <div class="history-title">
      <div class="history-name">搜索历史</div>
      <div class="iconfont">&#xe604;</div>
    </div>
    <scroll
      class="history-warp"
      :scrollX="true"
    >
      <div ref="itemList">
        <div class="history-item" v-for="(item, index) in 50" :key="index">{{item}}</div>
      </div>
    </scroll>
  </div>
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
  height: 1.6rem;
  width: 100%;
  font-size: .4rem;
  margin-top: .2rem;
}

.history-title {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: .3rem;
  padding: 0 .1rem;

  .history-name {
    font-weight: bold;
  }

  .iconfont {
    color: #777;
  }
}

.history-warp {
  height: .725rem;
  width: auto;
  overflow: hidden;
  white-space: nowrap;

  .history-item {
    padding: .125rem .25rem;
    background: #eee;
    border-radius: 0.3125rem;
    display: inline-block;
    margin-left: .2rem;
  }
}
</style>

