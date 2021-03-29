<template>
    <header>
        <h1>{{title}}</h1>
        <Button :text="showAddTask ? 'close' : 'Add'"  :color="showAddTask ? 'red':'green'" @btn-click = "$emit('toggle-add-task')"/>
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
        
    }
}
</script>

<style scoped>

</style>