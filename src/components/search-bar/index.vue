<template>
  <div class="search">
    <div class="iconfont">&#xe61b;</div>
    <van-search class="search-input" placeholder="请输入搜索关键词" v-model="value" />
    <div class="iconfont">&#xe60a;</div>
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
      value: ''
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
  align-items: baseline;
}

.search-input {
  width: 70%;

  /deep/ .van-search__content {
    border-radius: 0.9375rem;
  }
}
</style>

