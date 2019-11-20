<!--
 * @Author: rsl
 * @Date: 2019-09-17
 * @LastEditors: rsl
 * @LastEditTime: 2019-11-20
 * @Description: 搜索页
-->
<template>
  <div>
    <div class="search">
      <search-input
        @searchFocus="searchFocus"
        @searchCancel="searchCancel"
        @search="handleSearch"
      />
    </div>

    <div>
      <scroll
        v-show="!isSearch"
        class="search-content"
        :style="history ? { top: '1.27rem' } : { top: '1.2rem' }"
      >
        <div>
          <div v-if="!isSearch && history" class="search-history">
            <search-history :keywords="history" @handleRemove="handleRemoveSearchHistory" />
          </div>
          <div v-show="!isSearch" class="search-content_title">热搜榜</div>
          <search-card v-for="(item, index) in hotInfo" :key="index" :index="index + 1" :item="item" />
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
  components: {
    searchInput,
    searchCard,
    searchHistory,
    scroll
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
  mounted () {
    this.getSearchHot()
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
  bottom: 1.45rem;
  left: 0;
  right: 0;
  font-size: .4rem;
}
</style>

