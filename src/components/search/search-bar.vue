<!--
 * @Author: rsl
 * @Date: 2019-09-17 17:53:22
 * @LastEditors: rsl
 * @LastEditTime: 2019-09-18 15:20:20
 * @Description: 搜索框导航栏
 -->
<template>
  <div>
    <div class="search">
      <transition name="van-slide-left">
        <div class="iconfont" v-show="leftIcon">&#xe61b;</div>
      </transition>
      <van-search
        class="search-input"
        :show-action="!leftIcon"
        :placeholder="placeholder"
        v-model="searchKeyword"
        @focus="searchFocus"
        @cancel="searchCancel"
        @search="search"
      />
      <div class="iconfont" style="font-size: .8rem;">&#xe60a;</div>
    </div>
    <!-- v-if="!leftIcon && history" -->
    <!-- <div class="search-history">
      <search-history :keywords="history"></search-history>
    </div> -->
    <scroll class="search-content" v-show="!leftIcon">
      <div>
        <search-card :index="index + 1" v-for="(item, index) in 100" :key="index"></search-card>
      </div>
    </scroll>
  </div>
</template>

<script>
import searchCard from './search-card'
import searchHistory from './search-history'
import scroll from '@/components/scroll'

export default {
  name: '',
  mixins: [],
  props: {

  },
  data () {
    return {
      searchKeyword: '',
      leftIcon: true,
      placeholder: '请输入搜索关键词',
      history: this.$ls.get('searchHistory')
    }
  },
  computed: {

  },
  components: {
    searchCard,
    searchHistory,
    scroll
  },
  filter: {

  },
  watch: {

  },
  methods: {
    search (val) {
      let history = []
      if (this.$ls.get('searchHistory')) {
        history = this.$ls.get('searchHistory')
        history.push(val)
      } else {
        history.push(val)
      }
      this.$ls.set('searchHistory', history)
      this.history = history
    },
    searchFocus () {
      this.leftIcon = false
    },
    searchCancel () {
      this.leftIcon = true
    }
  },
  beforeCreate () {

  },
  created () {

  },
  beforeMount () {

  },
  mounted () {

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
.search {
  font-size: .4rem;
  height: 1.25rem;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;

  .iconfont {
    text-align: center;
    width: 9%;
  }
}

.search-input {
  width: 80%;

  /deep/ .van-search__content {
    border-radius: 0.9375rem;
  }
}

.search-history {
  widows: 100%;
}

.search-content {
  z-index: 40;
  overflow: hidden;
  position: absolute;
  top: 1.25rem;
  bottom: 0;
  left: 0;
  right: 0;
  background: #eee;
  font-size: .4rem;
}
</style>

