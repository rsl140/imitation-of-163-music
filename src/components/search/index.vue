<!--
 * @Author: rsl
 * @Date: 2019-09-17
 * @LastEditors: rsl
 * @LastEditTime: 2019-09-23
 * @Description: 搜索页
 -->
<template>
  <div>
    <div class="search">
      <search-input
        @searchFocus="searchFocus"
        @searchCancel="searchCancel"
        @search="handleSearch"
      >
      </search-input>
    </div>

    <div>
      <scroll
        class="search-content"
        v-show="!isSearch"
        :style="history ? { top: '1.27rem' } : { top: '1.2rem' }"
      >
        <div>
          <div class="search-history" v-if="!isSearch && history">
            <search-history :keywords="history" @handleRemove="handleRemoveSearchHistory"></search-history>
          </div>
          <div class="search-content_title" v-show="!isSearch">热搜榜</div>
          <search-card :index="index + 1" :item="item" v-for="(item, index) in hotInfo" :key="index"></search-card>
        </div>
      </scroll>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import { mapState } from 'vuex'

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
      history: this.$ls.get('searchHistory') || null
    }
  },
  computed: {
    ...mapState({
      hotInfo: state => state.search.hotSearchInfo
    })
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
    ...mapActions({
      getSearchHotInfo: 'search/getSearchHotInfo'
    }),
    async getSearchHot (val) {
      try {
        await this.getSearchHotInfo()
      } catch (e) {
        console.log(e)
      }
    },
    handleSearch (history) {
      this.history = history
    },
    handleRemoveSearchHistory () {
      this.$ls.remove('searchHistory')
      this.history = null
    },
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
    this.getSearchHot()
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
.search-content_title {
  height: .4rem;
  z-index: 40;
  font-size: .4rem;
  font-weight: bold;
  padding: 0 .1rem;
}

.search-content {
  z-index: 40;
  overflow: hidden;
  position: absolute;
  top: 1.27rem;
  bottom: 0;
  left: 0;
  right: 0;
  font-size: .4rem;
}
</style>

