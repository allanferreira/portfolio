<template>
  <div class="app">
    <router-view></router-view>
    <footer></footer>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="sass">
  @import url('https://fonts.googleapis.com/css?family=Open+Sans:300,400,700')
  @import url('http://localhost:8080/src/font/font.css')
  *
    font-family: "Open Sans", sans-serif
  footer
    background: #011e45
    position: absolute
    bottom: 0
    height: 7px
  h1,
  h2,
  h3
    font-family: "Museo 500", sans-serif
    font-weight: normal
    margin: 0

</style>
