<!--
 * @Author: rsl
 * @Date: 2019-09-17
 * @LastEditors: rsl
 * @LastEditTime: 2019-09-23
 * @Description: 搜索框导航栏
 -->
<template>
  <div>
    <div class="search">
      <transition name="van-slide-left">
        <div class="iconfont" v-show="isSearch">&#xe61b;</div>
      </transition>
      <form class="search-input" action="/">
        <van-search
          :show-action="!isSearch"
          :placeholder="placeholder"
          v-model="searchKeyword"
          @focus="searchFocus"
          @cancel="searchCancel"
          @search="search"
        />
      </form>
      <div class="iconfont" style="font-size: .8rem;">&#xe60a;</div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

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
      defaultData: {}
    }
  },
  computed: {

  },
  components: {

  },
  filter: {

  },
  watch: {

  },
  methods: {
    ...mapActions({
      searchDefaultInfo: 'search/searchDefaultInfo'
    }),
    async getSearchDefault (val) {
      try {
        const data = await this.searchDefaultInfo()
        this.placeholder = data.data.showKeyword
        this.defaultData = data.data
      } catch (e) {
        this.$toast(e)
      }
    },
    search (val) {
      let history = []
      if (this.$ls.get('searchHistory')) {
        history = this.$ls.get('searchHistory')
        history.push(val)
      } else {
        history.push(val)
      }
      this.$ls.set('searchHistory', history)
      this.$emit('search', history)
    },
    searchFocus () {
      this.isSearch = false
      this.$emit('searchFocus', this.isSearch)
    },
    searchCancel () {
      this.isSearch = true
      this.$emit('searchCancel', this.isSearch)
    }
  },
  beforeCreate () {

  },
  created () {

  },
  beforeMount () {

  },
  mounted () {
    this.getSearchDefault()
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

</style>

