<template>
  <div class="abc">
    <cube-slide :interval="1000" ::interval="0.4" :speed="100" @change="changePage">
      <cube-slide-item v-for="(item, index) in items" :key="index" @click.native="clickHandler(item, index)">
        <a :href="item.url">
          <img :src="item.image">
        </a>
      </cube-slide-item>
    </cube-slide>
  </div>
</template>
<script>
  export default {
    name: '',
    data () {
      return {
        items: [
          {
            url: 'http://www.didichuxing.com/',
            image: '//webapp.didistatic.com/static/webapp/shield/cube-ui-examples-slide01.png'
          }, {
            url: 'http://www.didichuxing.com/',
            image: '//webapp.didistatic.com/static/webapp/shield/cube-ui-examples-slide02.png'
          }, {
            url: 'http://www.didichuxing.com/',
            image: '//webapp.didistatic.com/static/webapp/shield/cube-ui-examples-slide03.png'
          }
        ]
      }
    },
    methods: {
      changePage (current) {
        console.log('当前轮播图序号为:' + current)
      },
      clickHandle (item, index) {
        console.log(item, index)
      }
    }
  }
</script>

<style scoped>
.abc{
  margin-top: 50px;
}
  .abc img{

  }
</style>
