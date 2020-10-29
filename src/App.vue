<template>
  <div id="app">
    <header>
      <div id="nav" :class="isDarkModeOn? 'text-light bg-dark-custom-grey':'text-dark bg-light'">
      <router-link to="/"  class="link" :class="isDarkModeOn? 'text-light':'text-dark'">Where in the world?</router-link>
      <div class="change_mode" @click="change_mode">
        <span class="mode-btn-wrapper"><i class="fa fa-moon-o"></i>Dark mode</span>
      </div>
    </div>
    </header>
    <router-view/>
  </div>
</template>
<script>
 import {mapGetters} from 'vuex'
export default {
  name:'App',
  data(){
    return{
      
    }
  },
  computed:{
    ...mapGetters(['isDarkModeOn'])
  },
  methods:{
    change_mode(){
      var body = document.getElementsByTagName('body')[0];
      body.style.background = this.isDarkModeOn?"#fff":"#202d36";
      body.style.color = this.isDarkModeOn?"#fff":"#202d36";
      this.$store.commit('changeMode',this.isDarkModeOn);
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
