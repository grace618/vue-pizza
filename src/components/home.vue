<template>
  <div class="row">
    <div id="home" class="col-sm-12 text-center">
      <div class="background">
        <h1>欢迎大家品尝pizza!</h1>
        <h2>这里有你非常喜欢的pizza!</h2>
        <button  class="btn btn-success" @click="goToMenu">Let's order!</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods:{
      goToMenu(){
        // 跳转到上一次浏览的页面
        // this.$router.go(-1)

        // 指定跳转的地址
        // this.$router.replace('/menu')

        // 指定跳转路由的名字下
        // this.$router.replace({name:'menuLink'})

        // 通过push进行跳转
        // this.$router.push('/menu')
        this.$router.push({name:'menu'})
      }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#home{
 /* background: url('../../src/assets/pizza.jpg');*/
  height: 85vh;
  padding: 10%;
}

h1,h2{
  margin: 6%;
}

.background{
  background: #eee;
  opacity: 0.8;
  max-width: 70vw;
  margin: 0 auto;
  padding: 20px 0;
}
</style>
