<template>
  <div id="app">
    <div class="main">
      <router-view></router-view>
    </div>
  </div>

</template>

<script>
import Login from '@/components/login/login'

export default {
  name: 'App',
  components: {
    Login
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.main{
  float:left;
  width:95%; 
  height:100%;
  overflow: auto;

}
</style>
