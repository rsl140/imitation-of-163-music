<!--
 * @Author: rsl
 * @Date: 2019-09-17 17:53:22
 * @LastEditors: rsl
 * @LastEditTime: 2019-09-19 23:04:56
 * @Description: 搜索页
 -->
<template>
  <div>
    <div class="search">
      <search-input
        @searchFocus="searchFocus"
        @searchCancel="searchCancel"
      >
      </search-input>
    </div>
    <div class="search-history" v-if="!isSearch && history">
      <search-history :keywords="history"></search-history>
    </div>
    <scroll class="search-content" v-show="!isSearch">
      <div>
        <search-card :index="index + 1" v-for="(item, index) in 100" :key="index"></search-card>
      </div>
    </scroll>
  </div>
</template>

<script>
import searchInput from './search-input'
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
      isSearch: true,
      placeholder: '请输入搜索关键词',
      history: this.$ls.get('searchHistory')
    }
  },
  computed: {

  },
  components: {
    searchInput,
    searchCard,
    searchHistory,
    scroll
  },
  filter: {

  },
  watch: {

  },
  methods: {
    searchFocus (isSearch) {
      this.isSearch = isSearch
    },
    searchCancel (isSearch) {
      this.isSearch = isSearch
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
.search-content {
  z-index: 40;
  overflow: hidden;
  position: absolute;
  // top: 1.25rem;
  top: 2rem;
  bottom: 0;
  left: 0;
  right: 0;
  background: #eee;
  font-size: .4rem;
}
</style>

