<!--
 * @Author: rsl
 * @Date: 2019-09-18
 * @LastEditors: rsl
 * @LastEditTime: 2019-09-23
 * @Description: 搜索历史(本地存储)
 -->
<template>
  <div class="history">
    <div class="history-title">
      <div class="history-name">搜索历史</div>
      <div class="iconfont" @click="handleRemove">&#xe604;</div>
    </div>
    <scroll
      class="history-warp"
      :scroll-x="true"
    >
      <div ref="itemList">
        <div v-for="(item, index) in keywords" :key="index" class="history-item">{{ item }}</div>
      </div>
    </scroll>
  </div>
</template>

<script>
import scroll from '@/components/scroll'

export default {
  name: '',
  components: {
    scroll
  },
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
  filter: {

  },
  watch: {
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
  deactivated () {

  },
  beforeDestroy () {

  },
  destroyed () {

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
    },
    handleRemove () {
      this.$emit('handleRemove')
    }
  },
  activited () {

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
    cursor: pointer;
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

