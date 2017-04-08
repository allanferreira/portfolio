<template>
  <div :class="classname" class="container">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: ['classname']
}
</script>

<style lang="sass" scoped>
  .container
    width: 1140px
    margin: 0 auto
    position: relative
</style>
