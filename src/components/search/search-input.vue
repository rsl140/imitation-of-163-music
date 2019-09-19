<!--
 * @Author: rsl
 * @Date: 2019-09-17 17:53:22
 * @LastEditors: rsl
 * @LastEditTime: 2019-09-19 23:05:17
 * @Description: 搜索框导航栏
 -->
<template>
  <div>
    <div class="search">
      <transition name="van-slide-left">
        <div class="iconfont" v-show="isSearch">&#xe61b;</div>
      </transition>
      <van-search
        class="search-input"
        :show-action="!isSearch"
        :placeholder="placeholder"
        v-model="searchKeyword"
        @focus="searchFocus"
        @cancel="searchCancel"
        @search="search"
      />
      <div class="iconfont" style="font-size: .8rem;">&#xe60a;</div>
    </div>
  </div>
</template>

<script>
export default {
  name: '',
  mixins: [],
  props: {

  },
  data () {
    return {
      searchKeyword: '',
      isSearch: true,
      placeholder: '请输入搜索关键词'
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

