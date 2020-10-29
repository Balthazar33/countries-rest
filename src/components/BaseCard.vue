<template>
    <div :class="[isDarkModeOn?'base-card-light':'base-card-dark',swellOnHover?'swell':'']">
        <slot></slot>
    </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
    props:{
        swellOnHover:{
            required:false,
            type:String
        }
    },
    computed:{
        ...mapGetters(['isDarkModeOn'])
    }
}
</script>

<style scoped>
.base-card-light {
    box-shadow: 0px 2px 8px rgba(255,255,255,0.56);
    border-radius:15px;
}
.base-card-dark {
    box-shadow: 0px 2px 8px rgba(0,0,0,0.26);
    border-radius: 15px;
}
.swell {
    transform: scale(1.02);
}
</style>