<!--
 * @Author: rsl
 * @Date: 2019-09-17 17:53:22
 * @LastEditors: rsl
 * @LastEditTime: 2019-09-17 23:46:54
 * @Description: 搜索框导航栏
 -->
<template>
  <div>
    <div class="search">
      <transition name="van-fade">
        <div class="iconfont" v-show="leftIcon">&#xe61b;</div>
      </transition>
      <van-search
        class="search-input"
        :show-action="!leftIcon"
        placeholder="请输入搜索关键词"
        v-model="value"
        @focus="searchFocus"
        @cancel="searchCancel"
      />
      <div class="iconfont" style="font-size: .8rem;">&#xe60a;</div>
    </div>
    <div class="search-content wrapper" v-show="!leftIcon">
      <div class="content">
        <search-card :index="index + 1" v-for="(item, index) in 100" :key="index"></search-card>
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
import searchCard from './search-card'

export default {
  name: '',
  mixins: [],
  props: {

  },
  data () {
    return {
      value: '',
      leftIcon: true
    }
  },
  computed: {

  },
  components: {
    searchCard
  },
  filter: {

  },
  watch: {

  },
  methods: {
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
    this.scroll = new BScroll('.wrapper')
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

.search-content {
  z-index: 40;
  overflow: hidden;
  position: absolute;
  top:1.25rem;
  bottom: 0;
  left: 0;
  right: 0;
  background: #eee;
  font-size: .4rem;
}
</style>

