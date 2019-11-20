<template>
  <div id="app">
    <loading-view
      v-if="isLoading"
      :text="loadingText"
    />
    <router-view />
  </div>
</template>

<script>
import loadingView from './components/loading'
import { mapGetters } from 'vuex'

export default {
  components: {
    loadingView
  },
  computed: {
    ...mapGetters('loading', [
      'isLoading',
      'loadingText'
    ])
  }
}
</script>

<style>
</style>
