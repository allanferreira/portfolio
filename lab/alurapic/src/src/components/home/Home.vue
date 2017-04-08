<template>
  <div class="home">
    <titulo-page :titulo="titulo"/>
    <div class="filter">
      <input :value="filtro" @input="filtro = $event.target.value" type="search" placeholder="Busque suas imagens..."/>
    </div>
    <ul class="lista">
      <li v-for="foto of fotosComFiltro">
        <image-panel :titulo="foto.titulo">
          <image-responsive :url="foto.url" :titulo="foto.titulo"/>
        </image-panel>
      </li>
    </ul>
  </div>
</template>

<script>
import TituloPage from '../shared/titulo-page/TituloPage.vue'
import ImagePanel from '../shared/image-panel/ImagePanel.vue'
import ImageResponsive from '../shared/image-responsive/ImageResponsive.vue'

export default {

  components: {
      'titulo-page': TituloPage,
      'image-panel': ImagePanel,
      'image-responsive': ImageResponsive
  },

  computed: {
      fotosComFiltro(){
        if(this.filtro){
          let exp = new RegExp(this.filtro.trim(), 'i')
          return this.fotos.filter(foto => exp.test(foto.titulo))
        } else {
          return this.fotos
        }
      }
  },

  data () {
    return {
      titulo: 'Alurapic',
      fotos:[],
      filtro:''
    }
  },

  created () {
    this.$http.get('http://localhost:3000/v1/fotos')
      .then(res => res.json())
      .then(apiFotos => this.fotos = apiFotos, err => console.log(err))
  }
}
</script>

<style lang="sass" scoped>
$background: #2c2c22
.filter
  margin: 0 10px 20px
  input
    background: darken($background, 2%)
    border: 0
    padding: 12px 20px
    font-size: 16px
    border-radius: 10px
    width: 100%
    color: #fff
    &:focus
      outline: none
.lista
  margin: 0
  padding: 0
  li
    list-style: none
    width: 33.3%
    display: inline-block
</style>
