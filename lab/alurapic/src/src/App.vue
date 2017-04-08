<template>
  <div class="app">
    <nav-menu></nav-menu>
    <div class="app-container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  import NavMenu from './components/shared/nav-menu/NavMenu.vue'
  export default {
    components: {
        'nav-menu': NavMenu
    }
  }
</script>

<style lang="sass">
$background: #2c2c22
body
  background: $background
  color: #fff
  margin: 0
  padding: 0
  font-family: Helvetica, arial, sans-serif

.app
  &-container
    width: 800px
    margin: 0 auto
</style>
