<template>
  <div @click="visible = !visible" class="imagePanel">
    <slot></slot>
    <transition name="painel-titulo-fade">
      <h2 v-show="visible">{{ titulo }}</h2>
    </transition>
  </div>
</template>

<script>
export default {
  props:['titulo'],

  data(){
    return {
      visible: false
    }
  }
}
</script>

<style lang="sass" scoped>

.imagePanel
  margin-bottom: 40px
  padding: 10px
  position: relative
  cursor: pointer
  &-titulo
    padding: 10px

.painel-titulo-fade-enter-active,
.painel-titulo-fade-leave-active
    bottom: 40px
    opacity: 0

h2
  opacity: 1
  transition: .3s
  text-align: center
  text-transform: uppercase
  font-size: 16px
  margin: 0
  padding: 0
  font-weight: 500
  color: #000
  position: absolute
  bottom: 20px
  z-index: 10
  background: rgba(255,255,255,0.7)
  padding: 5px
</style>
