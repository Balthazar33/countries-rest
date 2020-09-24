import Vue from 'vue';
import Vuex from 'vuex'
Vue.use(Vuex);

export default new Vuex.Store({
    state: {
            isDarkMode:false
    },
    getters:{
        currentStateOfMode:state=>{
            return state.isDarkMode;
        }
    },
    mutations:{
        changeMode(state,payload){
            state.isDarkMode = payload;
        }
    }
}) 