<template>
  <h1>{{ titulo }}</h1>
</template>

<script>
export default {
  props:['titulo']
}
</script>

<style lang="sass" scoped>
h1
  font-weight: 100
  text-align: center
  font-size: 22px
  text-transform: uppercase
  margin: 60px 0
</style>
