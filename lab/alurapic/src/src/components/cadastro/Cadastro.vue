<template>
  <div class="cadastro">
    <titulo-page :titulo="titulo"/>
  </div>
</template>

<script>
import TituloPage from '../shared/titulo-page/TituloPage.vue'
export default {
  components: {
    'titulo-page': TituloPage
  },
  data () {
    return {
      titulo: 'Cadastro'
    }
  }
}
</script>

<style lang="sass" scoped>
</style>
