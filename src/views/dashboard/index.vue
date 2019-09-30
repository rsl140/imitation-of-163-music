<!--
 * @Author: rsl
 * @Date: 2019-09-17
 * @LastEditors: rsl
 * @LastEditTime: 2019-09-30
 * @Description: 首页导航
 -->
<template>
  <div>
    <search-bar></search-bar>
    <tabbar></tabbar>
  </div>
</template>

<script>
import searchBar from '@/components/search/index'
import tabbar from './tabbar/index'
export default {
  name: 'Dashboard',
  mixins: [],
  props: {

  },
  data () {
    return {

    }
  },
  computed: {

  },
  components: {
    searchBar,
    tabbar
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
</style>

