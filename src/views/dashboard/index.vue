<!--
 * @Author: rsl
 * @Date: 2019-09-17
 * @LastEditors: rsl
 * @LastEditTime: 2019-11-20
 * @Description: 首页导航
 -->
<template>
  <div>
    <search-bar />
    <button-list />
    <tabbar />
  </div>
</template>

<script>
import searchBar from '@/components/search/index'
import tabbar from './tabbar/index'
import buttonList from './button-list/index'
export default {
  name: 'Dashboard',
  components: {
    searchBar,
    tabbar,
    buttonList
  },
  mixins: [],
  props: {

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

  },
  activited () {

  }
}
</script>

<style scoped lang="scss">
</style>

