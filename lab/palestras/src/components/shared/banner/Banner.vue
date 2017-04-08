<template>
  <div class="banner">
    <img :src="banner.url" :alt="banner.title">
    <div class="alignTop">
      <container classname="inherit">
        <div class="pop">{{ pop }}</div>
        <div class="content">
          <img :src="logo.url" :alt="logo.title">
          <h1>{{ title }}</h1>
          <h2>{{ sub }}</h2>
        </div>
      </container>
    </div>
    <div class="msg">{{ msg }}</div>
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
      pop:'Não perca tempo. As vagas são limitadas.',
      msg:'Todas as palestras serão realizadas no dia: 01 de abril',
      logo:{
        url: './src/img/logo.png',
        title: 'Hello Study'
      },
      title: 'Palestras Hello Study',
      sub: 'No mês de abril, você fica sabendo tudo sobre intercâmbio com as palestras da Hello Study.',
      banner:{
        url: './src/img/banner.jpg',
        title: 'banner'
      }
    }
  }
}
</script>

<style lang="sass" scoped>
  .banner
    position: relative
    & > img
      width: 100%
      height: auto
    .msg
      font-family: 'Museo 500'
      background: #ffd400
      text-align: center
      font-size: 20px
      color: #011e45
      margin: 0 auto
      display: block
      width: 588px
      padding: 14px 0
      border-radius: 50px
      position: relative
      top: -28px
    .alignTop
      position: absolute
      top: 0
      left: 0
      width: 100%
      height: 100%
    .pop
      font-size: 16px
      color: #ffd400
      background: #011e45
      width: 424px
      text-align: center
      font-family: 'Museo 300'
      padding: 9px 0
      position: absolute
      top: 0
      left: 0
    .inherit
      height: inherit
    .content
      $height: 331px
      text-align: center
      height: $height
      margin-top: -$height/2
      position: absolute
      top: 50%
      width: 100%
      img
        margin: 20px 0 35px
      h1,
      h2
        color: #fff
      h1
        font-size: 60px
      h2
        font-size: 22px
        width: 530px
        margin: 0 auto
        line-height: 31px
        font-family: 'Museo 300'
        line-height: 29px
        position: relative
        top: 3px
</style>
