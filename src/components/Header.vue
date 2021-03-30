<template>
    <header>
        <h1>{{title}}</h1>
        <Button v-show='homePage' :text="showAddTask ? 'close' : 'Add'"  :color="showAddTask ? 'red':'green'" @btn-click = "$emit('toggle-add-task')"/>
    </header>
</template>

<script>

import Button from './Button'
export default {
    name: 'Header', 
    props: {
        title: String,
        showAddTask: Boolean
    },
    components: {
        Button,
        
    },
    computed:{
        homePage(){
            if(this.$router === '/'){
                return true
            }else
            return false
        }
    }
}
</script>

<style scoped>

</style>