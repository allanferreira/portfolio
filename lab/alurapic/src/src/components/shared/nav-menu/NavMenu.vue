<template>
  <ul>
    <li v-for="route of routes">
      <router-link :to=" route.path ? route.path : '/' ">{{route.titulo}}</router-link>
    </li>
  </ul>
</template>

<script>
  import { routes } from '../../../routes.js'
  export default {
    data () {
      return {
        routes
      }
    }
  }
</script>

<style lang="sass" scoped>
$background: #2c2c22
ul
  background: darken($background, 2%)
  padding: 20px
  margin: 0
  li
    display: inline-block
    margin-right: 40px
    &:last-child
      margin-right: 0
a
  color: #fff
  text-decoration: none

.router-link-active
  //color: #03a9f4
</style>
