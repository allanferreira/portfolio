<template>
  <div class="eventos">
    <container>
      <div v-for="evento of eventos" class="cidade">
        <h1>{{ evento.cidade }}</h1>
        <div class="eventos">
          <div v-for="palestra of evento.palestras" class="evento">
            <h2>{{ palestra.hora }}</h2>
            <h3>{{ palestra.nome }}</h3>
            <img :src="palestra.logo" :alt="palestra.logoAlt">
          </div>
        </div>
      </div>
    </container>
  </div>
</template>

<script>
import Container from '../container/Container.vue'
export default {
  components: {
      'container': Container
  },
  data(){
    return {
      eventos:[
        {
          cidade: 'São Paulo',
          local: 'Espaço Fit Eventos',
          endereco: 'Rua Peixoto Gomide, 282 Jardim Paulista, São Paulo - SP',
          palestras: [
            {
              hora: '11h',
              nome: 'Tudo sobre estudar e trabalhar no Canadá.',
              logo: './src/img/sp1.jpg',
              logoAlt: 'sp1',
              url: ''
            },
            {
              hora: '15h',
              nome: 'Tudo sobre a Austrália.',
              logo: './src/img/sp2.jpg',
              logoAlt: 'sp2',
              url: ''
            }
          ]
        }
      ]
    }
  }
}
</script>

<style lang="sass" scoped>

</style>
