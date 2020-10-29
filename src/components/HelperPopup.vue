<template>
<div class="pop_up_box">
    <div class="dimmer" @click="closeHelper">
        
        <div class="help_text">
            
            <header>
                <span @click="closeHelper" class="close_pop_up">
                    <i class="fa fa-window-close"></i>
                </span>
                <h3 class="h3">Tip <i class="fa fa-lightbulb-o"></i> </h3>
            </header>
            <main>
                <p>Click on a country card to get additional info.</p>
            </main> 
             
            
        </div>
        
    </div>
</div>    
</template>

<script>
export default {
    methods:{
        closeHelper(){
            this.$emit('close-helper')
        }
    }
}
</script>

<style scoped>
.pop_up_box{

}
.dimmer{
    position: fixed;
    background: rgba(0,0,0,0.7);
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    z-index: 1;
}

.help_text {
    z-index: 2;
    position: absolute;
    background: #fff;
    border: 10px solid;
    top: 40%;
    border-radius: 30px;
    left: 40%;
    padding: 20px;
}
.help_text p {
    margin: 20px 0;
}
.help_text header {
    position: relative;
}
.close_pop_up{
    position: absolute;
    right:0;
    cursor: pointer;
}
.close_pop_up i {
    font-size: 20px;
}

@media only screen and (max-width: 767px) {
    .help_text{
        left:0;
        top:20%;
    }
}

</style>