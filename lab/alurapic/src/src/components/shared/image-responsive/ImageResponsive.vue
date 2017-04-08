<template>
    <img :src="url" :alt="titulo"/>
</template>

<script>
export default {
  props:['url','titulo']
}
</script>

<style lang="sass" scoped>
img
  width: 100%
  height: auto
</style>
