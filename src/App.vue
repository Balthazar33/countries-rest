<template>
  <div id="app">
    <header>
      <div id="nav" :class="isDarkMode? 'text-light bg-dark-custom-grey':'text-dark bg-light'">
      <router-link to="/"  class="link" :class="isDarkMode? 'text-light':'text-dark'">Where in the world?</router-link>
      <div class="change_mode" @click="change_mode">
        <span class="mode-btn-wrapper"><i class="fa fa-moon-o"></i>Dark mode</span>
      </div>
    </div>
    </header>
    <router-view/>
  </div>
</template>
<script>
 
export default {
  name:'App',
  data(){
    return{
      isDarkMode:false
    }
  },
  methods:{
    change_mode(){
      this.isDarkMode = !this.isDarkMode;
      var body = document.getElementsByTagName('body')[0];
      body.style.background = this.isDarkMode?"#202d36":"#fff";
      body.style.color = this.isDarkMode?"#fff":"#202d36";
      this.$store.commit('changeMode',this.isDarkMode);
    }
  }
}
</script>
<style>
/* @import '@/assets/style.css'; */
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-attachment: red;
}
body{
  background: #f0eded
}

#nav {
  display: flex;
  padding: 0 20px;
  justify-content: space-between;
  height: 80px;
  align-items: center;
}
#nav a {
  font-weight: 600;
  text-decoration:none;
}

/* DARK MODE SWITCH */
.change_mode{
  cursor:pointer;
}
.change_mode .mode-btn-wrapper {
  position: relative;
}
.change_mode .mode-btn-wrapper i.fa{
    position: absolute;
    left: -30%;
}
.bg-dark-custom-grey {
  background: #2b3743;
}

</style>
