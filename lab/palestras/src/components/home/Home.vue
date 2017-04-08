<template>
  <div class="home">
    <banner></banner>
    <eventos></eventos>
  </div>
</template>

<script>
import Banner from '../shared/banner/Banner.vue'
import Eventos from '../shared/eventos/Eventos.vue'
export default {
  components: {
      'banner': Banner,
      'eventos': Eventos
  }
}
</script>

<style lang="sass">

</style>
